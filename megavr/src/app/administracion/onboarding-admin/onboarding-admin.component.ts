import { Component, OnInit } from '@angular/core';
import { FireService } from 'src/app/Services/Firebase/firestore/fire.service';
import { banner } from '../Modelos/banner';

@Component({
  selector: 'app-onboarding-admin',
  templateUrl: './onboarding-admin.component.html',
  styleUrls: ['./onboarding-admin.component.css']
})
export class OnboardingAdminComponent implements OnInit {

  public urls: string[] = [];
  public file!: FileList;

  public title!: string; 
  public subtitle !: string;
  public selection: string = '';

  public informacion: banner[] = [];

  constructor(private fire: FireService) { }

  ngOnInit(): void {
    this.llenarSliders();

  }
  
  createSlider(){
    //this.fire.createFire('onboarding',JSON.parse(JSON.stringify(slider)));
  }

  llenarSliders() {
    this.fire.llenarInformacionOnboarding().subscribe(res => {
      res.docs.forEach((res3: any) => {
        let ban = new banner();
        ban = res3.data();
        this.informacion.push(ban)
      });
    });
  }

  updateSlider(){
    var slide = {
      'title' : this.title,
      'subtitle' : this.subtitle
    }

    this.fire.updateSlide(this.selection, JSON.parse(JSON.stringify(slide)));

    console.log(this.selection);
    
    this.informacion[Number(this.selection)-1].title = this.title;
    this.informacion[Number(this.selection)-1].subtitle = this.subtitle;
  }
}
