import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FcbStatusTagComponent } from './fcb-status-tag.component';

describe('FcbStatusTagComponent', () => {
  let component: FcbStatusTagComponent;
  let fixture: ComponentFixture<FcbStatusTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FcbStatusTagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FcbStatusTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
