import { createElementCssSelector } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.css']
})

export class SpaceComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
    
    let caja = document.getElementById('caja');
    let pc = document.getElementById('pc');

    pc?.setAttribute('gltf-model','../../assets/laptop.glb');
    pc?.setAttribute('scale','13.3 13.3 13.3');
    pc?.setAttribute('position','-10.8 -9.1 21.8'); 
    pc?.setAttribute('rotation',' 0 90 0'); 

    caja?.setAttribute('geometry', 'primitive: box');
    caja?.setAttribute('material', 'color:red');
    caja?.setAttribute('position', '1 2 -5');
    caja?.setAttribute('rotation', '0 45 45');

    var entity= document.querySelector('#yellow') ;
    if(entity != null){
      console.log("enity" , entity);
    }
  }

  prueba(){
    let valor = document.querySelector('#caja');
    console.log(valor);
    valor?.setAttribute('color', 'red');
  }


  playExam() {
    console.log("Funciona enbebido")
  }

  product() {
    this.router.navigate(['/producto'])
  }

  

}
