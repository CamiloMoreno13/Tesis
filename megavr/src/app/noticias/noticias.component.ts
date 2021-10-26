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
  @ViewChild('videoi') videoi!: ElementRef;

  public sonido: boolean = true;
  public nameNoticia: string | null = "";
  public locutor: string | null = ""; 
  public noticia : any;
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
    this.mostrarSpinner = false;
  }

  async changeNoticia(event: any){
    this.mostrarSpinner = true; 
    if(this.locutor != null){
      this.noticia = await this.fire.llenarInfoNoticias(this.locutor , event);
      this.mostrarSpinner = false;
    }
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