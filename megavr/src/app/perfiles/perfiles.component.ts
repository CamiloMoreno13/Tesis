import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FireService } from '../Services/Firebase/firestore/fire.service';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.css']
})
export class PerfilesComponent implements OnInit {
  @ViewChild('videopls') videopls!: ElementRef;
  @ViewChild('videoi') videoi!: ElementRef;

  public locutor: string | null = "";
  public sonido: boolean = true;
  public perfil !: any;
  public listNoticias !: any[]; 
  public mostrarSpinner : boolean = true; 
  public isMobile : boolean = false; 
  public tipoMenu : any = {tipoMenu : 'perfiles' , isMobile : this.isMobile , locutor : ''}; 

  constructor(private routes: ActivatedRoute, private router: Router, private fire: FireService) { }

  async ngOnInit(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      // Es mobile
      this.isMobile = true; 
      this.tipoMenu.isMobile = true;
    }else{
      // No es mobile 
      this.isMobile = false;
      this.tipoMenu.isMobile = false; 
    }
    
    
    this.locutor = this.routes.snapshot.paramMap.get('id');
    this.tipoMenu.locutor = this.locutor;
    if(this.locutor != null){
      this.perfil = await this.fire.llenarInfoPerfil(this.locutor);
      this.listNoticias = this.perfil.noticias;
    }
    this.mostrarSpinner = false;
  }

  mute() {
    var b1 = this.videoi.nativeElement;
    if (this.videopls.nativeElement.muted) {
      this.videopls.nativeElement.muted = false;
      this.sonido = false;
    }
    else {
      this.videopls.nativeElement.muted = true;
      this.sonido = true;
    }
  }

  redireccionar(cadena:string) {
    this.router.navigate(['/perfiles/'+this.locutor+'/noticias',cadena]);
  }
  
  exit() {
    this.router.navigate(['/space']);
  }
}