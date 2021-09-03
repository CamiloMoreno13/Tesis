import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../Services/Producto/producto.service';

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
  @ViewChild('camita') mover!: ElementRef;

  public bola: boolean = false;
  public inicio: boolean = false;
  public equis: boolean = true;
  public mostrar: boolean = false;
  public movimiento: boolean = false;


  constructor(private renderer2: Renderer2, private router: Router, private productoService: ProductoService) { }

  ngOnInit(): void {


    let pc = document.getElementById('clic_pc');

    pc?.setAttribute('gltf-model', '../../assets/Shared/Notebook.glb');
    pc?.setAttribute('scale', '0.022 0.022 0.022');
    pc?.setAttribute('position', '49.2 -13.6 -7.9');
    pc?.setAttribute('rotation', '0 -45.5 0');
    /*let logo=document.getElementById('logo');
    logo?.setAttribute('src','../../assets/Productos/logo_ishop.svg')*/

    document.querySelector("a-scene").addEventListener("loaded", () => { setTimeout(() => { this.mostrar = true }, 1000) }) /* This is the key*/
  }

  pop() {
    var b1 = this.item1.nativeElement;
    var b2 = this.item2.nativeElement;
    var b3 = this.item3.nativeElement;
    var b4 = this.item4.nativeElement;
    var b5 = this.item5.nativeElement;


    if (!this.bola) {
      this.renderer2.setStyle(b1, 'transform', 'translate(-140px,0px)');
      this.renderer2.setStyle(b2, 'transform', 'translate(-90px,-50px)');
      this.renderer2.setStyle(b3, 'transform', 'translateY(-90px)');
      this.renderer2.setStyle(b4, 'transform', 'translate(70px,-50px)');
      this.renderer2.setStyle(b5, 'transform', 'translate(140px,0px)');
      this.bola = true;
    }
    else {
      this.renderer2.setStyle(b1, 'transform', 'translate(0px)');
      this.renderer2.setStyle(b2, 'transform', 'translate(0px)');
      this.renderer2.setStyle(b3, 'transform', 'translate(0px)');
      this.renderer2.setStyle(b4, 'transform', 'translate(0px)');
      this.renderer2.setStyle(b5, 'transform', 'translate(0px)');
      this.bola = false;
    }
  }


  goToUrl(objeto: string) {
    this.productoService.clic(objeto);
    window.open('https://www.apple.com/macbook-pro-16/', '_blank');
  }

  exit() {
    this.router.navigate(['/space']);
  }

  goToAr(objeto: string) {
    this.productoService.clic(objeto);
    window.open('https://www.vectary.com/viewer-ar/v1/?model=07041aab-469e-42a5-932b-9d9cdbb09dbd&allowScaling=', '_blank');
  }

  cameraMove() {
    if (this.movimiento == false) {
      let cam = document.getElementById('camera-container');
      console.log(this.movimiento);
      //cam?.setAttribute('rotation', '0 90 0');
      cam?.setAttribute('animation', 'property:rotation;to: 0 -20 0;dur: 1000;easing: easeInSine');


      console.log("A 90");

      //cam?.setAttribute('animation','dur:10000')
      //this.movimiento = true;
    }

  }
  cameraMove2() {
    if (this.movimiento == false) {
      let cam = document.getElementById('camera-container');
      console.log("segundo coso");
     //cam?.setAttribute('rotation', '0 90 0');
      cam?.setAttribute('animation', 'property:rotation;to: 0 -80 0;dur: 1000;easing: easeInSine');


      console.log("A 90");

      //cam?.setAttribute('animation','dur:10000')
      //this.movimiento = true;
    }

  }


}
