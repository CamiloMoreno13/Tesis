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

  //@ViewChild('caroCab') caroCab!: HTMLElement;

  @ViewChild('caroCab') Hs!: ElementRef;
  public mostrar: boolean = false; 

  constructor(private router : Router) { }

  ngOnInit(): void {
    
    let caja = document.getElementById('caja');
    let pc = document.getElementById('pc');

    pc?.setAttribute('gltf-model','../../assets/Shared/Notebook.glb');
    pc?.setAttribute('scale','0.04 0.04 0.04');
    pc?.setAttribute('position','-19.2 -99.9 52.3'); 
    pc?.setAttribute('rotation',' -0.42 86.8 -7.5'); 

    caja?.setAttribute('geometry', 'primitive: box');
    caja?.setAttribute('material', 'color:red');
    caja?.setAttribute('position', '1 2 -5');
    caja?.setAttribute('rotation', '0 45 45');

    var entity= document.querySelector('#yellow') ;
    if(entity != null){
      console.log("enity" , entity);
    }
    
    while(!this.mostrar){
      if(document.querySelector("a-scene").hasLoaded){
        this.mostrar = true; 
      }
    }
  }

  prueba(){
    let valor = document.querySelector('#caja');
    console.log(valor);
    valor?.setAttribute('color', 'red');
  }

  /*videoHover(){
    let x = document.getElementById("caroCab") as ;
    x.
    this.caroCab.
  }*/

  H(){
    this.Hs.nativeElement.material.components.src.stopVideo();
  }

  playExam() {
    console.log("Funciona enbebido")
  }

  locutor(cadena:string){
    this.router.navigate(['/perfiles',cadena]);
 }

  product() {
    this.router.navigate(['/producto'])
  }

  

}
