import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import Swiper from 'swiper';
import 'swiper/css';
import { banner } from '../administracion/Modelos/banner';
import { FireService } from '../Services/Firebase/firestore/fire.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  @ViewChild('video1') video1!: ElementRef;
  @ViewChild('video2') video2!: ElementRef;
  @ViewChild('video3') video3!: ElementRef;
  @ViewChild('video4') video4!: ElementRef;
  @ViewChild('video5') video5!: ElementRef;
  @ViewChild('video6') video6!: ElementRef;



  public open: boolean = true;
  public informacion: banner[] = [new banner(), new banner(), new banner(), new banner(), new banner(), new banner()];
  public indicador: boolean[] = [false, false, false, false, false, false];
  public aviso: boolean[] = [true, true, true, true, true, true];

  swiper !: Swiper;

  constructor(private router: Router, private fire: FireService) { }

  async ngOnInit(): Promise<void> {


    await this.llenar();
    this.indicador[0] = true;

    this.swiper = new Swiper('.swiper', {
      pagination: {
        el: '.swiper-pagination',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });

    /*
    let caro2 = <HTMLVideoElement>document.getElementById("v2");
    caro2.volume = 0;
    caro2.play();
    */
  
  }

  llenar() {
    this.fire.llenarInformacionOnboarding().subscribe(res => {
      let index = 0;
      res.docs.forEach((res3: any) => {
        let ban = new banner();
        ban = res3.data();
        this.informacion[index] = ban
        index += 1;
      });
    });
  }
  logo() {
    this.open = false;
  }
  next() {
    console.log('entro siguiente')
    this.swiper.slideNext();
  }
  indicadores(index: number) {
    this.indicador = [false, false, false, false, false];
    this.indicador[index] = true;
    this.swiper.slideTo(index)
  }
  space() {
    this.router.navigate(['/space']);
  }

  exit() {
    this.router.navigate(['/space']);
  }

  mute(slider: number) {
    switch(slider){
      case 1:
        if (this.video1.nativeElement.muted) {
          this.video1.nativeElement.muted = false;
          this.video2.nativeElement.muted = true;
          this.video3.nativeElement.muted = true;
          this.video4.nativeElement.muted = true;
          this.video5.nativeElement.muted = true;
          this.video6.nativeElement.muted = true;
          this.aviso = [false, true, true, true, true, true ]
        }
        else {
          this.video1.nativeElement.muted = true;
          this.aviso[0] = true;
          console.log(this.aviso);
        }
        break;
      case 2:
        if (this.video2.nativeElement.muted) {
          this.video2.nativeElement.muted = false;
          this.video1.nativeElement.muted = true;
          this.video3.nativeElement.muted = true;
          this.video4.nativeElement.muted = true;
          this.video5.nativeElement.muted = true;
          this.video6.nativeElement.muted = true;
          this.aviso = [true, false, true, true, true, true ]
        }
        else {
          this.video2.nativeElement.muted = true;
          this.aviso[1] = true;
        }
        break;
      case 3:
        if (this.video3.nativeElement.muted) {
          this.video3.nativeElement.muted = false;
          this.video1.nativeElement.muted = true;
          this.video2.nativeElement.muted = true;
          this.video4.nativeElement.muted = true;
          this.video5.nativeElement.muted = true;
          this.video6.nativeElement.muted = true;
          this.aviso = [true, true, false, true, true, true ]
        }
        else {
          this.video3.nativeElement.muted = true;
          this.aviso[2] = true;
        }
        break;
      case 4:
        if (this.video4.nativeElement.muted) {
          this.video4.nativeElement.muted = false;
          this.video1.nativeElement.muted = true;
          this.video2.nativeElement.muted = true;
          this.video3.nativeElement.muted = true;
          this.video5.nativeElement.muted = true;
          this.video6.nativeElement.muted = true;
          this.aviso = [true, true, true, false, true, true ]
        }
        else {
          this.video4.nativeElement.muted = true;
          this.aviso[3] = true;
        }
        break;
      case 5:
        if (this.video5.nativeElement.muted) {
          this.video5.nativeElement.muted = false;
          this.video1.nativeElement.muted = true;
          this.video2.nativeElement.muted = true;
          this.video3.nativeElement.muted = true;
          this.video4.nativeElement.muted = true;
          this.video6.nativeElement.muted = true;
          this.aviso = [true, true, true, true, false, true ]
        }
        else {
          this.video5.nativeElement.muted = true;
          this.aviso[4] = true;
        }
        break;
      case 6:
        if (this.video6.nativeElement.muted) {
          this.video6.nativeElement.muted = false;
          this.video1.nativeElement.muted = true;
          this.video2.nativeElement.muted = true;
          this.video3.nativeElement.muted = true;
          this.video4.nativeElement.muted = true;
          this.video5.nativeElement.muted = true;
          this.aviso = [true, true, true, true, true, false ]
        }
        else {
          this.video6.nativeElement.muted = true;
          this.aviso[5] = true;
        }
        break;
    }
    
  }
}
