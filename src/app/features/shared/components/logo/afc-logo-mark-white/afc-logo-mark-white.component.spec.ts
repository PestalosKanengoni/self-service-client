import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfcLogoMarkWhiteComponent } from './afc-logo-mark-white.component';

describe('AfcLogoMarkWhiteComponent', () => {
  let component: AfcLogoMarkWhiteComponent;
  let fixture: ComponentFixture<AfcLogoMarkWhiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AfcLogoMarkWhiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfcLogoMarkWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
