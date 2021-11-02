import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SpaceService } from '../Services/Space/space.service';
import { CargarScriptsService } from "../Services/Carga/cargar-scripts.service";


@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.css']
})

export class SpaceComponent implements OnInit {


  public mostrar: boolean = false;
  public menu: string = 'space';

  public mostrarSpace : boolean = false; 
  public mostrarSpinner : boolean = true; 



  constructor(private _CargarScripts: CargarScriptsService, private router: Router, private spaceService: SpaceService) {
    _CargarScripts.Carga(["aframe-animation-timeline-component.min"]);
  }

  async ngOnInit(): Promise<void> {

    setTimeout (() =>{
      this.carga2();    
    },200);

    this.carga();
    setTimeout(() => {
    this.mostrarSpace = true;
    this.mostrarSpinner = false;    
    }, 8000);
    
    
    /*
        document.addEventListener('DOMContentLoaded', (e) => {
          var scene = document.querySelector('a-scene');
          scene.addEventListener('loaded',  (e) => {
              this.mostrar=true;
          });
      });*/
    /*document.querySelector("a-scene").addEventListener("loaded", () => { setTimeout(() => { this.mostrar = true; }, 1000); })  This is the key*/
  }

  carga2(){
    

    let caro = <HTMLVideoElement>document.getElementById("cabina-caro");
    caro.volume = 0;
    caro.currentTime = 0;
    caro.play();

    let carlos = <HTMLVideoElement>document.getElementById("cabina-carlos");
    carlos.volume = 0;
    carlos.currentTime = 0;
    carlos.play();

    let daniel = <HTMLVideoElement>document.getElementById("cabina-daniel");
    daniel.volume = 0;
    daniel.currentTime = 0;
    daniel.play();

    let mateo = <HTMLVideoElement>document.getElementById("cabina-mateo");
    mateo.volume = 0;
    mateo.currentTime = 0;
    mateo.play();

    let shirry = <HTMLVideoElement>document.getElementById("cabina-shirry");
    shirry.volume = 0;
    shirry.currentTime = 0;
    shirry.play();

  }

  carga(){
    let caja = document.getElementById('caja');
    let pc = document.getElementById('pc');

    pc?.setAttribute('gltf-model', '../../assets/Shared/Notebook.glb');
    pc?.setAttribute('scale', '0.04 0.04 0.04');
    pc?.setAttribute('position', '16.1 -22.5 -53.1');
    //pc?.setAttribute('position','-19.2 -19.9 52.3'); 
    pc?.setAttribute('rotation', ' 0.92 -86.8 -7.4');

    caja?.setAttribute('geometry', 'primitive: box');
    caja?.setAttribute('material', 'color:red');
    caja?.setAttribute('position', '1 2 -5');
    caja?.setAttribute('rotation', '0 45 45');

    var entity = document.querySelector('#yellow');
    if (entity != null) {
      console.log("enity", entity);
    }
  }

  caroclick() {

    let carosonido = document.getElementById("cabina-caro") as HTMLVideoElement;
    let carlossonido = document.getElementById("cabina-carlos") as HTMLVideoElement;
    let danielsonido = document.getElementById("cabina-daniel") as HTMLVideoElement;
    let mateosonido = document.getElementById("cabina-mateo") as HTMLVideoElement;
    let shirrysonido = document.getElementById("cabina-shirry") as HTMLVideoElement;
    if(carosonido.volume==0){
      carosonido.volume = 1;
      carlossonido.volume=0;
      danielsonido.volume=0;
      mateosonido.volume=0;
      shirrysonido.volume=0;
      document.getElementById('caro-parlante')?.setAttribute('src', '../../assets/Space/volumeup.png')
      document.getElementById('carlos-parlante')?.setAttribute('src', '../../assets/Space/volumeoff.png')      
      document.getElementById('daniel-parlante')?.setAttribute('src', '../../assets/Space/volumeoff.png')  
      document.getElementById('mateo-parlante')?.setAttribute('src', '../../assets/Space/volumeoff.png')
      document.getElementById('shirry-parlante')?.setAttribute('src', '../../assets/Space/volumeoff.png')      
      
    }else{
      carosonido.volume = 0;
      document.getElementById('caro-parlante')?.setAttribute('src', '../../assets/Space/volumeoff.png')
    }
      }

  carlosclick() {    

    let carosonido = document.getElementById("cabina-caro") as HTMLVideoElement;
    let carlossonido = document.getElementById("cabina-carlos") as HTMLVideoElement;
    let danielsonido = document.getElementById("cabina-daniel") as HTMLVideoElement;
    let mateosonido = document.getElementById("cabina-mateo") as HTMLVideoElement;
    let shirrysonido = document.getElementById("cabina-shirry") as HTMLVideoElement;
    if(carlossonido.volume==0){
      carlossonido.volume = 1;
      carosonido.volume=0;
      danielsonido.volume=0;
      mateosonido.volume=0;
      shirrysonido.volume=0;
      document.getElementById('carlos-parlante')?.setAttribute('src', '../../assets/Space/volumeup.png')
      document.getElementById('caro-parlante')?.setAttribute('src', '../../assets/Space/volumeoff.png')
      document.getElementById('daniel-parlante')?.setAttribute('src', '../../assets/Space/volumeoff.png')   
      document.getElementById('mateo-parlante')?.setAttribute('src', '../../assets/Space/volumeoff.png')     
      document.getElementById('shirry-parlante')?.setAttribute('src', '../../assets/Space/volumeoff.png')
    }else{
      carlossonido.volume = 0;
      document.getElementById('carlos-parlante')?.setAttribute('src', '../../assets/Space/volumeoff.png')
    } 

  }

