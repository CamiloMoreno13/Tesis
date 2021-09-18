import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { banner } from './banner';
import Swiper from 'swiper';
import 'swiper/css';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public derecho: boolean = true;
  public izquierdo: boolean = true;
  public open: boolean = true;
  public bnext: boolean = true;
  public bback: boolean = true;
  public informacion: banner[] = [];
  public title: string = "";
  public sub: string = "";
  public indice: number = 0;
  public tam: number = 0;
  public btitle: boolean = false;
  public home: boolean = false;
  public indicador: boolean[] = [false, false, false, false, false];
  public innerWidth: any;

  swiper !: Swiper;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.llenar();
    this.indicador[0] = true;
    //console.log("tamaño window" , window.innerWidth);
    //console.log("tamaño height" , window.innerHeight);
    this.swiper = new Swiper('.swiper', {

      // Optional parameters
      //direction: 'vertical',
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
      // Navigation arrows
      /*
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },*/
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }
  
  llenar() {
    this.informacion.push(new banner().createBanner("Bienvenida", "Hola te damos la bienvenida a la mega virtual"));
    this.informacion.push(new banner().createBanner("", "En tu dispositivo de escritorio presiona el clic izquierdo del ratón para navegar la experiencia y desde tu celular gira en 360° y empieza a disfrutar del contenido tocando sobre los diferentes iconos."));
    this.informacion.push(new banner().createBanner("Sabes dónde se sienta cada dj?", "Vas a poder interactuar con cada uno de los dj's de la mega y saber las noticias del entretenimiento"));
    this.informacion.push(new banner().createBanner("Sabías que?", "La Mega se oye más del 50% de Colombia La Mega esta al aire desde 1993"));
    this.informacion.push(new banner().createBanner("Compártelo con tus amigos", ""));
  }

  logo(){
    this.open = false;
  }
  next() {
    this.swiper.slideNext();
  }
  indicadores(index: number) {
    this.indicador = [false, false, false, false, false];
    this.indicador[index] = true;
    this.swiper.slideTo(index)
  }
  space() {
    this.router.navigate(['/space']);
  }

  exit() {
    this.router.navigate(['/space']);
  }
}
