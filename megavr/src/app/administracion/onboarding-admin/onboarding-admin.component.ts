import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FireService } from 'src/app/Services/Firebase/firestore/fire.service';
import { StorageService } from 'src/app/Services/Firebase/storage/storage.service';

@Component({
  selector: 'app-onboarding-admin',
  templateUrl: './onboarding-admin.component.html',
  styleUrls: ['./onboarding-admin.component.css']
})
export class OnboardingAdminComponent implements OnInit {

  constructor(private fire: FireService, private storage: StorageService) { }

  @ViewChild("video" , {read: ElementRef}) video!: ElementRef; 
  @ViewChild("img" , {read: ElementRef}) img!: ElementRef; 
  
  public indice : number = 0;
  public mostrarSpinner = true;
  public mostrarSlider = false;
  public sliders: any[] = [];
  public slider : any; 
  public valor : any ;
  public iconos: boolean[] = [true, false]; 
  public indexIcono : number = 0; 
  
  public fileVideo : string = '';
  public fileUpVideo !: FileList;
  public videoTempo : boolean = false; 
  public showVideoTempo : boolean = true;

  public fileImg : string = '';
  public fileUpImg !: FileList;
  public imgTempo : boolean = false;
  public showImgTempo : boolean = true; 


  async ngOnInit(): Promise<void> {
    this.sliders = await this.fire.llenarInformacionOnboarding();
    this.slider = this.sliders[this.indice];
    if(this.slider.video != '') this.showVideoTempo = true;
    if(this.slider.imagenes.length > 0) this.showImgTempo = false;  
    this.mostrarSpinner = false;
    this.mostrarSlider = true; 
  }

  eleccion(){
    this.slider = this.sliders[this.indice];
   (document.getElementById('image')as HTMLInputElement).value = '';
   (document.getElementById('videos')as HTMLInputElement).value = '';
   this.fileUpImg = this.img.nativeElement.files;
   this.fileUpVideo = this.video.nativeElement.files;
   if(this.slider.video != '') {this.showVideoTempo = false;} else {this.showVideoTempo = true};
   if(this.slider.imagenes.length > 0) {this.showImgTempo = false;} else { this.showImgTempo = true};  
    this.indexIcono = 0;
    this.fileImg = ''; 
    this.fileVideo = '';
    this.imgTempo = false;
    this.videoTempo = false;
  }

  async cargarVideo(){
    this.videoTempo = false;
    this.fileVideo = 'cargando';
    this.fileUpVideo = this.video.nativeElement.files;
    this.fileVideo = await this.storage.videoTemporal('onboarding', 'tempo_video' , this.fileUpVideo);
    this.videoTempo = true;
  }

  async cargarImagen(){
    this.imgTempo = false; 
    this.fileImg = 'cargando';
    this.fileUpImg = this.img.nativeElement.files;
    this.fileImg = await this.storage.videoTemporal('onboarding', 'tempo_img' , this.fileUpImg);
    this.imgTempo = true; 
  }

  update(){
    console.log("entro ")
    var slide = this.indice ;
    var index = this.indexIcono; 
    ++slide;
    ++index;
    this.fire.updateOnBoarding('onboarding', 'slide'+slide+'_'+index ,'slide'+slide ,this.slider , this.fileUpVideo, this.fileUpImg);
  }
}
