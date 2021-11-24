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
  public noticia_video !: any;
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
    this.noticia_video = this.noticia.video;

    if(this.iOS()){
      if(this.locutor == "shirry"){
        switch (this.nameNoticia){
          case "Musica":
            this.noticia_video = "https://proyectos-hernan.info/videos_mov/1.Nota_musical_elshirry.mov";
            break;
          case "Eventos":
            this.noticia_video = "https://proyectos-hernan.info/videos_mov/2.Nota_eventos_elshirry.mov";
            break;
          case "Actualidad en la Mega":
            this.noticia_video = "https://proyectos-hernan.info/videos_mov/3.Nota_actualidad_elshirry.mov";
            break;
          case "Famosos":
            this.noticia_video = "https://proyectos-hernan.info/videos_mov/4.Nota_famosos_elshirry.mov";
            break;
          case "Artistas la Mega":
            this.noticia_video = "https://proyectos-hernan.info/videos_mov/5.Nota_artistas_elshirry.mov";
            break;
        }
      }
      if(this.locutor == "daniel"){
        this.noticia_video = "https://proyectos-hernan.info/videos_mov/1.Nota_digital_redes_Murcia.mov";
      }
      if(this.locutor == "carlos"){
        switch (this.nameNoticia){
          case "Chiste de la semana":
            this.noticia_video = "https://proyectos-hernan.info/videos_mov/1.chiste_Carlos_Mira.mov";
            break;
          case "El café de Vilma":
            this.noticia_video = "https://proyectos-hernan.info/videos_mov/2.Nota_Vilma_Mira.mov";
            break;
          case "El meme de la semana":
            this.noticia_video = "https://proyectos-hernan.info/videos_mov/3.meme_de_la_Semana.mov";
            break;
        }
      }
      if(this.locutor == "carolina"){
        switch (this.nameNoticia){
          case "Tema de opinión de la semana":
            this.noticia_video = "https://proyectos-hernan.info/videos_mov/2.Nota_opinion_carreta.mov";
            break;
        }
      }
      if(this.locutor == "mateo"){
        switch (this.nameNoticia){
          case "Videojuego":
            this.noticia_video = "https://proyectos-hernan.info/videos_mov/4.Nota_videojuegos_Mateo.mov";
            break;
          case "Tecnología":
            this.noticia_video = "https://proyectos-hernan.info/videos_mov/1.Nota_tecnologia_Mateo.mov";
            break;
          case "Cine":
            this.noticia_video = "https://proyectos-hernan.info/videos_mov/2.Nota_cine_Mateo.mov";
            break;
          case "Series":
            this.noticia_video = "https://proyectos-hernan.info/videos_mov/3.Nota_series_Mateo.mov";
            break;
        }
      }
    }
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

  iOS() {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  }
}