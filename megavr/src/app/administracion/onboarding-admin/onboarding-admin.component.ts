import { Component, OnInit } from '@angular/core';
import { FireService } from 'src/app/Services/Firebase/firestore/fire.service';
import { banner } from '../Modelos/banner';

@Component({
  selector: 'app-onboarding-admin',
  templateUrl: './onboarding-admin.component.html',
  styleUrls: ['./onboarding-admin.component.css']
})
export class OnboardingAdminComponent implements OnInit {

  public urls : string[] = [];
  public file! : FileList ; 
  public slider: string  = '';

  intento : number = 0;
  public informacion: banner[] = [];

  constructor(private fire: FireService) { }

  ngOnInit(): void {
    this.llenar();
  }

  addSlider(){
    var titulo = (document.getElementById('titulo') as HTMLInputElement).value;
    var subtitulo = (document.getElementById('sub') as HTMLInputElement).value;
    
    var slider = new banner(); 
    slider.title = titulo; 
    slider.subtitle  = subtitulo; 
    slider.imagenes = [];
    this.fire.createFire('onboarding',JSON.parse(JSON.stringify(slider)));
  }

  llenar(){
    this.fire.llenarInformacion().then(res => 
      { res.subscribe(res2 => 
        { res2.forEach((res3 : any )=> 
          { let ban = new banner(); 
            ban = res3.data();
            this.informacion.push(ban)
          }) }) });
  }

  prueba(){
    var p = this.slider;
    console.log(p)
  }
}
