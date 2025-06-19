import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { SubscriptionsManager } from '../../../../../core/helpers/SubscriptionsManager';
import { HandleErrorService } from '../../../../../core/exceptions/handle-error.service';

@Component({
  selector: 'afc-button',
  template: `
    <button
      nz-button
      (click)="onClick()"
      [ngClass]="{
        'btn-primary': style === 'primary',
        'btn-secondary': style === 'secondary',
        'btn-gradient': style === 'gradient',
        'btn-gradient-light': style === 'gradient-light',
        'btn-cancel': style === 'cancel',
        'btn-exit': style === 'exit',
        'btn-sm': size === 'sm' && !loading,
        'btn-md': size === 'md' && !loading,
        'btn-lg': size === 'lg' && !loading,
        'btn-lg-long': size === 'lg-long' && !loading,
        'loading-sm': loading && size === 'sm',
        'loading-md': loading && size === 'md',
        'loading-lg': loading && size === 'lg',
        'default-btn': !loading,
      }"
      [nzLoading]="loading"
      [disabled]="disableButton"
    >
      <span *ngIf="!loading">{{ label }}</span>
    </button>
  `,
  styleUrl: './button.component.scss',
})
export class ButtonComponent implements OnInit, OnDestroy {
  constructor(private handleErrorService: HandleErrorService) {}

  @Input() label: string = 'Button';
  @Input() loading: boolean = false;
  @Input() disableButton: boolean = false;
  @Input() style:
    | 'primary'
    | 'secondary'
    | 'gradient'
    | 'gradient-light'
    | 'exit'
    | 'cancel' = 'primary';
  @Input() size: 'lg' | 'md' | 'sm' | 'lg-long' = 'md';
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  subs = new SubscriptionsManager();

  onClick(): void {
    this.buttonClick.emit();
  }

  ngOnInit() {
    this.subs.add = this.handleErrorService.isLoading.subscribe((res: any) => {
      this.loading = res;
    });
  }

  ngOnDestroy() {
    this.subs.dispose();
  }
}
