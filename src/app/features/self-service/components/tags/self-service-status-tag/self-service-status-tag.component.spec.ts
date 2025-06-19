import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfServiceStatusTagComponent } from './self-service-status-tag.component';

describe('SelfServiceStatusTagComponent', () => {
  let component: SelfServiceStatusTagComponent;
  let fixture: ComponentFixture<SelfServiceStatusTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelfServiceStatusTagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfServiceStatusTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
