import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class PerformanceService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.observeLCP();
  }

  private observeLCP() {
    if (isPlatformBrowser(this.platformId) && 'PerformanceObserver' in window) {
      const observer = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP candidate:', lastEntry);
      });

      observer.observe({ type: 'largest-contentful-paint', buffered: true });

      window.addEventListener('beforeunload', () => {
        observer.disconnect();
      });
    }
  }
}
