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

  

}
