import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public primera: boolean = true;
  public segunda: boolean = false;
  public tercera: boolean = false;
  public cuarta: boolean = false;
  public quinta: boolean = false;
  public texto: string = "";
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.texto = "QUE PASA ALDEMAR"
  }

  fprimera() {
    console.log("que pasa");
    if (this.primera) {
      this.primera = false;
      this.segunda = true;
    } else {
      this.primera = true;
      this.segunda = false;
    }
  }
  next2() {
    if (this.segunda) {
      this.segunda = false;
      this.tercera = true;
    }
  }
  next3() {
    if (this.tercera) {
      this.tercera = false;
      this.cuarta = true;
    }
  }
  next4() {
    if (this.cuarta) {
      this.cuarta = false;
      this.quinta = true;
    }
  }
  back3() {
    if (this.tercera) {
      this.tercera = false;
      this.segunda = true;
    }
  }

  back4() {
    if (this.cuarta) {
      this.cuarta = false;
      this.tercera = true;
    }
  }

  back5() {
    if (this.quinta) {
      this.quinta = false;
      this.cuarta = true;
    }
  }
  space() {
    this.router.navigate(['/space'])
  }

  indi1() {
    this.segunda = true;
    this.tercera = false;
    this.cuarta = false;
    this.quinta = false;

  }
  indi2() {
    this.segunda = false;
    this.tercera = true;
    this.cuarta = false;
    this.quinta = false;
  }
  indi3() {
    this.segunda = false;
    this.tercera = false;
    this.cuarta = true;
    this.quinta = false;
  }
  indi4(){
    this.segunda = false;
    this.tercera = false;
    this.cuarta = false;
    this.quinta = true;
  }
}
