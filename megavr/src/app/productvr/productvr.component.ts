import { Component, OnInit } from '@angular/core';
import View3D from '@egjs/view3d/declaration/View3D';
import {CargarScriptsService} from "./../cargar-scripts.service";

@Component({
  selector: 'app-productvr',
  templateUrl: './productvr.component.html',
  styleUrls: ['./productvr.component.css']
})
export class ProductvrComponent implements OnInit {

  

  constructor(private _CargarScripts:CargarScriptsService) {
    _CargarScripts.Carga(["aframe-animation-timeline-component.min"]);
   }

  ngOnInit(): void {

    
  }
  

}
