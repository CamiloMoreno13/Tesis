import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingAdminComponent } from './onboarding-admin.component';

describe('OnboardingAdminComponent', () => {
  let component: OnboardingAdminComponent;
  let fixture: ComponentFixture<OnboardingAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
