import {  Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @ViewChild('item1') item1!: ElementRef;
  @ViewChild('item2') item2!: ElementRef;
  @ViewChild('item3') item3!: ElementRef;
  @ViewChild('item4') item4!: ElementRef;
  @ViewChild('item5') item5!: ElementRef;
  @ViewChild('menu-items') menu!: ElementRef;

  public bola : boolean = false;
  public inicio: boolean = false;
  public equis : boolean=true;

  constructor( private routes: ActivatedRoute,private renderer2: Renderer2, private router:Router) { }

  ngOnInit(): void {

    
    let pc = document.getElementById('pc');

    pc?.setAttribute('gltf-model','../../assets/Shared/Notebook.glb');
    pc?.setAttribute('scale','0.022 0.022 0.022');
    pc?.setAttribute('position','49.2 -13.6 -7.9'); 
    pc?.setAttribute('rotation','0 -45.5 0'); 
    /*let logo=document.getElementById('logo');
    logo?.setAttribute('src','../../assets/Productos/logo_ishop.svg')*/
 
  }

    pop() {
    var b1 = this.item1.nativeElement;
    var b2 = this.item2.nativeElement;
    var b3 = this.item3.nativeElement;
    var b4 = this.item4.nativeElement;
    var b5 = this.item5.nativeElement;
    

    if (!this.bola) {
      this.renderer2.setStyle(b1, 'transform', 'translate(-140px,0px)');
      this.renderer2.setStyle(b2,'transform','translate(-90px,-50px)');
      this.renderer2.setStyle(b3,'transform','translateY(-90px)');
      this.renderer2.setStyle(b4,'transform','translate(70px,-50px)');
      this.renderer2.setStyle(b5,'transform','translate(140px,0px)');
      this.bola=true;
    }
    else{
      this.renderer2.setStyle(b1, 'transform', 'translate(0px)');
      this.renderer2.setStyle(b2,'transform', 'translate(0px)');
      this.renderer2.setStyle(b3,'transform', 'translate(0px)');
      this.renderer2.setStyle(b4,'transform', 'translate(0px)');
      this.renderer2.setStyle(b5,'transform', 'translate(0px)');
      this.bola=false;
    }
  }
  

  goToUrl() {
    window.location.href = "https://tiendasishop.com/co/apple-macbook-pro-16-2019-touch-bar-intel-i9-de-2-3-ghz-ram-16gb-1tb-gris-espacial-mvvk2ea";
  }

  exit() {
    this.router.navigate(['/space']);
  }

  goToAr(){
  window.location.href = "https://www.vectary.com/viewer-ar/v1/?model=07041aab-469e-42a5-932b-9d9cdbb09dbd&allowScaling=";
  }


}
