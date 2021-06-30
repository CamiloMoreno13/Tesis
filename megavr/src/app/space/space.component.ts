import { createElementCssSelector } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

//import * as THREE from 'three';
//import { Scene } from 'three';
/*export interface Post {
  titulo: string;
  contenido: string;
  estracto: string;
  url_image: string;
}*/
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
    caja?.setAttribute('material','src :../assets/arte.jpg')
    caja?.setAttribute('position', '1 2 -5');
    caja?.setAttribute('rotation', '0 45 45');
    caja?.setAttribute('sound','src:../assets/bichota.mp3 ; on: click')
    
    /*var audioEl = document.querySelector("a-scene");
    console.log(audioEl);
    audioEl.components*/
    
    
    
 
    let cono = document.getElementById('cono');
    
    cono?.setAttribute('geometry', 'primitive:cone');
    cono?.setAttribute('material', 'color:blue');
    cono?.setAttribute('position', '-4 -1.34385 -7.16797');
  
    let ball = document.getElementById('bola');
      ball?.setAttribute('geometry', 'primitive:sphere');
    ball?.setAttribute('material', 'color:yellow');
    ball?.setAttribute('position', '-4.12706 0.10737 -7.34661');
      console.log(ball)

      let fondo = document.getElementById('fondo')
      fondo?.setAttribute('src','https://i.imgur.com/jL7ZMrY.jpeg')

    let cono2=document.createElement('a-entity');
    cono2.setAttribute('id','caji');
    cono2?.setAttribute('geometry', 'primitive:box');
    cono2?.setAttribute('material', 'color:green');
    cono2?.setAttribute('position', '-7 2 -5');

      let escena = document.querySelector('a-scene');
      escena?.appendChild(cono2);




  

  


  }

}
