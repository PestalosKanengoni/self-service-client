import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderFullPageComponent } from './loader-full-page.component';

describe('LoaderFullPageComponent', () => {
  let component: LoaderFullPageComponent;
  let fixture: ComponentFixture<LoaderFullPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoaderFullPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaderFullPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
