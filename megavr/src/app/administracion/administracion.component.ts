import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {

  constructor() { }

  public tabs: boolean[] = [true,false,false,false,false];

  ngOnInit(): void {
  }

  changeTab(i : any){
    this.tabs = [false,false,false,false,false];
    this.tabs[i] = true;
  }

}
