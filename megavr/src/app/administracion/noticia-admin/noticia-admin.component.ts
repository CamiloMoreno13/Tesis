import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FireService } from 'src/app/Services/Firebase/firestore/fire.service';
import { StorageService } from 'src/app/Services/Firebase/storage/storage.service';

@Component({
  selector: 'app-noticia-admin',
  templateUrl: './noticia-admin.component.html',
  styleUrls: ['./noticia-admin.component.css']
})
export class NoticiaAdminComponent implements OnInit {

  constructor(private fire: FireService, private storage: StorageService) { }

  @ViewChild("video", { read: ElementRef }) video!: ElementRef;
  @ViewChild("img", { read: ElementRef }) img!: ElementRef;

  public mostrarSpinner: boolean = true;
  public selectLocutores: any[] = [];
  public indice: number = 0;
  public indiceNoticia: number = 0;
  public locutores: any[] = [];
  public locutor: any;
  public noticias: any[] = [];
  public noticia: any;

  public fileVideo: string = '';
  public fileUpVideo !: FileList;
  public videoTempo: boolean = false;
  public showVideoTempo: boolean = true;

  public fileImg: string = '';
  public fileUpImg !: FileList;
  public imgTempo: boolean = false;
  public showImgTempo: boolean = true;

  async ngOnInit(): Promise<void> {
    this.selectLocutores = await this.fire.getLocutoresAdmin();
    this.locutores = await this.fire.obtenerPerfiles();
    this.noticias = this.locutores[this.indice].noticias;
    this.noticia = this.locutores[this.indice].noticias[this.indiceNoticia];

    this.mostrarSpinner = false;
  }

  eleccion(opcion: string) {
    if (opcion == 'locutor') {
      this.noticias = this.locutores[this.indice].noticias;
      this.noticia = this.noticias[0];
    }
    if (opcion == 'noticia') {
      this.noticia = this.noticias[this.indiceNoticia];
    }
    (document.getElementById('image') as HTMLInputElement).value = '';
    (document.getElementById('videos') as HTMLInputElement).value = '';
    this.fileUpImg = this.img.nativeElement.files;
    this.fileUpVideo = this.video.nativeElement.files;
    this.fileImg = '';
    this.fileVideo = '';
    this.imgTempo = false;
    this.videoTempo = false;
  }

  async cargarVideo() {
    this.videoTempo = false;
    this.fileVideo = 'cargando';
    this.fileUpVideo = this.video.nativeElement.files;
    var ext = this.fileUpImg.item(0)?.type.replace('video/', '');
    this.fileVideo = await this.storage.videoTemporal('noticias', 'tempo_video', this.fileUpVideo);
    this.videoTempo = true;
  }

  async cargarImagen() {
    this.imgTempo = false;
    this.fileImg = 'cargando';
    this.fileUpImg = this.img.nativeElement.files;
    var ext = this.fileUpImg.item(0)?.type.replace('image/', '');
    this.fileImg = await this.storage.videoTemporal('noticias', 'tempo_img', this.fileUpImg);
    this.imgTempo = true;
  }

  update() {
    this.fire.updateNoticia('noticias', this.selectLocutores[this.indice] ,this.locutores[this.indice], this.indiceNoticia, this.fileUpImg, this.fileUpVideo);
  }

}
