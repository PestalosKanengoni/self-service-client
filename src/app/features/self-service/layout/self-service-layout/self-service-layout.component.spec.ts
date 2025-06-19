import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfServiceLayoutComponent } from './self-service-layout.component';

describe('SelfServiceLayoutComponent', () => {
  let component: SelfServiceLayoutComponent;
  let fixture: ComponentFixture<SelfServiceLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelfServiceLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfServiceLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
