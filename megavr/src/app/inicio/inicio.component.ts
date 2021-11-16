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

  async ngOnInit() {

    this.informacion = await this.fire.llenarInformacionOnboarding();
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
   
    this.swiper.on('slideChange', function () {
      let video2 = document.getElementById('video-slider2') as HTMLVideoElement;
      let video3 = document.getElementById('video-slider3') as HTMLVideoElement;
      let video4 = document.getElementById('video-slider4') as HTMLVideoElement;
      let video5 = document.getElementById('video-slider5') as HTMLVideoElement;
      let video6 = document.getElementById('video-slider6') as HTMLVideoElement;
      video2.muted = true;
      video3.muted = true;
      video4.muted = true;
      video5.muted = true;
      video6.muted = true;

      (document.getElementById('sound-2')as HTMLImageElement).setAttribute('src' , '../../assets/Space/volumeoff.png');
      (document.getElementById('sound-3')as HTMLImageElement).setAttribute('src' , '../../assets/Space/volumeoff.png');
      (document.getElementById('sound-4')as HTMLImageElement).setAttribute('src' , '../../assets/Space/volumeoff.png');
      (document.getElementById('sound-5')as HTMLImageElement).setAttribute('src' , '../../assets/Space/volumeoff.png');
      (document.getElementById('sound-6')as HTMLImageElement).setAttribute('src' , '../../assets/Space/volumeoff.png');
      
      (document.getElementById('texto-2')as HTMLImageElement).hidden = false;
      (document.getElementById('texto-3')as HTMLImageElement).hidden = false;
      (document.getElementById('texto-4')as HTMLImageElement).hidden = false;
      (document.getElementById('texto-5')as HTMLImageElement).hidden = false;
      (document.getElementById('texto-6')as HTMLImageElement).hidden = false;

    });
  }

  logo() {
    this.open = false;
  }

  next() {
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
    switch (slider) {
      /*
      case 1:
        if (this.video1.nativeElement.muted) {
          this.video1.nativeElement.muted = false;
          this.video2.nativeElement.muted = true;
          this.video3.nativeElement.muted = true;
          this.video4.nativeElement.muted = true;
          this.video5.nativeElement.muted = true;
          this.video6.nativeElement.muted = true;
          this.aviso = [false, true, true, true, true, true];
        }
        else {
          this.video1.nativeElement.muted = true;
          this.aviso[0] = true;
        }
        break;
        */
      case 2:
        if (this.video2.nativeElement.muted) {
          this.video2.nativeElement.muted = false;
          this.video3.nativeElement.muted = true;
          this.video4.nativeElement.muted = true;
          this.video5.nativeElement.muted = true;
          this.video6.nativeElement.muted = true;
          (document.getElementById('sound-2')as HTMLImageElement).setAttribute('src' , '../../assets/Space/volumeup.png');
          (document.getElementById('texto-2')as HTMLImageElement).hidden = true;
        }
        else {
          this.video2.nativeElement.muted = true;
          (document.getElementById('sound-2')as HTMLImageElement).setAttribute('src' , '../../assets/Space/volumeoff.png');
          (document.getElementById('texto-2')as HTMLImageElement).hidden = false;
        }
        break;
      case 3:
        if (this.video3.nativeElement.muted) {
          this.video3.nativeElement.muted = false;
          
          this.video2.nativeElement.muted = true;
          this.video4.nativeElement.muted = true;
          this.video5.nativeElement.muted = true;
          this.video6.nativeElement.muted = true;
          (document.getElementById('sound-3')as HTMLImageElement).setAttribute('src' , '../../assets/Space/volumeup.png');
          (document.getElementById('texto-3')as HTMLImageElement).hidden = true;
        }
        else {
          this.video3.nativeElement.muted = true;
          (document.getElementById('sound-3')as HTMLImageElement).setAttribute('src' , '../../assets/Space/volumeoff.png');
          (document.getElementById('texto-3')as HTMLImageElement).hidden = false;
        }
        break;
      case 4:
        if (this.video4.nativeElement.muted) {
          this.video4.nativeElement.muted = false;
          
          this.video2.nativeElement.muted = true;
          this.video3.nativeElement.muted = true;
          this.video5.nativeElement.muted = true;
          this.video6.nativeElement.muted = true;
          (document.getElementById('sound-4')as HTMLImageElement).setAttribute('src' , '../../assets/Space/volumeup.png');
          (document.getElementById('texto-4')as HTMLImageElement).hidden = true;
        }
        else {
          this.video4.nativeElement.muted = true;
          (document.getElementById('sound-4')as HTMLImageElement).setAttribute('src' , '../../assets/Space/volumeoff.png');
          (document.getElementById('texto-4')as HTMLImageElement).hidden = false;
        }
        break;
      case 5:
        if (this.video5.nativeElement.muted) {
          this.video5.nativeElement.muted = false;
          
          this.video2.nativeElement.muted = true;
          this.video3.nativeElement.muted = true;
          this.video4.nativeElement.muted = true;
          this.video6.nativeElement.muted = true;
          (document.getElementById('sound-5')as HTMLImageElement).setAttribute('src' , '../../assets/Space/volumeup.png');
          (document.getElementById('texto-5')as HTMLImageElement).hidden = true;
        }
        else {
          this.video5.nativeElement.muted = true;
          (document.getElementById('sound-5')as HTMLImageElement).setAttribute('src' , '../../assets/Space/volumeoff.png');
          (document.getElementById('texto-5')as HTMLImageElement).hidden = false;
        }
        break;
      case 6:
        if (this.video6.nativeElement.muted) {
          this.video6.nativeElement.muted = false;
          this.video2.nativeElement.muted = true;
          this.video3.nativeElement.muted = true;
          this.video4.nativeElement.muted = true;
          this.video5.nativeElement.muted = true;
          (document.getElementById('sound-6')as HTMLImageElement).setAttribute('src' , '../../assets/Space/volumeup.png');
          (document.getElementById('texto-6')as HTMLImageElement).hidden = true;
        }
        else {
          this.video6.nativeElement.muted = true;
          (document.getElementById('sound-6')as HTMLImageElement).setAttribute('src' , '../../assets/Space/volumeoff.png');
          (document.getElementById('texto-6')as HTMLImageElement).hidden = false;
        }
        break;
    }
  }
}
