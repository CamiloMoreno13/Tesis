import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


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

  public bola : boolean = false;
  public inicio: boolean = false;
  public aviso : boolean=true;
  public equis : boolean=true;
  public tecnologia : boolean = false;
  public cine : boolean = false;
  public videojuegos : boolean = false;
  public television : boolean = false;
  public farandula : boolean = false;
  public tema_semana : boolean = false;
  public musica : boolean = false;
  public eventos : boolean = false;
  public actualidad : boolean = false;
  public famosos : boolean = false;
  public artistas : boolean = false;
  public chiste_semana : boolean = false;
  public cafe_vilma : boolean = false;
  public meme_semana : boolean = false;
  public redes_mega : boolean = false;
  public parametro: string | null = "";
  public titular: string | null = "";
  public informacion_h4: string | null = "";
  public informacion_h3: string | null = "";

  public books: Array<object> = [
    { title: "book1", description: "book desc 1" },
    { title: "book2", description: "book desc 2" },
    { title: "book3", description: "book desc 3" },
    { title: "book4", description: "book desc 4 " }
  ];

  // icono y video
  public informacion: { id: number, titular: string, informacion_h4: string, informacion_h3: string }[] = [
    { "id": 0, "titular": "tecnologia", "informacion_h4": "Nuevos gadgets tecnologicos", "informacion_h3": "Tecnologias activas" },
    { "id": 1, "titular": "cine", "informacion_h4": "La nueva pelicula de Tim Burton", "informacion_h3": "Peliculas independientes" },
    { "id": 2, "titular": "videojuegos", "informacion_h4": "CyberPunk afronta demandas", "informacion_h3": "Juego en PS5" },
    { "id": 3, "titular": "series", "informacion_h4": "El legado de jupiter vs Invincible", "informacion_h3": "Netflix vs Amazon" },
    { "id": 4, "titular": "farandula", "informacion_h4": "Jessica Cediel nuevo cambio", "informacion_h3": "Tema de opinión" },
    
    { "id": 5, "titular": "tema_semana", "informacion_h4": "Las toxihistorias", "informacion_h3": "Relaciones quebradas" },
    
    { "id": 6, "titular": "musica", "informacion_h4": "Musica en la mega sonando duro", "informacion_h3": "Los nuevos hits" },
    { "id": 7, "titular": "eventos", "informacion_h4": "Eventos en la mega", "informacion_h3": "Eventos en la mega" },
    { "id": 8, "titular": "actualidad", "informacion_h4": "Famosos", "informacion_h3": "Famosos en la Mega" },
    { "id": 9, "titular": "famosos", "informacion_h4": "Guerra de divas", "informacion_h3": "No solo la musica las hace mejores" },
    { "id": 10, "titular": "artistas", "informacion_h4": "J Balvin rompe records", "informacion_h3": "Artistas la mega" },
    { "id": 11, "titular": "chiste_semana", "informacion_h4": "Los del Pasto son mas inteligentes", "informacion_h3": "El chiste de la region" },
    { "id": 12, "titular": "cafe_vilma", "informacion_h4": "Vilma nos cuenta como hacer cafe", "informacion_h3": "Cafe o chocolate" },
    { "id": 13, "titular": "meme_semana", "informacion_h4": "Papá corre detras de sus hijos", "informacion_h3": "Caida libre en escaleras" },
    { "id": 14, "titular": "redes_mega", "informacion_h4": "Los mejores reels de instagram", "informacion_h3": "El nuevo reel de la mega" },
  ];

  constructor( private routes: ActivatedRoute,private renderer2: Renderer2, private router:Router) { }

  ngOnInit(): void {
    this.parametro = this.routes.snapshot.paramMap.get('id');
    this.inicio = true;
    for(let info of this.informacion ){
      if (this.parametro == info.titular){
        this.titular = info.titular;
        this.informacion_h3 = info.informacion_h3;
        this.informacion_h4 = info.informacion_h4;
      }
    }
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
      this.bola=true;
    }
    else{
      /*this.renderer2.setStyle(b1, 'transform', 'translate(0px)');
      this.renderer2.setStyle(b2,'transform', 'translate(0px)');
      this.renderer2.setStyle(b3,'transform', 'translate(0px)');
      this.renderer2.setStyle(b4,'transform', 'translate(0px)');
      this.renderer2.setStyle(b5,'transform', 'translate(0px)');*/
      this.bola=false;
    }
  }
  start(){
    this.router.navigate(['/inicio']);
  }

  locutor(cadena:string){
     this.router.navigate(['/perfiles',cadena]);
  }

  exit() {
    this.router.navigate(['/perfiles/caro']);
  }

  mute() {
    var b1 = this.videoi.nativeElement;
    if (this.videopls.nativeElement.muted) {

      this.videopls.nativeElement.muted = false;
      this.aviso=false;
    }
    else {
      this.videopls.nativeElement.muted = true;
      this.aviso=true;
    }
  }
}

