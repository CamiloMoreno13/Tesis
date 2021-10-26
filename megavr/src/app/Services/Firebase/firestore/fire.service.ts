import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Noticia } from 'src/app/models/noticia';

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

  async llenarInfoPerfil(perfil: string){
    var respuesta = await (await this.fire.collection('perfiles').doc(perfil.toLowerCase()).get().toPromise()).data();
    return respuesta; 
  }

  async llenarInfoNoticias(locutor: string , noticia : string){
    var noticias: any;
    var resp : any = await (await this.fire.collection('perfiles').doc(locutor.toLocaleLowerCase()).get().toPromise()).data();
    resp.noticias.forEach((y:any) => { 
      if(noticia == y.nombre){
        noticias = y;
      }
    })
    return noticias;
  }

  async obtenerPerfiles(){
    var perfiles : any[] = []; 
    (await this.fire.collection('perfiles').ref.get()).docs.forEach( (x:any) => { perfiles.push(x.data())});
    return perfiles;
  }

  getLocutores(){
    var locutores : {menuName : string, nombre : string}[] = [] ; 
    this.fire.collection('perfiles').get().subscribe(x =>{ x.docs.forEach( (y:any) => { locutores.push({menuName : y.data().menuName , nombre : y.data().nombre}); })});
    return locutores;
  }

  getNoticias(locutor: string){
    var noticias : Noticia[] = []; 
    this.fire.collection('perfiles').doc(locutor.toLocaleLowerCase()).get().subscribe( (x:any) => {x.data().noticias.forEach((y:any) => {
      var noticia = new Noticia; 
      noticia.nombre = y.nombre; 
      noticia.icono = y.icono;
      noticias.push(noticia);  
    })});
    return noticias; 
  }

  getLocutoresAdmin(){
    var locutores : any[] = []; 
    this.fire.collection('perfiles').get().subscribe(x => { x.docs.forEach( y => {locutores.push(y.id)})});
    return locutores;
  }

  updatePerfil(locutor: string, data: any){
    this.fire.collection('perfiles').doc(locutor).set(data);
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
