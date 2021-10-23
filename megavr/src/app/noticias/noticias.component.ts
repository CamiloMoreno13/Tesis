import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { menu } from '../models/menu';
import { FireService } from '../Services/Firebase/firestore/fire.service';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  @ViewChild('pls') pls!: ElementRef;
  @ViewChild('item1') item1!: ElementRef;
  @ViewChild('item2') item2!: ElementRef;
  @ViewChild('item3') item3!: ElementRef;
  @ViewChild('item4') item4!: ElementRef;
  @ViewChild('item5') item5!: ElementRef;
  @ViewChild('menu-items') menu!: ElementRef;
  @ViewChild('videopls') videopls!: ElementRef;
  @ViewChild('videoi') videoi!: ElementRef;

  public bola: boolean = false;
  public inicio: boolean = false;
  public aviso: boolean = true;
  public equis: boolean = true;
  public tecnologia: boolean = false;
  public cine: boolean = false;
  public videojuegos: boolean = false;
  public television: boolean = false;
  public farandula: boolean = false;
  public tema_semana: boolean = false;
  public musica: boolean = false;
  public eventos: boolean = false;
  public actualidad: boolean = false;
  public famosos: boolean = false;
  public artistas: boolean = false;
  public chiste_semana: boolean = false;
  public cafe_vilma: boolean = false;
  public meme_semana: boolean = false;
  public redes_mega: boolean = false;
  public parametro: string | null = "";
  public titular: string | null = "";
  public informacion_h4: string | null = "";
  public informacion_h3: string | null = "";

  public noticia : any;

  public menus : menu = new menu(); 
  public mostrarSpinner : boolean = true;

  public menus2 !: { tipo : string , locutor: string} ;

  constructor(private routes: ActivatedRoute, private renderer2: Renderer2, private router: Router, private fire: FireService) { }

  async ngOnInit(): Promise<void> {
    var parametro = this.routes.snapshot.paramMap.get('id');
    var parametro2 = this.routes.snapshot.paramMap.get('id_locutor');
    this.menus.tipo = 'noticias';
    if(parametro2 != null && parametro != null) {
      this.menus.locutor = parametro2;
      this.noticia = await this.fire.llenarInfoNoticias(parametro2 , parametro);
    }
    this.mostrarSpinner = false;
  }

  pop() {
    //var b1 = this.item1.nativeElement;
    //var b2 = this.item2.nativeElement;
    //var b3 = this.item3.nativeElement;
    // var b4 = this.item4.nativeElement;
    //var b5 = this.item5.nativeElement;


    if (!this.bola) {
      /*this.renderer2.setStyle(b1, 'transform', 'translate(-120px,0px)');
      this.renderer2.setStyle(b2,'transform','translate(-60px,-50px)');
      this.renderer2.setStyle(b3,'transform','translateY(-50px)');
      this.renderer2.setStyle(b4,'transform','translate(60px,-50px)');
      this.renderer2.setStyle(b5,'transform','translate(120px,0px)');*/
      this.bola = true;
    }
    else {
      /*this.renderer2.setStyle(b1, 'transform', 'translate(0px)');
      this.renderer2.setStyle(b2,'transform', 'translate(0px)');
      this.renderer2.setStyle(b3,'transform', 'translate(0px)');
      this.renderer2.setStyle(b4,'transform', 'translate(0px)');
      this.renderer2.setStyle(b5,'transform', 'translate(0px)');*/
      this.bola = false;
    }
  }
  start() {
    this.router.navigate(['/inicio']);
  }

  locutor(cadena: string) {
    this.router.navigate(['/perfiles', cadena]);
  }

  exit() {
    this.router.navigate(['/perfiles/caro']);
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
}

