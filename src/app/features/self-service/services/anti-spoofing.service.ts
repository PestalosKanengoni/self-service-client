import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AntiSpoofingService {
  private socket!: WebSocket;
  private url = 'ws://localhost:8000/ws'; // Replace with your WebSocket URL
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 10; // Max retries before stopping
  private reconnectDelay = 2000; // Start with 2 seconds delay

  private messageListeners: ((response: any) => void)[] = [];

  constructor() {
    this.connect();
  }

  private connect() {
    console.log('Attempting WebSocket connection...');
    this.socket = new WebSocket(this.url);

    this.socket.onopen = () => {
      console.log('WebSocket connected');
      this.reconnectAttempts = 0; // Reset reconnection attempts
    };

    this.socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      this.messageListeners.forEach((callback) => callback(message));
    };

    this.socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    this.socket.onclose = () => {
      console.warn('WebSocket disconnected. Attempting to reconnect...');
      this.reconnect();
    };
  }

  private reconnect() {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      const delay = this.reconnectDelay * this.reconnectAttempts; // Exponential backoff

      console.log(`Reconnecting in ${delay / 1000} seconds...`);
      setTimeout(() => {
        this.connect();
      }, delay);
    } else {
      console.error('Max reconnect attempts reached. WebSocket not reconnecting.');
    }
  }

  sendFrame(frame: string) {
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(frame);
    } else {
      console.error('WebSocket is not open. Ready state:', this.socket.readyState);
    }
  }

  getResponse(callback: (response: any) => void) {
    this.messageListeners.push(callback);
  }
}
