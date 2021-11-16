import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';

import { PerfilesComponent } from './perfiles.component';

describe('PerfilesComponent', () => {
  let component: PerfilesComponent;
  let fixture: ComponentFixture<PerfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilesComponent ],
      imports: [ RouterTestingModule, AngularFireModule.initializeApp(environment.firebaseConfig)]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
