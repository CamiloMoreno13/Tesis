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
  
  public parametro: string | null = "";

  constructor( private routes: ActivatedRoute,private renderer2: Renderer2, private router:Router) { }

  ngOnInit(): void {
    this.parametro = this.routes.snapshot.paramMap.get('id');
    console.log(this.parametro);
    this.inicio = true;
  }

  pop() {
    //var b1 = this.item1.nativeElement;
    //var b2 = this.item2.nativeElement;
    var b3 = this.item3.nativeElement;
   // var b4 = this.item4.nativeElement;
    //var b5 = this.item5.nativeElement;
    

    if (!this.bola) {
      /*this.renderer2.setStyle(b1, 'transform', 'translate(-120px,0px)');
      this.renderer2.setStyle(b2,'transform','translate(-60px,-50px)');*/
      this.renderer2.setStyle(b3,'transform','translateY(-50px)');/*
      this.renderer2.setStyle(b4,'transform','translate(60px,-50px)');
      this.renderer2.setStyle(b5,'transform','translate(120px,0px)');*/
      this.bola=true;
    }
    else{
      /*this.renderer2.setStyle(b1, 'transform', 'translate(0px)');
      this.renderer2.setStyle(b2,'transform', 'translate(0px)');*/
      this.renderer2.setStyle(b3,'transform', 'translate(0px)');/*
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

