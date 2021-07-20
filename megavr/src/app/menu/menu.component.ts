import { style } from '@angular/animations';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import * as $ from 'jquery';

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

  private bola : boolean = false;
  constructor(private renderer2: Renderer2) { }

  ngOnInit(): void {

  }



  pop() {
    console.log("perro");
    var i = 0;
    var b1 = this.item1.nativeElement;
    var b2 = this.item2.nativeElement;
    var b3 = this.item3.nativeElement;
    var b4 = this.item4.nativeElement;
    var b5 = this.item5.nativeElement;
    

    if (!this.bola) {
      this.renderer2.setStyle(b1, 'transform', 'translateX(-150px)');
      this.renderer2.setStyle(b2,'transform','translate(-100px,-100px)');
      this.renderer2.setStyle(b3,'transform','translateY(-150px)');
      this.renderer2.setStyle(b4,'transform','translate(100px,-100px)');
      this.renderer2.setStyle(b5,'transform','translateX(150px)');
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
}
