import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fcb-status-tag',
  templateUrl: './fcb-status-tag.component.html',
  styleUrl: './fcb-status-tag.component.scss'
})
export class FcbStatusTagComponent {
  @Input() status: any;

}
