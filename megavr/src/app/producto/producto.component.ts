import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let pc = document.getElementById('pc');

    pc?.setAttribute('gltf-model','../../assets/Shared/Notebook.glb');
    pc?.setAttribute('scale','0.022 0.022 0.022');
    pc?.setAttribute('position','49.2 -13.6 -7.9'); 
    pc?.setAttribute('rotation','0 -45.5 0'); 
  }
  

  goToUrl() {
    window.location.href = "https://tiendasishop.com/co/apple-macbook-pro-16-2019-touch-bar-intel-i9-de-2-3-ghz-ram-16gb-1tb-gris-espacial-mvvk2ea";
  }


}
