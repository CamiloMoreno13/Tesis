import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  constructor(private storage: AngularFireStorage) { }
  public imagen: string[] = [];

  img(file: any) {
    this.storage.upload("OnBoarding/prueba2", file);
  }

  createStore(file: FileList) {
    this.storage.upload("OnBoarding/" + file.item(0)?.name, file.item(0));
  }

  async videoTemporal(path: string, locutor: string, file: FileList) {
    if(file != null || file != undefined || file != '')
    {
      if(file.item(0)?.type.search('image') == 0){ var ext = file.item(0)?.type.replace('image/' , '');} else { var ext = file.item(0)?.type.replace('video/' , ''); }
    }
    var url: any;
    if (file.length != 0) {
      url = await this.storage.upload(path + '/' + locutor+'.'+ext, file.item(0));
      return await url.ref.getDownloadURL();
    }
  }

  readStore() {// option 1 getValue list 
    var valor = this.storage.storage.ref('OnBoarding').listAll();
    console.log(valor);
    console.log("lsta", valor.then(res => {
      var valor2 = res.items[0];
      console.log("name", valor2.name);
      console.log("metadata", valor2.getMetadata());
      console.log("valor2", valor2.getDownloadURL().then(res1 => {
        console.log("URL ", res1)
        this.imagen.push(res1);
      }));
    }));
    //return this.imagen;
  }

  updateStore(file: FileList) {
    //problemas update img 
    this.storage.upload("OnBoarding/camera.png", file);
  }

  deleteStore() {
    this.storage.storage.ref('OnBoarding/camera.png').delete();
    this.storage.ref('OnBoarding').delete();
  }
}
