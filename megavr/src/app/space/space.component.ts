import { createElementCssSelector } from '@angular/compiler';
import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';

import * as THREE from 'three';
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
export class SpaceComponent implements OnInit  {

  @ViewChild('yellowBox') yellowBox!: ElementRef;
  @ViewChild('foo') foo!: ElementRef;
  

  
  constructor() { }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  playSound() {
    console.log("play")
    this.yellowBox.nativeElement.components.sound.playSound();
  }

  pauseSound() {
    console.log("pause")
    this.yellowBox.nativeElement.components.sound.pauseSound();
  }
  
  
}
