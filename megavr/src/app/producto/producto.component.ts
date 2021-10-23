import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../Services/Producto/producto.service';
import { AFrame } from 'aframe';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})


export class ProductoComponent implements OnInit {
  @ViewChild('item1') item1!: ElementRef;
  @ViewChild('item2') item2!: ElementRef;
  @ViewChild('item3') item3!: ElementRef;
  @ViewChild('item4') item4!: ElementRef;
  @ViewChild('item5') item5!: ElementRef;
  @ViewChild('menu-items') menu!: ElementRef;
  @ViewChild('camita') mover!: ElementRef;

  public bola: boolean = false;
  public inicio: boolean = false;
  public equis: boolean = true;
  public mostrar: boolean = false;
  public movimiento: boolean = false;

  constructor(
    private renderer2: Renderer2,
    private router: Router,
    private productoService: ProductoService
  ) { }




  ngOnInit(): void {
    let pc = document.getElementById('clic_pc');

    pc?.setAttribute('gltf-model', '../../assets/Shared/Notebook.glb');
    pc?.setAttribute('scale', '0.022 0.022 0.022');
    pc?.setAttribute('position', '49.2 -13.6 -7.9');
    pc?.setAttribute('rotation', '0 -45.5 0');
    /*let logo=document.getElementById('logo');
    logo?.setAttribute('src','../../assets/Productos/logo_ishop.svg')*/

    let retina = document.getElementById('retina');

    retina?.setAttribute('gltf-model', '../../assets/Shared/Notebook.glb');
    //retina?.setAttribute('scale', '0.020 0.020 0.020');
    //retina?.setAttribute('position', '12.13 -13.6 29.535');
    retina?.setAttribute('rotation', '0 -153.267 0');

    let banner_retina = document.getElementById('banner_retina');

    //banner_retina?.setAttribute('src', '../../assets/Productos/banner_retina.png');
    banner_retina?.setAttribute('scale', '2.3 0.7 0.6');
    banner_retina?.setAttribute('position', '2.29291 -0.16318 4.74821');
    banner_retina?.setAttribute('rotation', '0 210 0');
    //banner_retina?.setAttribute('material', 'transparent:true');

    let procesador = document.getElementById('procesador');

    procesador?.setAttribute(
      'gltf-model',
      '../../assets/Shared/Notebook.glb'
    );
    //procesador?.setAttribute('scale', '0.015 0.015 0.015');
    //procesadores?.setAttribute('position', '-25.3 -12.019 9.689');
    //procesadores?.setAttribute('rotation', '0 -153.267 0');
    document.querySelector('a-scene').addEventListener('loaded', () => {
      setTimeout(() => {
        this.mostrar = true;
      }, 1000);
    }); /* This is the key*/
  }

