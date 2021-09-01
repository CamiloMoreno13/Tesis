import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { HighlightSpanKind } from 'typescript';
import { ProductoService } from '../../Producto/producto.service';

@Injectable({
  providedIn: 'root'
})
export class RealService {
  
  private path: string = "/clic";
  item!: AngularFireList<string>;
  item2!: AngularFireList<string>;

  constructor(private real: AngularFireDatabase, private prueba: ProductoService) { 
    this.item = real.list(this.path); // realtime 
  }

  createReal(){
    /*
    this.real.database.ref('valor').child('path').get().then(res => {
      this.real.database.ref('valor').child('path').set(res.val()+1);
    });*/

    this.prueba.clic('logo');
    this.prueba.clic('texto');
    this.prueba.clic('icono');
    this.prueba.clic('pc');
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
