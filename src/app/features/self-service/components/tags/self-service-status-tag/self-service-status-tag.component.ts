import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-self-service-status-tag',
  templateUrl: './self-service-status-tag.component.html',
  styleUrl: './self-service-status-tag.component.scss'
})
export class SelfServiceStatusTagComponent {
  @Input() status: any;

}