  ngAfterViewInit(): void {

    /* AFRAME.registerComponent('compila', {
       init: function () {
         let v = this.el;
         this.el.addEventListener('click', function () {
           console.log('clickcito');
           //v.setAttribute('rotation', '0 180 0');
           v?.setAttribute(
             'animation_scale',
             ' property: scale; dir: alternate; dur: 1000 ; easing: easeInSine; loop: true; to:0.025 0.025 0.025 ;  startEvents: click '
           );
         });
       },
     });*/

    /*AFRAME.registerComponent('attention', {
      init: function () {
        let v = this.el;

        v.addEventListener('loaded', function () {
        
        //v.emit('scale1');
       
        v.addEventListener('animationcomplete',function(e){
          //v.emit('scale2');
          console.log('pruebita de dios');
        } )
              
        });
      },
    });*/


    AFRAME.registerComponent('retina-manager', {
      init: function () {

        let retina = document.getElementById("retina")
        let playBtn = document.getElementById('banner_retina');
        let texto = document.getElementById('texto_retina');
        let rewindBtn = document.getElementById('close_retina');
        let ghost1 = document.getElementById('ghost1');
        let ghost2 = document.getElementById('ghost2');
        


        if (playBtn != null) {
          playBtn.addEventListener('click', (e) => {
            this.el.emit('second');
            this.el.emit('play-anim');
            if (playBtn != null && texto != null && ghost1 != null && ghost2 != null && rewindBtn != null) {
              playBtn.setAttribute('visible', "false");
              texto.setAttribute('visible', "false");
              ghost1.setAttribute('visible', "true");
              ghost2.setAttribute('visible', "true");
              rewindBtn.setAttribute('visible', "true");
            }
          });
        }


        if (retina != null) {
          retina.addEventListener('click', (e) => {
            this.el.emit('second');
            this.el.emit('play-anim');
            if (playBtn != null && texto != null && ghost1 != null && ghost2 != null && rewindBtn != null) {
              playBtn.setAttribute('visible', "false");
              texto.setAttribute('visible', "false");
              ghost1.setAttribute('visible', "true");
              ghost2.setAttribute('visible', "true");
              rewindBtn.setAttribute('visible', "true");
            }
          });
        }

        if (rewindBtn != null) {
          rewindBtn.addEventListener('click', (e) => {
            // set the current scale as the "starting point"



            this.el.setAttribute('animation__rewind', 'from', this.el.getAttribute('scale'))
            this.el.emit('pause-anim');
            this.el.emit('rewind-animRE');
            this.el.emit('rewind_moveRE');


            setTimeout(() => {
              if (playBtn != null && texto != null) {
                playBtn.setAttribute('visible', 'true');
                texto.setAttribute('visible', 'true');
              }

            }, 200);


          });
        }

        // RETINA OBJECT AND RETINA BANNER
        let banner_procesador = document.getElementById('banner_procesador')
        let procesador = document.getElementById('procesador')
        if (banner_procesador != null && procesador!=null) {

          banner_procesador.addEventListener('click', (e) => {

            this.el.emit('rewind-animRE');
            this.el.emit('rewind-moveRE');

            setTimeout(() => {
              if (playBtn != null) {
                playBtn.setAttribute('visible', 'true');
                //texto.setAttribute('visible', 'true');
              }

            }, 200);

          });

          procesador.addEventListener('click', (e) => {

            this.el.emit('rewind-animRE');
            this.el.emit('rewind-moveRE');

            setTimeout(() => {
              if (playBtn != null) {
                playBtn.setAttribute('visible', 'true');
                //texto.setAttribute('visible', 'true');
              }

            }, 200);

          });


        }


      },
    });




    AFRAME.registerComponent('procesador-manager', {
      init: function () {
        let cpu = document.getElementById("procesador")
        let playBtn = document.getElementById('banner_procesador');
        // let texto = document.getElementById('texto_retina');
        let rewindBtn = document.getElementById('close_procesador');
        let ghost1 = document.getElementById('ghost1_procesador');
        let ghost2 = document.getElementById('ghost2_procesador');

        if (playBtn != null) {
          playBtn.addEventListener('click', (e) => {
            this.el.emit('second');
            this.el.emit('play-anim');
            if (playBtn != null && ghost1 != null && ghost2 != null && rewindBtn != null) {
              playBtn.setAttribute('visible', "false");
              //texto.setAttribute('visible', "false");
              ghost1.setAttribute('visible', "true");
              ghost2.setAttribute('visible', "true");
              rewindBtn.setAttribute('visible', "true");
            }
          });
        }


        if (cpu != null) {
          cpu.addEventListener('click', (e) => {
            this.el.emit('second');
            this.el.emit('play-anim');
            if (playBtn != null && ghost1 != null && ghost2 != null && rewindBtn != null) {
              playBtn.setAttribute('visible', "false");
              //texto.setAttribute('visible', "false");
              ghost1.setAttribute('visible', "true");
              ghost2.setAttribute('visible', "true");
              rewindBtn.setAttribute('visible', "true");
            }
          });
        }

        if (rewindBtn != null) {
          rewindBtn.addEventListener('click', (e) => {
            // set the current scale as the "starting point"



            this.el.setAttribute('animation__rewind', 'from', this.el.getAttribute('scale'))
            this.el.emit('pause-anim');
            this.el.emit('rewind-animPR');
            this.el.emit('rewind-movePR');


            setTimeout(() => {
              if (playBtn != null) {
                playBtn.setAttribute('visible', 'true');
                //texto.setAttribute('visible', 'true');
              }

            }, 200);


          });
        }

        /* Other objects and elements that will hide the current object*/

        // RETINA OBJECT AND RETINA BANNER
        let banner_retina = document.getElementById('banner_retina')
        let retina = document.getElementById('retina')
        if (banner_retina != null && retina!=null) {

          banner_retina.addEventListener('click', (e) => {

            this.el.emit('rewind-animPR');
            this.el.emit('rewind-movePR');

            setTimeout(() => {
              if (playBtn != null) {
                playBtn.setAttribute('visible', 'true');
                //texto.setAttribute('visible', 'true');
              }

            }, 200);

          });

          retina.addEventListener('click', (e) => {

            this.el.emit('rewind-animPR');
            this.el.emit('rewind-movePR');

            setTimeout(() => {
              if (playBtn != null) {
                playBtn.setAttribute('visible', 'true');
                //texto.setAttribute('visible', 'true');
              }

            }, 200);

          });


        }

      },
    });



  }



  pop() {
    var b1 = this.item1.nativeElement;
    var b2 = this.item2.nativeElement;
    var b3 = this.item3.nativeElement;
    var b4 = this.item4.nativeElement;
    var b5 = this.item5.nativeElement;

    if (!this.bola) {
      this.renderer2.setStyle(b1, 'transform', 'translate(-140px,0px)');
      this.renderer2.setStyle(b2, 'transform', 'translate(-90px,-50px)');
      this.renderer2.setStyle(b3, 'transform', 'translateY(-90px)');
      this.renderer2.setStyle(b4, 'transform', 'translate(70px,-50px)');
      this.renderer2.setStyle(b5, 'transform', 'translate(140px,0px)');
      this.bola = true;
    } else {
      this.renderer2.setStyle(b1, 'transform', 'translate(0px)');
      this.renderer2.setStyle(b2, 'transform', 'translate(0px)');
      this.renderer2.setStyle(b3, 'transform', 'translate(0px)');
      this.renderer2.setStyle(b4, 'transform', 'translate(0px)');
      this.renderer2.setStyle(b5, 'transform', 'translate(0px)');
      this.bola = false;
    }
  }

  goToUrl(objeto: string) {
    this.productoService.clic(objeto);
    window.open('https://www.apple.com/macbook-pro-16/', '_blank');
  }

  exit() {
    this.router.navigate(['/space']);
  }

  goToAr(objeto: string) {
    this.productoService.clic(objeto);
    window.open(
      'https://www.vectary.com/viewer-ar/v1/?model=07041aab-469e-42a5-932b-9d9cdbb09dbd&allowScaling=',
      '_blank'
    );
  }

}
