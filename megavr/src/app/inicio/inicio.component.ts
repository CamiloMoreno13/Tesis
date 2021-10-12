import { Component, OnInit } from '@angular/core';
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

  
  public open: boolean = true;
  public informacion: banner[] = [];
  public indicador: boolean[] = [false, false, false, false, false, false];

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
  }

  llenar_init(){
    this.informacion.push(new banner())

  }

  llenar() {
    this.fire.llenarInformacion().then(res => 
      { res.subscribe(res2 => 
        { res2.forEach((res3 : any )=> 
          { let ban = new banner(); 
            ban = res3.data();
            this.informacion.push(ban)
          }) }) });
    }

  logo(){
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
}
