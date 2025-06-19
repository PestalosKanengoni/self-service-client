import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfcLinkLoginComponent } from './afc-link-login.component';

describe('AfcLinkLoginComponent', () => {
  let component: AfcLinkLoginComponent;
  let fixture: ComponentFixture<AfcLinkLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AfcLinkLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfcLinkLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
