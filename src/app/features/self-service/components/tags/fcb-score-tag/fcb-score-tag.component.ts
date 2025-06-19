import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fcb-score-tag',
  templateUrl: './fcb-score-tag.component.html',
  styleUrl: './fcb-score-tag.component.scss'
})
export class FcbScoreTagComponent {
  @Input() score: any;


}
