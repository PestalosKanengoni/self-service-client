import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FcbScoreTagComponent } from './fcb-score-tag.component';

describe('FcbScoreTagComponent', () => {
  let component: FcbScoreTagComponent;
  let fixture: ComponentFixture<FcbScoreTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FcbScoreTagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FcbScoreTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
