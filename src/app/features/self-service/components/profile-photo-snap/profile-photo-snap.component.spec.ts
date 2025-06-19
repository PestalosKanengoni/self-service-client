import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePhotoSnapComponent } from './profile-photo-snap.component';

describe('ProfilePhotoSnapComponent', () => {
  let component: ProfilePhotoSnapComponent;
  let fixture: ComponentFixture<ProfilePhotoSnapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfilePhotoSnapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilePhotoSnapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
