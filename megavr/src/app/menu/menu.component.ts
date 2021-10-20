import { style } from '@angular/animations';
import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { FireService } from '../Services/Firebase/firestore/fire.service';


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
  public menu_5_items : boolean = false;
  public menu_3_items : boolean = false;
  public menu_1_items : boolean = false;

  public item_names : string[] = [];

  public href: string = "";

  
  public informacion: { id: number, titular: string, informacion_h4: string, informacion_h3: string }[] = [
    { "id": 0, "titular": "tecnologia", "informacion_h4": "Nuevos gadgets tecnologicos", "informacion_h3": "Tecnologias activas" },
    { "id": 0, "titular": "tecnologia", "informacion_h4": "Nuevos gadgets tecnologicos", "informacion_h3": "Tecnologias activas" }
  ];
  

  constructor(private routes: ActivatedRoute, private renderer2: Renderer2, private router:Router, private fire: FireService) {
  }

  @Input() set pruebas(palabra : any){
    this.fire.llenarInfoPerfil(palabra).subscribe((res:any) => {
      console.log("informacion locutor" , res.data())
    });
  }

  

  ngOnInit(): void {
  }

  exit() {
    this.router.navigate(['/space']);
  }

  exitNoticias() {
    var splits = this.href.split('/noticias');
    this.router.navigate([splits[0]]);
  }

  pop() {
    if (!this.bola) {
      this.bola=true;
      this.equis=false;
    }
    else{
      this.bola=false;
      this.equis=true;
    }
    /*
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
    */
  }
  
  start(){
    this.router.navigate(['/inicio']);
  }

  locutor(cadena:string){
    this.router.navigate(['/perfiles',cadena]);

    /*
    if(cadena != "caro"){
      
    } else {
      this.router.navigate(['/perfiles',cadena]);
    }
    */
  }



}