  danielclick() {    

    let danielsonido = document.getElementById("cabina-daniel") as HTMLVideoElement;
    let carosonido = document.getElementById("cabina-caro") as HTMLVideoElement;
    let carlossonido = document.getElementById("cabina-carlos") as HTMLVideoElement;
    let mateosonido = document.getElementById("cabina-mateo") as HTMLVideoElement;
    let shirrysonido = document.getElementById("cabina-shirry") as HTMLVideoElement;

    if(danielsonido.volume==0){
      danielsonido.volume=1;
      carlossonido.volume=0;
      carosonido.volume=0;
      mateosonido.volume=0;
      shirrysonido.volume=0;
      document.getElementById('daniel-parlante')?.setAttribute('src', '../../assets/Space/volumeup.png')
      document.getElementById('carlos-parlante')?.setAttribute('src', '../../assets/Space/volumeoff.png')
      document.getElementById('caro-parlante')?.setAttribute('src', '../../assets/Space/volumeoff.png') 
      document.getElementById('mateo-parlante')?.setAttribute('src', '../../assets/Space/volumeoff.png')
      document.getElementById('shirry-parlante')?.setAttribute('src', '../../assets/Space/volumeoff.png')      
    }else{
      danielsonido.volume = 0;
      document.getElementById('daniel-parlante')?.setAttribute('src', '../../assets/Space/volumeoff.png')
    } 

  }

  mateoclick() {    

    let mateosonido = document.getElementById("cabina-mateo") as HTMLVideoElement;
    let danielsonido = document.getElementById("cabina-daniel") as HTMLVideoElement;
    let carosonido = document.getElementById("cabina-caro") as HTMLVideoElement;
    let carlossonido = document.getElementById("cabina-carlos") as HTMLVideoElement;
    let shirrysonido = document.getElementById("cabina-shirry") as HTMLVideoElement;  

    if(mateosonido.volume==0){
      mateosonido.volume=1;
      danielsonido.volume=0;
      carlossonido.volume=0;
      carosonido.volume=0;
      shirrysonido.volume=0;
      document.getElementById('mateo-parlante')?.setAttribute('src', '../../assets/Space/volumeup.png')
      document.getElementById('daniel-parlante')?.setAttribute('src', '../../assets/Space/volumeoff.png')
      document.getElementById('carlos-parlante')?.setAttribute('src', '../../assets/Space/volumeoff.png')
      document.getElementById('caro-parlante')?.setAttribute('src', '../../assets/Space/volumeoff.png')  
      document.getElementById('shirry-parlante')?.setAttribute('src', '../../assets/Space/volumeoff.png')    
    }else{
      mateosonido.volume = 0;
      document.getElementById('mateo-parlante')?.setAttribute('src', '../../assets/Space/volumeoff.png')
    } 

  }

  shirryclick() {    

    let mateosonido = document.getElementById("cabina-mateo") as HTMLVideoElement;
    let danielsonido = document.getElementById("cabina-daniel") as HTMLVideoElement;
    let carosonido = document.getElementById("cabina-caro") as HTMLVideoElement;
    let carlossonido = document.getElementById("cabina-carlos") as HTMLVideoElement;
    let shirrysonido = document.getElementById("cabina-shirry") as HTMLVideoElement;  

    if(shirrysonido.volume==0){
      mateosonido.volume=0;
      danielsonido.volume=0;
      carlossonido.volume=0;
      carosonido.volume=0;
      shirrysonido.volume=1;
      document.getElementById('mateo-parlante')?.setAttribute('src', '../../assets/Space/volumeoff.png')
      document.getElementById('daniel-parlante')?.setAttribute('src', '../../assets/Space/volumeoff.png')
      document.getElementById('carlos-parlante')?.setAttribute('src', '../../assets/Space/volumeoff.png')
      document.getElementById('caro-parlante')?.setAttribute('src', '../../assets/Space/volumeoff.png')  
      document.getElementById('shirry-parlante')?.setAttribute('src', '../../assets/Space/volumeup.png')    
    }else{
      shirrysonido.volume = 0;
      document.getElementById('shirry-parlante')?.setAttribute('src', '../../assets/Space/volumeoff.png')
    } 

  }

  locutor(cadena: string) {
    this.spaceService.clic(cadena);
    this.router.navigate(['/perfiles', cadena]);
  }

  product(cadena: string) {
    this.spaceService.clic(cadena);
    this.router.navigate(['/producto'])
  }



}
