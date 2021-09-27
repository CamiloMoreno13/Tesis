import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor(private fire: AngularFirestore) { }

  agregar() {
    console.log("entro")
    let valor = this.fire.createId();
    this.fire.collection('valor').add({ name: "valor" });
    this.fire.collection('respirar').add({ name: "buena", apellido: "valor" });
    
  }

  createFire() {
    //no se crea si no es llave valor 
    this.fire.collection('prueba').doc('1').set({name: "valor"});
    this.fire.collection('nuevo').add({prueba: "valor"});
    this.fire.collection('nuevo2').doc('personas').set({nuevo2: "valor2"})
  }

  readFire() {
    var valor = this.fire.collection('prueba').doc('1').ref.get().then(res => {
      console.log(res.data());
      console.log(res.id);
      console.log(res.ref);
      console.log(res.metadata);
    });
  }

  updateFire() {
    this.fire.collection('prueba').doc('1').update({name: "camilo"});
  }

  deleteFire() {
    this.fire.collection('prueba').doc('1').delete();
  }
}
