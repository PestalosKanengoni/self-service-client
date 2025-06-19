import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceApplicationComponent } from './insurance-application.component';

describe('InsuranceApplicationComponent', () => {
  let component: InsuranceApplicationComponent;
  let fixture: ComponentFixture<InsuranceApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsuranceApplicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
