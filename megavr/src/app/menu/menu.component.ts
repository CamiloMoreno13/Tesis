import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Noticia } from '../models/noticia';
import { FireService } from '../Services/Firebase/firestore/fire.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  public selectLocutores : any[] = []; 
  public difuminado: boolean = false;
  public perfiles: boolean = false;
  public isMobile !: boolean ;
  public noticias: boolean = false;
  public producto: boolean = false;
  public space: boolean = false;
  public equis: boolean = true;
  public locutores: { menuName: string, nombre: string }[] = [];
  public listNoticias: Noticia[] = [];
  public href: string = "";

  constructor(private router: Router, private fire: FireService) { }

  @Input() set menus(tipo: any) {
    if (tipo == 'space') { this.locutores = this.fire.getLocutores(); this.space = true; }
    if (tipo.tipoMenu == 'perfiles') {  this.listNoticias = this.fire.getNoticias(tipo.locutor); this.perfiles = true ; this.isMobile = tipo.isMobile}
    if (tipo.tipo == 'noticias') { this.listNoticias = this.fire.getNoticias(tipo.locutor); this.noticias = true; }
  }

  @Output() nuevoLocutor = new EventEmitter<string>();

  async ngOnInit(): Promise<void> {
    this.href = this.router.url;
    this.selectLocutores = await this.fire.getLocutoresAdmin();
  }

  perfil(indice: number) {
    if (this.space == true) {
      this.router.navigate(['/perfiles', this.selectLocutores[indice]])
    }
  }

  noticia(cadena: string) {
    this.difuminado = false;
    var splits = this.href.split('/noticias');
    this.router.navigate([splits[0] + '/noticias/', cadena]);
    this.nuevoLocutor.emit(cadena);
    this.equis = true;
  }

  exit() {
    this.router.navigate(['/space']);
  }

  exitNoticias() {
    var splits = this.href.split('/noticias');
    this.router.navigate([splits[0]]);
  }

  menuDifuminado() {
    if (!this.difuminado) {
      this.difuminado = true;
      this.equis = false;
    }
    else {
      this.difuminado = false;
      this.equis = true;
    }
  }

  onboarding() {
    this.router.navigate(['/inicio']);
  }
}