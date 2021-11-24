import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';

import { SpaceComponent } from './space.component';
/*
describe('SpaceComponent', () => {
  let component: SpaceComponent;
  let fixture: ComponentFixture<SpaceComponent>;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceComponent ],
      imports: [ RouterTestingModule, AngularFireModule.initializeApp(environment.firebaseConfig)],
      providers : [ { provide: Router, useValue: routerSpy }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('carga del componente SpaceComponent', () => {
    expect(component).toBeTruthy();
  });

  it('dar clic objeto o banner producto', async () => {
    await component.ngOnInit();
    component.product('titulo_producto');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/producto']);
  });

  it('dar clic banner o video locutor', async () => {
    await component.ngOnInit();
    component.locutor('carolina');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/perfiles' , 'carolina']);
  });

  it('dar clic icono sonido para desactivar sonido' , async ()=>{
    await component.ngOnInit();
    var carolina = document.getElementById("cabina-caro") as HTMLVideoElement;
    console.log("carolina " , carolina.volume);
    expect(carolina.volume).toBe(1);
    component.caroclick();
    console.log("carolina " , carolina.volume);
    expect(carolina.volume).toBe(0);
  });

  it('dar clic icono sonido para activar sonido' , async ()=>{
    await component.ngOnInit();
    var carolina = document.getElementById("cabina-caro") as HTMLVideoElement;
    carolina.volume = 0;
    console.log("carolina2 " , carolina.volume);
    expect(carolina.volume).toBe(0);
    component.caroclick();
    console.log("carolina2" , carolina.volume);
    expect(carolina.volume).toBe(1);
  });
});
*/