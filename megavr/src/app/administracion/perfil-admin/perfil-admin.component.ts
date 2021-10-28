import { Component, OnInit } from '@angular/core';
import { FireService } from 'src/app/Services/Firebase/firestore/fire.service';

@Component({
  selector: 'app-perfil-admin',
  templateUrl: './perfil-admin.component.html',
  styleUrls: ['./perfil-admin.component.css']
})
export class PerfilAdminComponent implements OnInit {

  constructor(private fire: FireService) { }
  
  public locutores: any[] = [];
  public locutor : any;  
  public indice : number = 0;
  public mostrarSpinner : boolean = true;
  public mostrarLocutor : boolean = false;
  public nombre : string = ''; 
  public nombreMenu : string = '';
  public ocupacion : string = ''; 
  public selectLocutores : any[] = [];

  async ngOnInit(): Promise<void> {
    this.selectLocutores = await this.fire.getLocutoresAdmin();
    this.locutores = await this.fire.obtenerPerfiles();
    this.mostrarSpinner = false;
  }

  eleccion(){
    this.locutor = this.locutores[this.indice];
    this.nombre = this.locutores[this.indice].nombre;
    this.nombreMenu = this.locutores[this.indice].menuName;
    this.ocupacion = this.locutores[this.indice].ocupacion;
    this.mostrarLocutor = true;
  }

  update(){
    this.locutor.nombre = this.nombre;
    this.locutor.menuName = this.nombreMenu;
    this.locutor.ocupacion = this.ocupacion;
    this.fire.updatePerfil(this.selectLocutores[this.indice],this.locutor);
  }
}
