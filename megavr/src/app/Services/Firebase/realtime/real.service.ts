import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { HighlightSpanKind } from 'typescript';

@Injectable({
  providedIn: 'root'
})
export class RealService {
  
  private path: string = "/clic";
  item!: AngularFireList<string>;
  item2!: AngularFireList<string>;

  constructor(private real: AngularFireDatabase) { 
    this.item = real.list(this.path); // realtime 
  }

  createReal(path: string){
    
    this.item.push("1");
    this.item.push("1");
    //clic-ob
    //clic-space
    this.real.database.ref('pruebas').child('clic').push();
    this.real.list('p2').push("p2");
    /*
    console.log(this.item);
    const valor = {
      "name": "tris",
      "valor" : "que"
    };
    this.real.database.ref().child('clic2').push("prueba");*/
  }

  readReal(){
    //suscribirse a escuchar
     /*
    console.log(this.real.list('clic').snapshotChanges().subscribe(res => {
      console.log("res" , res);
    }));*/

    var valor = this.real.object('clic');
    console.log("valor" , valor.query.get().then(res =>{
      console.log("res" , res.exportVal());
      console.log("res2", res.key);
      console.log("res3", res.ref);
      console.log("res4", res.val());
      console.log("res5", res.numChildren());

    }));
  
  }


  updateReal(){
    // Cambiar el nombre de la lista
    //this.real.database.ref('clic').set("valor");
  }

  deleteReal(){
    this.real.database.ref('clic').remove();
  }
}
