import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountOpeningComponent } from './account-opening.component';

describe('AccountOpeningComponent', () => {
  let component: AccountOpeningComponent;
  let fixture: ComponentFixture<AccountOpeningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountOpeningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountOpeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
