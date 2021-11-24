import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { menu } from '../models/menu';
import { FireService } from '../Services/Firebase/firestore/fire.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  @ViewChild('videopls') videopls!: ElementRef;

  public sonido: boolean = true;
  public nameNoticia: string | null = "";
  public locutor: string | null = ""; 
  public noticia: {nombre:string,video:string,icono:string,encabezado:string,descripcion:string} = {nombre:'',video:'',icono:'',encabezado:'',descripcion:''};
  public menus : menu = new menu(); 
  public mostrarSpinner : boolean = true;

  constructor(private routes: ActivatedRoute, private fire: FireService) { }

  async ngOnInit(): Promise<void> {
    this.nameNoticia = this.routes.snapshot.paramMap.get('id');
    this.locutor = this.routes.snapshot.paramMap.get('id_locutor');
    this.menus.tipo = 'noticias';
    if(this.locutor != null && this.nameNoticia != null) {
      this.menus.locutor = this.locutor;
      this.noticia = await this.fire.llenarInfoNoticias(this.locutor , this.nameNoticia);
    }
    setTimeout(() => {
      this.mostrarSpinner = false; 
    }, 2000);

  }


  async changeNoticia(event: any){
    this.mostrarSpinner = true;
    if(this.locutor != null){
      this.noticia = await this.fire.llenarInfoNoticias(this.locutor , event);
    }
    if(!this.sonido){
      this.videopls.nativeElement.muted = true;
      this.sonido = true;
    }
    setTimeout(() => {
      this.mostrarSpinner = false; 
    }, 3000);
  }
  
  mute() {
    if (this.videopls.nativeElement.muted) {
      this.videopls.nativeElement.muted = false;
      this.sonido = false;
    }
    else {
      this.videopls.nativeElement.muted = true;
      this.sonido = true;
    }
  }
}