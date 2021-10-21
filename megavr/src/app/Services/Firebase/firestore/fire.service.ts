import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor(private fire: AngularFirestore) { }

  //Funciones 
  llenarInformacionOnboarding(){
    var respuesta = this.fire.collection('onboarding').get();
    return respuesta;
  }

  updateSlide(index: string,  slide: any) {
    this.fire.collection('onboarding').doc(index).update(slide);
  }

  llenarInfoPerfil(perfil: string){
    var respuesta = this.fire.collection('perfiles').doc(perfil).get();
    console.log("respuesta" , respuesta)
    return respuesta;
  }

  llenarInfoNoticias(locutor: string , noticia : string){
    var respuesta = this.fire.collection('noticia').doc(locutor).get();
    return respuesta;
  }

  llenarInfoAll(){
    var arreglo : any[]; 
    var valor = this.fire.collection('perfiles').get().toPromise();
    valor.then(res => {
      console.log("res docs" , res.docs.forEach((res2:any) => {
        console.log("red for  " , res2.data().nombre)
        sessionStorage.setItem(res2.data().nombre, JSON.stringify(res2.data()));
        
      }))
    })

    var persona = sessionStorage.getItem('Mateo'); 
    if(persona != null) var p1 = JSON.parse(persona);

    console.log("esta personas" , p1.nombre, p1.noticias )
    console.log("valor" , valor)
  }

  getLocutores(){
    var locutores : string[] = [] ; 
    this.fire.collection('perfiles').get().subscribe(x =>{ x.docs.forEach( y => { locutores.push(y.id); })});
    return locutores;
  }


  changes(){}

  // Funciones de prueba 
  agregar() {
    console.log("entro")
    let valor = this.fire.createId();
    this.fire.collection('valor').add({ name: "valor" });
    this.fire.collection('respirar').add({ name: "buena", apellido: "valor" });
    
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
