import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FireService } from 'src/app/Services/Firebase/firestore/fire.service';
import { StorageService } from 'src/app/Services/Firebase/storage/storage.service';

@Component({
  selector: 'app-perfil-admin',
  templateUrl: './perfil-admin.component.html',
  styleUrls: ['./perfil-admin.component.css']
})
export class PerfilAdminComponent implements OnInit {

  constructor(private fire: FireService, private storage : StorageService) { }
  
  @ViewChild("video" , {read: ElementRef}) video!: ElementRef; 
  
  
  public selectLocutores : any[] = [];
  public locutores: any[] = [];
  public locutor : any;  
  public indice : number = 0;
  public file : string = '';
  public file2 !: FileList;
  public mostrarSpinner : boolean = true;
  public mostrarLocutor : boolean = false;
  public videoTempo : boolean = false; 

  async ngOnInit(): Promise<void> {
    this.selectLocutores = await this.fire.getLocutoresAdmin();
    this.locutores = await this.fire.obtenerPerfiles();
    this.locutor = this.locutores[this.indice];
    this.mostrarSpinner = false;
    this.mostrarLocutor = true;
  }

  eleccion(){
    this.locutor = this.locutores[this.indice];
    (document.getElementById('videos')as HTMLInputElement).value = '';
    this.file2 = this.video.nativeElement.files;
    this.videoTempo = false;
  }

  async cargarVideo(){
    this.videoTempo = false;
    this.file = 'cargando';
    this.file2 = this.video.nativeElement.files;
    this.file = await this.storage.videoTemporal('perfiles', 'tempo' , this.file2);
    this.videoTempo = true;
  }

  update(){
    this.fire.updatePerfil('perfiles' , this.selectLocutores[this.indice],this.locutor, this.file2);
  }
}
