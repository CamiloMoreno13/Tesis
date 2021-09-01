import { createElementCssSelector } from '@angular/compiler';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AFrame } from 'aframe';


@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.css']
})

export class SpaceComponent implements OnInit {

  @ViewChild('carovideo') carovideo!: HTMLElement;
  @ViewChild('videoId') videoid!: HTMLElement;

  public mostrar: boolean = false;
  public playsonido: boolean = false;
  public primercaro: boolean = true; // temporary
  public imagen : boolean = false;
  public sonidoclick : boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {

    let caja = document.getElementById('caja');
    let pc = document.getElementById('pc');

    let caro = <HTMLVideoElement>document.getElementById("videoId");
    caro.volume = 0;
    caro.currentTime = 1;
    caro.pause();


    let caro2 = <HTMLVideoElement>document.getElementById("v2");
    caro.volume = 0;
    caro.currentTime = 1;
    caro2.pause();
    
    

    pc?.setAttribute('gltf-model','../../assets/Shared/Notebook.glb');
    pc?.setAttribute('scale','0.04 0.04 0.04');
    pc?.setAttribute('position','16.1 -22.5 -53.1'); 
    //pc?.setAttribute('position','-19.2 -19.9 52.3'); 
    pc?.setAttribute('rotation',' 0.92 -86.8 -7.4');

    caja?.setAttribute('geometry', 'primitive: box');
    caja?.setAttribute('material', 'color:red');
    caja?.setAttribute('position', '1 2 -5');
    caja?.setAttribute('rotation', '0 45 45');

    var entity = document.querySelector('#yellow');
    if (entity != null) {
      console.log("enity", entity);
    }
    document.querySelector("a-scene").addEventListener("loaded", () => { setTimeout(() => { this.mostrar = true; }, 1000); }) /* This is the key*/
  }


  prueba() {
    let valor = document.querySelector('#caja');
    console.log(valor);
    valor?.setAttribute('color', 'red');
  }

  caroclick(){
    if (this.sonidoclick==false){
      this.sonidoclick=true;
      this.imagen=true;
      let carosonido2 = document.getElementById("v2") as HTMLVideoElement;
      carosonido2.play();

    }else{
      let carosonido2 = document.getElementById("v2") as HTMLVideoElement;
      carosonido2.pause();
      this.sonidoclick=false;
    }
    
  }

  caroEnter() {

    if (this.playsonido == false) {
      let carosonido = document.getElementById("videoId") as HTMLVideoElement;
      if (this.primercaro == true) {
        this.primercaro = false;
        carosonido.currentTime = 0;
        console.log("primer");
        carosonido.play();
        carosonido.volume = 1;
        this.playsonido = true;
      }
      else {

        console.log("segundo o mas");
        carosonido.play();
        carosonido.volume = 1;
        this.playsonido = true
      }

    }
  }


  caroLeave() {
    if (this.playsonido == true) {
      let carosonido = <HTMLVideoElement>document.getElementById("videoId");
      carosonido.volume = 0;
      this.playsonido = false;
      carosonido.pause();
    }
  }




  playExam() {
    console.log("Funciona enbebido")
  }

  locutor(cadena: string) {
    this.router.navigate(['/perfiles', cadena]);
  }

  product() {
    this.router.navigate(['/producto'])
  }



}
