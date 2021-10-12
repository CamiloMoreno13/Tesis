import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceAdminComponent } from './space-admin.component';

describe('SpaceAdminComponent', () => {
  let component: SpaceAdminComponent;
  let fixture: ComponentFixture<SpaceAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
