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

  async llenarInformacion(){
    var respuesta = await this.fire.collection('onboarding').get();
    return respuesta;
  }

  createFire(collection : string, dato : any) {
    var nroSlider;
    this.fire.collection('onboarding').get().subscribe(res => {
      nroSlider = res.docs.length+1;
      this.fire.collection(collection).doc(""+nroSlider).set(dato);
    });
  }

  readFire() {
    
    /*
    var valor = this.fire.collection('prueba').doc('1').ref.get().then(res => {
      console.log("data" , res.data());
      console.log("id" , res.id);
      console.log("ref" , res.ref);
    });*/
  }

  updateFire() {
    this.fire.collection('prueba').doc('1').update({name: "camilo"});
  }

  deleteFire() {
    this.fire.collection('prueba').doc('1').delete();
  }
}
