import { style } from '@angular/animations';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  @ViewChild('pls') pls!: ElementRef;
  @ViewChild('item1') item1!: ElementRef;
  @ViewChild('item2') item2!: ElementRef;
  @ViewChild('item3') item3!: ElementRef;
  @ViewChild('item4') item4!: ElementRef;
  @ViewChild('item5') item5!: ElementRef;
  @ViewChild('menu-items') menu!: ElementRef;

  public bola : boolean = false;
  public perfiles : boolean = false;
  public noticias : boolean = false;
  public producto : boolean = false;
  public inicio: boolean = false;
  public equis : boolean = true;
  public href: string = "";

  constructor(private renderer2: Renderer2, private router:Router) {
  }

  ngOnInit(): void {
    this.inicio = false;
    this.perfiles = false;
    this.noticias = false;
    this.producto = false;
    this.href = this.router.url;
    if (this.href == "/space"){
      console.log("Puede funcionar");
      this.inicio = true;
    } 
    if (this.href == "/perfiles/caro"){
      console.log("Puede funcionar 2");
      this.perfiles = true;
    } 
    if (this.href == "/noticias"){
      console.log("Puede funcionar 3");
      this.noticias = true;
    } 
    if (this.href == "/producto"){
      console.log("Puede funcionar 3");
      this.producto = true;
    } 
    //console.log(this.router.url);
  }

  exit() {
    this.router.navigate(['/space']);
  }

  exitNoticias() {
    this.router.navigate(['/perfiles/caro']);
  }

  pop() {
    var b1 = this.item1.nativeElement;
    var b2 = this.item2.nativeElement;
    var b3 = this.item3.nativeElement;
    var b4 = this.item4.nativeElement;
    var b5 = this.item5.nativeElement;
    

    if (!this.bola) {
      this.renderer2.setStyle(b1, 'transform', 'translate(-120px,0px)');
      this.renderer2.setStyle(b2,'transform','translate(-60px,-50px)');
      this.renderer2.setStyle(b3,'transform','translateY(-75px)');
      this.renderer2.setStyle(b4,'transform','translate(60px,-50px)');
      this.renderer2.setStyle(b5,'transform','translate(120px,0px)');
      this.bola=true;
      this.equis=false;
    }
    else{
      this.renderer2.setStyle(b1, 'transform', 'translate(0px)');
      this.renderer2.setStyle(b2,'transform', 'translate(0px)');
      this.renderer2.setStyle(b3,'transform', 'translate(0px)');
      this.renderer2.setStyle(b4,'transform', 'translate(0px)');
      this.renderer2.setStyle(b5,'transform', 'translate(0px)');
      this.bola=false;
      this.equis=true;
    }

    
  }
  
  start(){
    this.router.navigate(['/inicio']);
  }

  locutor(cadena:string){
    if(cadena != "caro"){
      
    } else {
      this.router.navigate(['/perfiles',cadena]);
    }
  }



}
