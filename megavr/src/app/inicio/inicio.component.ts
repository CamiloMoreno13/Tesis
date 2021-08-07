import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { transpileModule } from 'typescript';
import { banner } from './banner';

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

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.indicadores(0);
    this.llenar();
    this.inicio();
  }
  llenar() {
    this.informacion.push(new banner().createBanner("Bienvenida", "Hola te damos la bienvenida a la mega virtual"));
    this.informacion.push(new banner().createBanner("", "Para navegar usa tu celular de la forma horizontal y conoce el contenido tocando sobre las diferentes iconos"));
    this.informacion.push(new banner().createBanner("Sabes donde se sienta cada DJ", "Vas a poder interactuar con cada uno de los Dj's de la mega y saber las noticias del entretenimiento"));
    this.informacion.push(new banner().createBanner("Sabes que?", "La mega se oye más del 50% de Colombia La Megaesta al aire desde 1993"));
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
