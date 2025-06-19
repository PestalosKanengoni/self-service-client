import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfcLogoLgComponent } from './afc-logo-lg.component';

describe('AfcLogoLgComponent', () => {
  let component: AfcLogoLgComponent;
  let fixture: ComponentFixture<AfcLogoLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AfcLogoLgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfcLogoLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
