import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  public tam : number = 0;
  public imagen : string = "";
  public indicador : boolean[] = [false,false,false,false,false];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.indicadores(0);
    this.llenar();
    this.inicio();   
  }
  llenar(){
    this.informacion.push(new banner().createBanner("Bienvenida", "Hola te damos la bienvenida a la mega virtual"));
    this.informacion.push(new banner().createBanner("adios", "Para navegar usa tu celular de la forma horizontal y conoce el contenido tocando sobre las diferentes iconos"));
    this.informacion.push(new banner().createBanner("Sabes donde se sienta cada DJ", "Vas a poder interactuar con cada uno de los Dj's de la mega y saber las noticias del entretenimiento"));
    this.informacion.push(new banner().createBanner("Sabes que?", "La mega se oye más del 50% de Colombia '<br>' La Megaesta al aire desde 1993"));
    this.informacion.push(new banner().createBanner("Compártelo con tus amigos", ""));
  }
  inicio(){
    this.title = this.informacion[this.indice].title;
    this.sub = this.informacion[this.indice].subtitle;
    this.tam = this.informacion.length - 1 ;
  }
  principal() {
    this.open = false;
    this.bback = false;
  }
  next() {
    this.indice += 1;
    this.indicadores(this.indice);
    this.bback = true;
    if(this.indice < this.tam){
      this.title =  this.informacion[this.indice].title;
      this.sub = this.informacion[this.indice].subtitle;
    } else{
      this.bnext = false;
      this.title =  this.informacion[this.indice].title;
      this.sub = this.informacion[this.indice].subtitle;
    }
  }
  back() {
    this.indice -= 1;
    this.indicadores(this.indice);
    this.bnext = true;
    if(this.indice > 0){
      this.title =  this.informacion[this.indice].title;
      this.sub = this.informacion[this.indice].subtitle;
    } else{
      this.bback = false;
      this.title =  this.informacion[this.indice].title;
      this.sub = this.informacion[this.indice].subtitle;
    }
  }
  indicadores(index: number){
    for(let i = 0; i < this.indicador.length; i++){
      if(i == index){
        this.indicador[i] = true;
      }else{
        this.indicador[i] = false;
      }
    }
  }
}
