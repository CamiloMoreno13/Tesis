import { Route } from '@angular/compiler/src/core';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  public perfil !: Perfil;
  public listNoticias !: Noticia[]; 

  public entro : string = 'mateo'; 

  constructor(private renderer2: Renderer2, private routes: ActivatedRoute, private router: Router, private fire: FireService) { }

  async ngOnInit(){
    this.parametro = this.routes.snapshot.paramMap.get('id');
    console.log(this.parametro);
    var respuesta : any; 
    respuesta = (await this.fire.llenarInfoPerfil('mateo').toPromise()).data();
    this.perfil = respuesta; 
    this.listNoticias = this.perfil.noticias;
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
