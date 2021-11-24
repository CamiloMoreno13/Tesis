import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';

import { PerfilesComponent } from './perfiles.component';
/*
describe('PerfilesComponent', () => {
  let component: PerfilesComponent;
  let fixture: ComponentFixture<PerfilesComponent>;

  let routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilesComponent],
      imports: [RouterTestingModule, AngularFireModule.initializeApp(environment.firebaseConfig)]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilesComponent);
    component = fixture.componentInstance;
    component.perfil = 'carolina'; 
    fixture.detectChanges();
  });

  it('carga correcta de PerfilesComponent', () => {
    expect(component).toBeTruthy();
  });

  it('carga de perfil de carolina', async () => {
    await component.ngOnInit();
    console.log("perfil carolina", component.perfil);
    expect(component.perfil.nombre).toBe('Carolina');
    expect(component.perfil.menuName).toBe('Caro Carreta');
    expect(component.perfil.ocupacion).toBe('Cheerleader del mañanero');
    expect(component.perfil.titulo).toBe('menu');
  });

  it('carga de la noticias de carolina', async () => {
    await component.ngOnInit();
    console.log("noticias", component.listNoticias);
    expect(component.listNoticias[0].nombre).toBe('Tema de opinión de la semana');
    expect(component.listNoticias[0].encabezado).toBe('Las toxihistorias');
  });

  it('activar el sonido del video', async () => {
    await component.ngOnInit();
    var video = document.getElementById("tempo") as HTMLVideoElement;
    video.volume = 0; 
    expect(video.volume).toBe(0);
    component.mute();
    expect(video.volume).toBe(1);
  }); 

  it('desactivar el sonido del video', async () => {
    await component.ngOnInit();
    var video = document.getElementById("tempo") as HTMLVideoElement;
    video.volume = 1; 
    expect(video.volume).toBe(1);
    component.mute();
    expect(video.volume).toBe(0);
  }); 
});
*/