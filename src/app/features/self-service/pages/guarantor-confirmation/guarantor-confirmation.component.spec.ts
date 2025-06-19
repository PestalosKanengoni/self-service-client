import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuarantorConfirmationComponent } from './guarantor-confirmation.component';

describe('GuarantorConfirmationComponent', () => {
  let component: GuarantorConfirmationComponent;
  let fixture: ComponentFixture<GuarantorConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuarantorConfirmationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuarantorConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
