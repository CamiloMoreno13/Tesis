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
    if (tipo.tipoMenu == 'perfiles') { this.listNoticias = this.fire.getNoticias(tipo.locutor); this.perfiles = true ; this.isMobile = tipo.isMobile}
    if (tipo.tipo == 'noticias') { this.listNoticias = this.fire.getNoticias(tipo.locutor); this.noticias = true; }
  }

  @Output() nuevoLocutor = new EventEmitter<string>();

  ngOnInit(): void {
    this.href = this.router.url;
  }

  perfil(cadena: string) {
    if (this.space == true) {
      this.router.navigate(['/perfiles', cadena])
    }
  }

  noticia(cadena: string) {
    this.difuminado = false;
    var splits = this.href.split('/noticias');
    this.router.navigate([splits[0] + '/noticias/', cadena]);
    this.nuevoLocutor.emit(cadena);
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