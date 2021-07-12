import { createElementCssSelector } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AnimationFrameScheduler } from 'rxjs/internal/scheduler/AnimationFrameScheduler';
import * as THREE from 'three';
import { Scene } from 'three';



@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.css']
})

export class SpaceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /*

    Three.js 

    console.log(THREE);
    const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize( window.innerWidth, window.innerHeight );
      document.body.appendChild( renderer.domElement );

      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
      const cube = new THREE.Mesh( geometry, material );
      scene.add( cube );

      camera.position.z = 5;

      const animate = function () {
          requestAnimationFrame( animate );

          cube.rotation.x += 0.01;
          cube.rotation.y += 0.01;

          renderer.render( scene, camera );
      };

      animate();
      */
    

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
