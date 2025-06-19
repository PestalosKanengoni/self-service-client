import { AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild, ChangeDetectorRef } from '@angular/core';
import { AntiSpoofingService } from '../../services/anti-spoofing.service';
import { NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-profile-photo-snap',
  templateUrl: './profile-photo-snap.component.html',
  styleUrl: './profile-photo-snap.component.scss',
})
export class ProfilePhotoSnapComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('webcam', { static: false }) videoElement!: ElementRef<HTMLVideoElement>;
  @Output() photoCaptured = new EventEmitter<NzUploadFile[]>(); // Event to send files to the parent
  @Output() captureComplete = new EventEmitter<void>();

  result: string = 'Waiting for detection...';
  loading: boolean = true; // Show loader initially

  constructor(private antiSpoofingService: AntiSpoofingService, private cdr: ChangeDetectorRef) {}

  captureImageButton: boolean = false;

  ngOnDestroy(): void {
  }

  ngOnInit() {
    setTimeout(() => {
      this.displayText = 'Capturing details';
    }, 3000);

    setTimeout(() => {
      
      this.displayText = 'Capture the image';
    }, 5000);
    // this.antiSpoofingService.getResponse((response: any) => {
    //   console.log(response);
    //   if (response.status == 'Real Face' && this.keepCapturing) {
    //     if (this.captureTime == 2) {
    //       this.captureImageButton = true;
    //       this.keepCapturing = false;
    //     } else {
    //       this.captureTime += 1;
    //       this.displayText = 'Hold steady';
    //     }
    //   } else {
    //     // this.captureImageButton = false;
    //     // this.captureTime = 0;
    //     this.keepCapturing = true;
    //     this.displayText = 'Please get into the frame';
    //   }
    //   this.result =
    //     response.status +
    //     (response.data ? ` : ${JSON.stringify(response.data)}` : '');
    // });
  }

  // ngAfterViewInit() {
  //   this.startWebcam();
  // }


  ngAfterViewInit() {
    setTimeout(() => {
      this.cdr.detectChanges(); // Force update
      if (this.videoElement?.nativeElement) {
        this.startWebcam(); // Calls startWebcam to request camera access
      } else {
        console.error('Video element not found');
      }
    }, 500);
  }
  

  

  displayText: string = 'Loading...';
  captureTime: number = 0;
  keepCapturing: boolean = true;

  // startWebcam() {
  //   if (navigator.mediaDevices.getUserMedia) {
  //     navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
  //       this.videoElement.nativeElement.srcObject = stream;
  //       this.videoElement.nativeElement.play();

  //       this.videoElement.nativeElement.onloadeddata = () => {
  //         this.loading = false; // Hide loader when video starts
  //       };

  //       this.captureFrame();
  //     });
  //   } else {
  //     console.error('getUserMedia is not supported in this browser.');
  //     this.loading = false; // Hide loader if webcam is not supported
  //   }
  // }

  startWebcam() {
    console.log("MediaDevices Support:", !!navigator?.mediaDevices?.getUserMedia);
  
    if (navigator?.mediaDevices?.getUserMedia) {
      // Requesting the camera permission explicitly
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          if (this.videoElement?.nativeElement) {
            // Once the camera stream is accessed, set it to the video element
            this.videoElement.nativeElement.srcObject = stream;
            this.videoElement.nativeElement.play();
          }
  
          this.videoElement.nativeElement.onloadeddata = () => {
            this.loading = false;
          };
  
          this.captureFrame();
        })
        .catch((error) => {
          // Handle the case where the user denies access or another error occurs
          console.error("Error accessing webcam:", error);
          this.loading = false;
        });
    } else {
      console.error('getUserMedia is not supported in this browser.');
      this.loading = false;
    }
  }
  
  

  stopWebcam() {
    const stream = this.videoElement.nativeElement.srcObject as MediaStream;
  
    if (stream) {
      // Get all media tracks (video and audio)
      const tracks = stream.getTracks();
  
      // Stop each track
      tracks.forEach(track => track.stop());
  
      // Reset the video element's source object
      this.videoElement.nativeElement.srcObject = null;
    }
  }
  

  captureImage: string | null = null; // Store the captured image

  captureFrame() {
    setInterval(() => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      if (this.videoElement && context) {
        const video = this.videoElement.nativeElement;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Convert frame to Base64
        const frame = canvas.toDataURL('image/jpeg').split(',')[1];
        this.antiSpoofingService.sendFrame(frame); // Send frame to backend
      }
    }, 1000);
  }

  takeImage() {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
  
    if (this.videoElement && context) {
      const video = this.videoElement.nativeElement;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
          this.captureImage = canvas.toDataURL('image/jpeg');
  
      // Compress the image before converting to file
      canvas.toBlob(blob => {
        if (blob) {
          const compressedFile = new File([blob], 'captured-image.jpg', { type: 'image/jpeg' });
  
          console.log('Compressed File:', compressedFile);
  
          // Convert to NzUploadFile format
          const uploadFile: NzUploadFile = {
            uid: `${Date.now()}`, // Unique ID
            name: compressedFile.name,
            status: 'done',
            url: URL.createObjectURL(compressedFile), // Preview
            originFileObj: compressedFile,
          };
  
          // Add to the file list
          this.profilePhotoFileList = [...this.profilePhotoFileList, uploadFile];
  
          // Emit the compressed file
          this.photoCaptured.emit(
            this.profilePhotoFileList.map(file => file.originFileObj)
          );
        }
      }, 'image/jpeg', 0.6); // Compression quality (0.6 = 60%)
    }

    this.photoCaptured.emit(
      this.profilePhotoFileList.map(file => file.originFileObj) // Extract actual File objects
    );
    this.stopWebcam()
  
    this.next();
  }
  

  base64ToFile(base64: string, filename: string): File {
    const arr = base64.split(',');
    const mime = arr[0].match(/:(.*?);/)?.[1] || 'image/jpeg';
    const byteString = atob(arr[1]); // Decode Base64
    const u8arr = new Uint8Array(byteString.length);
  
    for (let i = 0; i < byteString.length; i++) {
      u8arr[i] = byteString.charCodeAt(i);
    }
  
    const file = new File([u8arr], filename, { type: mime });
    console.log('Created File:', file); // Debugging
    return file;
  }
  
  
  

  profilePhotoFileList: any[] = [];


  current = 0;

  index = 'First-content';

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    if (this.current == 1) {
      this.startWebcam();
    }
  }

  done(): void {
    console.log("done")
    this.captureComplete.emit();
    
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 'First-content';
        break;
      }
      case 1: {
        this.index = 'Second-content';
        break;
      }
      case 2: {
        this.index = 'third-content';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }
}
