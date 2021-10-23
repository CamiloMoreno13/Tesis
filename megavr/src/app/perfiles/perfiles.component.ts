import { Route } from '@angular/compiler/src/core';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { menu } from '../models/menu';
import { Noticia } from '../models/noticia';
import { Perfil } from '../models/perfil';
import { FireService } from '../Services/Firebase/firestore/fire.service';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.css']
})
export class PerfilesComponent implements OnInit {
  @ViewChild('videopls') videopls!: ElementRef;
  @ViewChild('videoi') videoi!: ElementRef;
  //volume : boolean = true;
  public parametro: string | null = "";
  public aviso: boolean = true;

  public perfil !: any;
  public listNoticias !: any[]; 

  public menu : string = 'perfiles'; 
  public mostrarSpinner : boolean = true; 

  constructor(private renderer2: Renderer2, private routes: ActivatedRoute, private router: Router, private fire: FireService) { }

  async ngOnInit(){
    this.parametro = this.routes.snapshot.paramMap.get('id');
    if(this.parametro != null){
      this.perfil = await this.fire.llenarInfoPerfil(this.parametro);
      this.listNoticias = this.perfil.noticias;
    }
    this.mostrarSpinner = false;
  }

  exit() {
    this.router.navigate(['/space']);
  }

  mute() {
    var b1 = this.videoi.nativeElement;
    if (this.videopls.nativeElement.muted) {

      this.videopls.nativeElement.muted = false;
      this.aviso = false;
    }
    else {
      this.videopls.nativeElement.muted = true;
      this.aviso = true;
    }
  }

  redireccionar(cadena:string) {
    this.router.navigate(['/perfiles/'+this.parametro+'/noticias',cadena]);
  }
}
