import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';

import { ProductoComponent } from './producto.component';

/*
describe('ProductoComponent', () => {
  let component: ProductoComponent;
  let fixture: ComponentFixture<ProductoComponent>;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoComponent ],
      imports: [ RouterTestingModule, AngularFireModule.initializeApp(environment.firebaseConfig)],
      providers : [ { provide: Router, useValue: routerSpy }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('carga del componente ProductComponent', () => {
    expect(component).toBeTruthy();
  });
});
*/