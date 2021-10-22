import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbButtonLabel } from '@ng-bootstrap/ng-bootstrap';
import { FileLoader } from 'three';
import { Noticia } from '../models/noticia';
import { Perfil } from '../models/perfil';
import { AuthService } from '../Services/Firebase/authentication/auth.service';
import { FireService } from '../Services/Firebase/firestore/fire.service';
import { RealService } from '../Services/Firebase/realtime/real.service';
import { StorageService } from '../Services/Firebase/storage/storage.service';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {
  public file!: FileList ; 
  public imagen : string = "";
  public texto: string = "Pruebas";
  

  @ViewChild("valor" , {read: ElementRef}) valor!: ElementRef; 
  parametro: string | null | undefined;

  
  public perfil !: Perfil;
  public listNoticias !: Noticia[]; 

  constructor(private real: RealService, private fire: FireService, private store: StorageService, private auth: AuthService, private renderer2: Renderer2, private routes: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    this.parametro = this.routes.snapshot.paramMap.get('id');

  }

  p1(){
    this.texto = "entro al evento"; 
  }
  
  prueba(){
    this.file = this.valor.nativeElement.files;
    console.log("file 2", this.file,this.file[0]); 
    //this.store.img(this.file);
  }

  create(){
    //this.real.createReal();
    //this.fire.createFire();
    this.file = this.valor.nativeElement.files; 
    //this.store.createStore(this.file);
    //this.auth.create();
  }

  read(){
    //this.real.readReal();
    //this.fire.readFire();
    var valor  = this.store.readStore(); 
    //console.log("imagen" , valor);
    //this.imagen = valor[0];
  }
  update(){
    //this.real.updateReal();
    //this.fire.updateFire();
    //this.file = this.valor.nativeElement.files;
    //this.store.updateStore(this.file);
  }

  delete(){
    //this.real.deleteReal();
    //this.fire.deleteFire();
    //this.store.deleteStore();
  }
}
