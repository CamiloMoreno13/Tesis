import { Route } from '@angular/compiler/src/core';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.css']
})
export class PerfilesComponent implements OnInit {
  @ViewChild('videopls') videopls!: ElementRef;
  @ViewChild('videoi') videoi!: ElementRef;
  //volume : boolean = true;
  public parametro: string | null = "";
  public aviso: boolean = true;
  public perfil_caro : boolean = false;
  public perfil_mateo : boolean = false;
  public perfil_shirry : boolean = false;
  public perfil_carlos : boolean = false;
  public perfil_dani : boolean = false;

  constructor(private renderer2: Renderer2, private routes: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.parametro = this.routes.snapshot.paramMap.get('id');
    console.log(this.parametro);
    switch (this.parametro){
      case 'caro':
        this.perfil_caro = true;
        break;
      case 'mateo':
        this.perfil_mateo = true;
        break;
      case 'shirry':
        this.perfil_shirry = true;
        break;
      case 'carlos':
        this.perfil_carlos = true;
        break;
      case 'dani':
        this.perfil_dani = true;
        break;
    }
  }
  exit() {
    this.router.navigate(['/space']);
  }

  mute() {
    var b1 = this.videoi.nativeElement;
    if (this.videopls.nativeElement.muted) {

      this.videopls.nativeElement.muted = false;
      this.aviso = false;
    }
    else {
      this.videopls.nativeElement.muted = true;
      this.aviso = true;
    }
  }

  noticias(cadena:string) {
    this.router.navigate(['/perfiles/'+this.parametro+'/noticias',cadena]);
  }

}
