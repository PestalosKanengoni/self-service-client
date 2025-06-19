import {Component, Input, SimpleChanges} from '@angular/core';
import {NzProgressStatusType} from "ng-zorro-antd/progress";

@Component({
  selector: 'app-loader-full-page',
  template: `
    <div class="fullscreen-overlay d-flex justify-content-center align-items-center w-100 h-100">
      <div>
        <div class="d-flex justify-content-center mb-5">
          <div *ngIf="!showError" class="pulsing-logo d-flex justify-content-center align-items-center">
            <afc-logo-mark></afc-logo-mark>
          </div>
          <div *ngIf="showError" class=" d-flex justify-content-center align-items-center">
            <svg style="width: 100px; height: 100px" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g color="#E8392DFF" fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2M9.879 8.464a1 1 0 0 0-1.498 1.32l.084.095l2.12 2.12l-2.12 2.122a1 1 0 0 0 1.32 1.498l.094-.083L12 13.414l2.121 2.122a1 1 0 0 0 1.498-1.32l-.083-.095L13.414 12l2.122-2.121a1 1 0 0 0-1.32-1.498l-.095.083L12 10.586z"/></g></svg>
          </div>
        </div>
        <p class="loader-full-page-text">{{loadingText}}</p>
        <p class="loader-full-page-info">{{ loadingInfo }}</p>
        <div class="mt-3">
          <nz-progress [nzPercent]="loadingPercentage" nzSize="small" [nzStatus]="progressBarStatus"></nz-progress>
        </div>
        <!--        {{timeLapsed}}-->
        <div class="mt-5" *ngIf="showWarning">
          <nz-alert
            nzType="warning"
            nzDescription="This usually doesn't take this long. There may be some system challenges"
            nzShowIcon="true"
          ></nz-alert>
        </div>
      </div>
    </div>
  `,
  styleUrl: './loader-full-page.component.scss'
})
export class LoaderFullPageComponent {
  @Input() loadingText: string = 'Loading';
  @Input() loadingInfo: string = 'Please wait a few seconds';
  @Input() success: boolean = true;
  @Input() loadingComplete: boolean = false;

  loadingPercentage: number = 0;

  showWarning: boolean = false;
  showError: boolean = false;
  progressBarStatus: NzProgressStatusType = "normal"


  ngOnInit() {
    this.initializeLoader();
  }

  initializeLoader() {
    this.progressBarStatus = "active"
    setTimeout(() => {
      this.loadingPercentage = 67
    }, 500);
  }


  ngOnDestroy() {
    this.timeLapsed = 0;
    this.interval = null;
  }

  public timeLapsed: number = 0;
  interval: any;

  startTimer() {
    this.interval = setInterval(() => {
      this.timeLapsed++;
    },1000);
    if (this.timeLapsed > 10) {
      this.showWarning = true;
    }
    if (this.timeLapsed > 60) {
      this.progressBarStatus = "exception"
      this.showError = true;
      this.loadingText = "Oh snap!"
      this.loadingInfo = "Something went wrong. Don't fret, the engineers have been notified."
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.loadingComplete) {
      this.loadingPercentage = 100;
    }
  }
}
