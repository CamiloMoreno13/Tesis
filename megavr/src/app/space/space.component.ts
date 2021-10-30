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

  //public mostrar: boolean = false;
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

    let caro = <HTMLVideoElement>document.getElementById("videoId");
    caro.volume = 0;
    caro.currentTime = 1;
    


    let caro2 = <HTMLVideoElement>document.getElementById("cabina-caro");
    caro2.volume = 0;
    caro2.play();
    
    
    

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
    /*document.querySelector("a-scene").addEventListener("loaded", () => { setTimeout(() => { this.mostrar = true; }, 1000); })  This is the key*/
  }


  prueba() {
    let valor = document.querySelector('#caja');
    console.log(valor);
    valor?.setAttribute('color', 'red');
  }

  caroclick(){
    if (this.sonidoclick==false){
      this.sonidoclick=true;
      let carosonido2 = document.getElementById("cabina-caro") as HTMLVideoElement;
      carosonido2.volume=1;
     document.getElementById('#parlante')?.setAttribute('src','../../assets/Space/volumeup.png')
      //parlante?.setAttribute('src','../../assets/Space/volumeup.png');

    }else{
      let carosonido2 = document.getElementById("cabina-caro") as HTMLVideoElement;
      carosonido2.volume=0;
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
    this.spaceService.clic(cadena);
    this.router.navigate(['/perfiles', cadena]);
  }

  product(cadena: string) {
    this.spaceService.clic(cadena);
    this.router.navigate(['/producto'])
  }



}
