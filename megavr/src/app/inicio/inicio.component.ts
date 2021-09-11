import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { transpileModule } from 'typescript';
import { banner } from './banner';
 import Swiper from 'swiper';
 import 'swiper/css';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public open: boolean = true;
  public bnext: boolean = true;
  public bback: boolean = true;
  public informacion: banner[] = [];
  public title: string = "";
  public sub: string = "";
  public indice: number = 0;
  public tam: number = 0;
  public btitle: boolean = false;
  public bsub: boolean = false;
  public indicador: boolean[] = [false, false, false, false, false];
  public innerWidth : any; 

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.indicadores(0);
    this.llenar();
    this.inicio();
    //console.log("tamaño window" , window.innerWidth);
    //console.log("tamaño height" , window.innerHeight);

    const swiper = new Swiper('.swiper', {
      // Optional parameters
      //direction: 'vertical',
      loop: true,
    
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
  inicio() {
    this.title = this.informacion[this.indice].title;
    this.sub = this.informacion[this.indice].subtitle;
    this.tam = this.informacion.length - 1;
    this.bback = false; 
    this.bnext = true; 
    this.bsub = false; 
    this.btitle = false; 
  }
  principal() {
    this.open = false;
  }
  next() {
    this.indice += 1;
    this.indicadores(this.indice);
    this.bback = true;
    if (this.indice == 1) {
      this.btitle = true;
    } else {
      this.btitle = false;
    }
    if (this.indice == this.tam) {
      this.bsub = true;
    } else {
      this.bsub = false;
    }
    if (this.indice < this.tam) {
      this.title = this.informacion[this.indice].title;
      this.sub = this.informacion[this.indice].subtitle;
    } else {
      this.bnext = false;
      this.title = this.informacion[this.indice].title;
      this.sub = this.informacion[this.indice].subtitle;
    }
  }
  back() {
    this.indice -= 1;
    this.indicadores(this.indice);
    this.bnext = true;
    if (this.indice == 1) {
      this.btitle = true;
    } else {
      this.btitle = false;
    }

    if (this.indice == this.tam) {
      this.bsub = true;
    } else {
      this.bsub = false;
    }
    if (this.indice > 0) {
      this.title = this.informacion[this.indice].title;
      this.sub = this.informacion[this.indice].subtitle;
    } else {
      this.bback = false;
      this.title = this.informacion[this.indice].title;
      this.sub = this.informacion[this.indice].subtitle;
    }
  }
  indicadores(index: number) {
    for (let i = 0; i < this.indicador.length; i++) {
      if (i == index) {
        this.indicador[i] = true;
      } else {
        this.indicador[i] = false;
      }
    }
  }
  saltar(index: number) {
    this.indice = index;
    this.indicadores(index);
    if (index == 0) {
      console.log("entro")
      this.bback = false;
      this.bnext = true;
    }
    if (index == 1) {
      this.bnext = true;
      this.bback = true;
      this.btitle = true;
    } else {
      this.btitle = false;
    }
    if (index != 1 && index != 0 && index != this.tam) {
      this.bback = true;
      this.bnext = true;
      this.btitle = false;
      this.bsub = false;
    }
    if (index == this.tam) {
      this.bnext = false;
      this.bsub = true;
      this.bback = true;
    } else {
      this.bsub = false;
    }
    this.title = this.informacion[index].title;
    this.sub = this.informacion[index].subtitle;
  }
  space(){
    this.router.navigate(['/space']); 
  }

  exit(){
    this.router.navigate(['/space']);
  }
}
