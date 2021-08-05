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

    pc?.setAttribute('gltf-model','../../assets/laptop.glb');
    pc?.setAttribute('scale','3 3 3');
    pc?.setAttribute('position','-4.4 -1.3 -7.3'); 
    pc?.setAttribute('rotation',' 0 0 0'); 
  }
  

  goToUrl() {
    window.location.href = "https://tiendasishop.com/co/apple-macbook-pro-16-2019-touch-bar-intel-i9-de-2-3-ghz-ram-16gb-1tb-gris-espacial-mvvk2ea";
  }


}
