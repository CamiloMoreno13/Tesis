import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FileLoader } from 'three';
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
  

  @ViewChild("valor" , {read: ElementRef}) valor!: ElementRef; 

  constructor(private real: RealService, private fire: FireService, private store: StorageService, private auth: AuthService) { }

  ngOnInit(): void {
    //this.real.realtime(); 
    //this.fire.agregar();
  }

  ngOnDestroy(): void{
    
  }

  prueba(){
    this.file = this.valor.nativeElement.files;
    console.log("file 2", this.file); 
    //this.store.img(this.file);
  }

  create(){
    this.real.createReal();
    //this.fire.createFire();
    /*this.file = this.valor.nativeElement.files; 
    this.store.createStore(this.file);*/
    //this.auth.create();
  }

  read(){
    this.real.readReal();
    //this.fire.readFire();
    /*
    var valor  = this.store.readStore(); 
    console.log("imagen" , valor);
    this.imagen = valor[0];*/
  }
  update(){
    //this.real.updateReal();
    this.fire.updateFire();
    //this.file = this.valor.nativeElement.files;
    //this.store.updateStore(this.file);
  }

  delete(){
    this.real.deleteReal();
    //this.fire.deleteFire();
    //this.store.deleteStore();
  }

}
