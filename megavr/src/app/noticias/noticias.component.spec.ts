import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';

import { NoticiasComponent } from './noticias.component';

/*
describe('NoticiasComponent', () => {
  let component: NoticiasComponent;
  let fixture: ComponentFixture<NoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasComponent ],
      imports: [ RouterTestingModule, AngularFireModule.initializeApp(environment.firebaseConfig)]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('carga correcta de NoticiasComponent', () => {
    expect(component).toBeTruthy();
  });

  it('activar sonido de la noticia' , async () => {
    await component.ngOnInit();
    var video = component.videopls.nativeElement;
    video.volume = 0; 
    expect(video.volume).toBe(0);
    component.mute();
    expect(video.volume).toBe(1);
  })

  it('desactivar sonido de la noticia' , async () => {
    await component.ngOnInit();
    var video = component.videopls.nativeElement;
    video.volume = 1; 
    expect(video.volume).toBe(1);
    component.mute();
    expect(video.volume).toBe(0);
  });

  it('carga de la noticia' , async () => {
    await component.ngOnInit();
    console.log("noticia" , component.noticia);
    expect(component.noticia.descripcion).toBe('En cine o en la plataforma');
    expect(component.noticia.encabezado).toBe('Estrenos en Disney');
    expect(component.noticia.nombre).toBe('Cine');
  });
});
*/