import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pantalla-carga',
  templateUrl: './pantalla-carga.component.html',
  styleUrls: ['./pantalla-carga.component.css']
})
export class PantallaCargaComponent implements OnInit {
  
  public mostrarSpinner : boolean = true; 

  constructor() { }

  ngOnInit(): void {
    console.log("entre a pantalla carga")
  }

}
