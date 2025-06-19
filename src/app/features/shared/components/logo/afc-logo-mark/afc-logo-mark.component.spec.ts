import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfcLogoMarkComponent } from './afc-logo-mark.component';

describe('AfcLogoMarkComponent', () => {
  let component: AfcLogoMarkComponent;
  let fixture: ComponentFixture<AfcLogoMarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AfcLogoMarkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfcLogoMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
