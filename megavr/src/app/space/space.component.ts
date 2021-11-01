import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { SpaceService } from '../Services/Space/space.service';
import { CargarScriptsService } from "../Services/Carga/cargar-scripts.service";


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
  public sonidoclick : boolean = false;
  public menu : string = 'space'; 
  

  
  constructor(private _CargarScripts:CargarScriptsService,private router: Router, private spaceService: SpaceService) {
    _CargarScripts.Carga(["aframe-animation-timeline-component.min"]);
   }
  
  ngOnInit(): void {

    let caja = document.getElementById('caja');
    let pc = document.getElementById('pc');

    let caro = <HTMLVideoElement>document.getElementById("cabina_caro");
    caro.volume = 0;
    caro.currentTime = 1;
           

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
/*
    document.addEventListener('DOMContentLoaded', (e) => {
      var scene = document.querySelector('a-scene');
      scene.addEventListener('loaded',  (e) => {
          this.mostrar=true;
      });
  });*/
    /*document.querySelector("a-scene").addEventListener("loaded", () => { setTimeout(() => { this.mostrar = true; }, 1000); })  This is the key*/
  }

  

  caroclick(){
    if (this.sonidoclick==false){
      this.sonidoclick=true;
      let carosonido2 = document.getElementById("cabina_caro") as HTMLVideoElement;
      carosonido2.volume=1;
     document.getElementById('#parlante')?.setAttribute('src','../../assets/Space/volumeup.png')
      //parlante?.setAttribute('src','../../assets/Space/volumeup.png');

    }else{
      let carosonido2 = document.getElementById("cabina_caro") as HTMLVideoElement;
      carosonido2.volume=0;
      this.sonidoclick=false;
    }
    
  }
  
  playExam() {
    console.log("Funciona enbebido")
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
