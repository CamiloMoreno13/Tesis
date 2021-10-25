import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarScriptsService {
  
private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2){
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  Carga(archivos:string[]){
    for(let archivo of archivos){
      let script=this.renderer.createElement('script');
      script.src="./assets/js/"+archivo+".js";
      let body=document.getElementsByTagName("body")[0];
      body.appendChild(script);
    }
  }
}
