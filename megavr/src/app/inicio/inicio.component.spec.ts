import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

import { InicioComponent } from './inicio.component';
/*
describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioComponent ],
      imports: [ RouterTestingModule, AngularFireModule.initializeApp(environment.firebaseConfig) ],
      providers : [ { provide: Router, useValue: routerSpy }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('carga correcta de InicioComponent', () => {
    expect(component).toBeTruthy();
  });
  
  it('clic boton logo', () => {
    component.logo();
    expect(component.open).toBe(false);
  });

  it('cambio de slide por indicadores' ,async () => {
    await component.ngOnInit();
    expect(component.swiper.realIndex).toBe(0);
    expect(component.indicador[component.swiper.realIndex]).toBe(true);
    component.indicadores(2);
    expect(component.swiper.realIndex).toBe(2);
    expect(component.indicador[component.swiper.realIndex]).toBe(true);
  });

  it('cambio de slider siguiente' , async () => {
    await component.ngOnInit();
    expect(component.swiper.realIndex).toBe(0);
    component.next();
    expect(component.swiper.realIndex).toBe(1);
    component.next();
    expect(component.swiper.realIndex).toBe(2);
  });

  it('cambio de subtitle' , async () =>{
    await component.ngOnInit()
    expect(component.informacion[component.swiper.realIndex].subtitle).toBe("Hola te damos la bienvenida a la mega virtual modificado");
    component.next();
    expect(component.informacion[component.swiper.realIndex].subtitle).toBe("En tu dispositivo de escritorio presiona el clic izquierdo del ratón para navegar la experiencia y desde tu celular gira en 360° y empieza a disfrutar del contenido tocando sobre los diferentes iconos.");
  });

  it('dar clic al boton empezar para ir a space', async () => {
    await component.ngOnInit();
    component.space();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/space']);
  });

  
  it('dar clic a la X para ir a space', async () => {
    await component.ngOnInit();
    component.exit();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/space']);
  });

  it('dar clic al icono de sonido para activar el sonido' , async () => {
    await component.ngOnInit();
    expect(component.video2.nativeElement.muted).toBe(true);
    console.log("inicio" , component.video2); 
    component.mute(2);
    expect(component.video2.nativeElement.muted).toBe(false); 
  });

  it('dar clic al icono de sonido para desactivar el sonido', async () => {
    await component.ngOnInit();
    component.mute(2);
    expect(component.video2.nativeElement.muted).toBe(false); 
    component.mute(2);
    expect(component.video2.nativeElement.muted).toBe(true); 
  });
});
*/