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
  public tipoMenu : string = 'perfiles'; 
  public mostrarSpinner : boolean = true; 

  constructor(private routes: ActivatedRoute, private router: Router, private fire: FireService) { }

  async ngOnInit(){
    this.locutor = this.routes.snapshot.paramMap.get('id');
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