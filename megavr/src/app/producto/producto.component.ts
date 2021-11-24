import { Component, ElementRef, OnInit, Renderer2, ViewChild, } from '@angular/core';
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
  
  public bola: boolean = false;
  public mostrar: boolean = false;
  public movimiento: boolean = false;
  public mostrarSpinner: boolean = true;
  public hide: boolean = false;

  constructor(
    private renderer2: Renderer2,
    private router: Router,
    private productoService: ProductoService
  ) { }


  async ngOnInit(): Promise<void> {

    await this.carga();
    setTimeout(() => {
      this.mostrarSpinner = false;
    }, 10000);
  }

  carga() {
    let pc = document.getElementById('clic_pc');
    pc?.setAttribute('gltf-model', '../../assets/Space/Notebook.glb');
    pc?.setAttribute('scale', '0.022 0.022 0.022');
    pc?.setAttribute('position', '49.2 -13.6 -7.9');
    pc?.setAttribute('rotation', '0 -45.5 0');
    /*let logo=document.getElementById('logo');
    logo?.setAttribute('src','../../assets/Productos/logo_ishop.svg')*/

    let retina = document.getElementById('retina');
    retina?.setAttribute('gltf-model', '../../assets/Productos/Notebook.glb'); // xbox.glb
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
      '../../assets/Productos/ram.glb'
    );
    //procesador?.setAttribute('scale', '0.015 0.015 0.015');
    //procesadores?.setAttribute('position', '-25.3 -12.019 9.689');
    //procesadores?.setAttribute('rotation', '0 -153.267 0');

    document.querySelector('a-scene').addEventListener('loaded', () => {
      setTimeout(() => {
        this.mostrar = true;
      }, 1000);
    }); /* This is the key

    /*document.addEventListener('DOMContentLoaded', (e) => {
      var scene = document.querySelector('a-scene');
      scene.addEventListener('loaded',  (e) => {
        console.log("AAAAAAAAAAAAAAAAAAAAAAA")
          this.mostrar=true;
      });
  });*/

    let bateria = document.getElementById('bateria');
    bateria?.setAttribute('gltf-model', '../../assets/Productos/bateria.glb');
    let teclado = document.getElementById('teclado');
    teclado?.setAttribute('gltf-model', '../../assets/Productos/teclado.glb');
  }


  ngAfterContentInit(): void {

    AFRAME.registerComponent('pc-manager', {
      init: function () {

        let pc = document.getElementById("clic_pc");
        let playBtn = document.getElementById('clic_icon');
        let texto = document.getElementById('clic_texto');
        let rewindBtn = document.getElementById('close_pc');
        let posinicial = this.el.getAttribute('position').x

        if (playBtn != null) {
          playBtn.addEventListener('click', (e) => {
            
            if (AFRAME.utils.device.isMobile() == true) {
              window.open(
                'https://www.vectary.com/viewer-ar/v1/?model=07041aab-469e-42a5-932b-9d9cdbb09dbd&allowScaling=',
                '_blank'
              );
            } else {
              this.el.emit('play-anim');
              this.el.emit('second'); 
            }
          });

        }

        if (pc != null) {
          pc.addEventListener('click', (e) => {
            if (AFRAME.utils.device.isMobile() == true) {
              window.open(
                'https://www.vectary.com/viewer-ar/v1/?model=07041aab-469e-42a5-932b-9d9cdbb09dbd&allowScaling=',
                '_blank'
              );
            } else {
              this.el.emit('play-anim');
              this.el.emit('second');
             
            }
          });
        }

        if (rewindBtn != null) {
          rewindBtn.addEventListener('click', (e) => {
            this.el.emit('pause-anim');
            this.el.emit('rewind-animPC');
            this.el.emit('rewind-movePC');
          });
        }
        // RETINA OBJECT AND RETINA BANNER
        console.log("Entro");
        let banner_retina = document.getElementById('banner_retina')
        let retina = document.getElementById('retina')
        if (banner_retina != null && retina != null) {
          banner_retina.addEventListener('click', (e) => {
              this.el.emit('rewind-animPC');
              this.el.emit('rewind-movePC');
              setTimeout(() => {
                if (playBtn != null) {
                  playBtn.setAttribute('visible', 'true');
                  //texto.setAttribute('visible', 'true');
                }
              }, 200);
          });

          retina.addEventListener('click', (e) => {
            this.el.emit('rewind-animPC');
            this.el.emit('rewind-movePC');
            setTimeout(() => {
              if (playBtn != null) {
                playBtn.setAttribute('visible', 'true');
                //texto.setAttribute('visible', 'true');
              }
            }, 200);
          });
        }
        // PROCESADOR OBJECT AND PROCESADOR BANNER
        let banner_procesador = document.getElementById('banner_procesador')
        let procesador = document.getElementById('procesador')
        if (banner_procesador != null && procesador != null) {
          banner_procesador.addEventListener('click', (e) => {
              this.el.emit('rewind-movePC');
              this.el.emit('rewind-animPC');
              setTimeout(() => {
                if (playBtn != null && texto != null) {
                  playBtn.setAttribute('visible', 'true');
                  texto.setAttribute('visible', 'true');
                }
              }, 200);
          })

          procesador.addEventListener('click', (e) => {
            this.el.emit('rewind-animPC');
            this.el.emit('rewind-movePC');
            setTimeout(() => {
              if (playBtn != null) {
                playBtn.setAttribute('visible', 'true');
                //texto.setAttribute('visible', 'true');
              }
            }, 200);
          });
        }

        // BATERIA OBJECT AND BATERIA BANNER
        let bateria = document.getElementById('bateria')
        let banner_bateria = document.getElementById('banner_bateria')
        if (banner_bateria != null && bateria != null) {
          banner_bateria.addEventListener('click', (e) => {
              this.el.emit('rewind-animPC');
              this.el.emit('rewind-movePC');

              setTimeout(() => {
                if (playBtn != null && texto != null) {
                  playBtn.setAttribute('visible', 'true');
                  texto.setAttribute('visible', 'true');
                }
              }, 200)
          });

          bateria.addEventListener('click', (e) => {
              this.el.emit('rewind-animPC');
              this.el.emit('rewind-movePC');
              setTimeout(() => {
                if (playBtn != null) {
                  playBtn.setAttribute('visible', 'true');
                  //texto.setAttribute('visible', 'true');
                }
              }, 200)
          });
        }

        // Teclado
        let teclado = document.getElementById('teclado')
        if (teclado != null) {
          teclado.addEventListener('click', (e) => {
            this.el.emit('rewind-animPC');
            this.el.emit('rewind-movePC');
            setTimeout(() => {
              if (playBtn != null && texto != null) {
                playBtn.setAttribute('visible', 'true');
                texto.setAttribute('visible', 'true');
              }
            }, 200);
          });
        }
      }
    });

    AFRAME.registerComponent('retina-manager-object', {
      init: function () {

        let retina = document.getElementById("retina")
        let playBtn = document.getElementById('banner_retina');
        let texto = document.getElementById('texto_retina');
        let rewindBtn = document.getElementById('close_retina');
        let posinicial = this.el.getAttribute('position').x

        if (playBtn != null) {
          playBtn.addEventListener('click', (e) => {
            this.el.emit('second');
            this.el.emit('play-anim-object');
            if (playBtn != null && texto != null && rewindBtn != null) {
              playBtn.setAttribute('visible', "false");
              texto.setAttribute('visible', "false");
            }
          });
        }

        if (retina != null) {
          retina.addEventListener('click', (e) => {
            this.el.emit('second');
            this.el.emit('play-anim-object');
            if (playBtn != null && texto != null && rewindBtn != null) {
              playBtn.setAttribute('visible', "false");
              texto.setAttribute('visible', "false");
            }
          });
        }

        if (rewindBtn != null) {
          rewindBtn.addEventListener('click', (e) => {
            this.el.emit('pause-anim');
            this.el.emit('rewind-animRE');
            this.el.emit('rewind-moveRE');
          });
        }

        // PROCESADOR OBJECT AND PROCESADOR BANNER
        let banner_procesador = document.getElementById('banner_procesador')
        let procesador = document.getElementById('procesador')
        if (banner_procesador != null && procesador != null) {
          banner_procesador.addEventListener('click', (e) => {
            let posactual = this.el.getAttribute('position').x;
            if (posactual != posinicial) {
              this.el.emit('rewind-moveRE');
              this.el.emit('rewind-animRE');
              setTimeout(() => {
                if (playBtn != null && texto != null) {
                  playBtn.setAttribute('visible', 'true');
                  texto.setAttribute('visible', 'true');
                }
              }, 200)
            }
            ;
          })

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

        // BATERIA OBJECT AND BATERIA BANNER
        let bateria = document.getElementById('bateria')
        let banner_bateria = document.getElementById('banner_bateria')
        if (banner_bateria != null && bateria != null) {
          banner_bateria.addEventListener('click', (e) => {
            let posactual = this.el.getAttribute('position').x;
            if (posactual != posinicial) {


              this.el.emit('rewind-animRE');
              this.el.emit('rewind-moveRE');

              setTimeout(() => {
                if (playBtn != null && texto != null) {
                  playBtn.setAttribute('visible', 'true');
                  texto.setAttribute('visible', 'true');
                }
              }, 200)
            }
          });

          bateria.addEventListener('click', (e) => {
            let posactual = this.el.getAttribute('position').x;
            if (posactual != posinicial) {
              this.el.emit('rewind-animRE');
              this.el.emit('rewind-moveRE');
              setTimeout(() => {
                if (playBtn != null) {
                  playBtn.setAttribute('visible', 'true');
                  //texto.setAttribute('visible', 'true');
                }
              }, 200)
            }
          });
        }

        // Teclado
        let teclado = document.getElementById('teclado')
        if (teclado != null) {
          teclado.addEventListener('click', (e) => {
            this.el.emit('rewind-animRE');
            this.el.emit('rewind-moveRE');
            setTimeout(() => {
              if (playBtn != null && texto != null) {
                playBtn.setAttribute('visible', 'true');
                texto.setAttribute('visible', 'true');
              }
            }, 200);
          });
        }

        //PC 

        let pc = document.getElementById('clic_pc')
        if (pc != null) {
          pc.addEventListener('click', (e) => {
            let posactual = this.el.getAttribute('position').x;
            if (posactual != posinicial) {
            this.el.emit('rewind-animRE');
            this.el.emit('rewind-moveRE');
            setTimeout(() => {
              if (playBtn != null && texto != null) {
                playBtn.setAttribute('visible', 'true');
                texto.setAttribute('visible', 'true');
              }
            }, 200);
          }
          });
        }
      }
    })

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
            setTimeout(() => {
              this.el.emit('second');
              this.el.emit('play-anim');
              if (playBtn != null && texto != null && ghost1 != null && ghost2 != null && rewindBtn != null) {
                playBtn.setAttribute('visible', "false");
                texto.setAttribute('visible', "false");
                ghost1.setAttribute('visible', "true");
                ghost2.setAttribute('visible', "true");
                rewindBtn.setAttribute('visible', "true");
              }
            }, 1500);
          });
        }

        if (retina != null) {
          retina.addEventListener('click', (e) => {
            setTimeout(() => {

              this.el.emit('second');
              this.el.emit('play-anim');
              if (playBtn != null && texto != null && ghost1 != null && ghost2 != null && rewindBtn != null) {
                playBtn.setAttribute('visible', "false");
                texto.setAttribute('visible', "false");
                ghost1.setAttribute('visible', "true");
                ghost2.setAttribute('visible', "true");
                rewindBtn.setAttribute('visible', "true");
              }
            }, 1000);
          });
        }

        if (rewindBtn != null) {
          rewindBtn.addEventListener('click', (e) => {
            this.el.emit('pause-anim');
            this.el.emit('rewind-animRE');
            this.el.emit('rewind-moveRE');

            setTimeout(() => {
              if (playBtn != null && texto != null) {
                playBtn.setAttribute('visible', 'true');
                texto.setAttribute('visible', 'true');
              }
            }, 200);
          });
        }

        // PROCESADOR OBJECT AND PROCESADOR BANNER
        let banner_procesador = document.getElementById('banner_procesador')
        let procesador = document.getElementById('procesador')
        if (banner_procesador != null && procesador != null) {
          banner_procesador.addEventListener('click', (e) => {
            this.el.emit('rewind-animRE');
            this.el.emit('rewind-moveRE');
            setTimeout(() => {
              if (playBtn != null && texto != null) {
                playBtn.setAttribute('visible', 'true');
                texto.setAttribute('visible', 'true');
              }
            }, 200);
          })

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

        // BATERIA OBJECT AND BATERIA BANNER
        let bateria = document.getElementById('bateria')
        let banner_bateria = document.getElementById('banner_bateria')
        if (banner_bateria != null && bateria != null) {
          banner_bateria.addEventListener('click', (e) => {
            this.el.emit('rewind-animRE');
            this.el.emit('rewind-moveRE');
            setTimeout(() => {
              if (playBtn != null && texto != null) {
                playBtn.setAttribute('visible', 'true');
                texto.setAttribute('visible', 'true');
              }
            }, 200);
          });

          bateria.addEventListener('click', (e) => {
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

        // Teclado
        let teclado = document.getElementById('teclado')
        if (teclado != null) {
          teclado.addEventListener('click', (e) => {
            this.el.emit('rewind-animRE');
            this.el.emit('rewind-moveRE');
            setTimeout(() => {
              if (playBtn != null && texto != null) {
                playBtn.setAttribute('visible', 'true');
                texto.setAttribute('visible', 'true');
              }
            }, 200);
          });
        }
// pc
        let pc = document.getElementById('clic_pc')
        if (pc != null) {
          pc.addEventListener('click', (e) => {
            this.el.emit('rewind-animRE');
            this.el.emit('rewind-moveRE');
            setTimeout(() => {
              if (playBtn != null && texto != null) {
                playBtn.setAttribute('visible', 'true');
                texto.setAttribute('visible', 'true');
              }
            }, 200);
          });
        }

      },
    });

    AFRAME.registerComponent('procesador-manager-object', {
      init: function () {

        let procesador = document.getElementById("procesador")
        let playBtn = document.getElementById('banner_procesador');
        let texto = document.getElementById('texto_procesador');
        let rewindBtn = document.getElementById('close_procesador');
        let posinicial = this.el.getAttribute('position').x

        if (playBtn != null) {
          playBtn.addEventListener('click', (e) => {
            this.el.emit('second');
            this.el.emit('play-anim-object');
            if (playBtn != null && texto != null && rewindBtn != null) {
              playBtn.setAttribute('visible', "false");
              texto.setAttribute('visible', "false");
            }
          });
        }

        if (procesador != null) {
          procesador.addEventListener('click', (e) => {
            this.el.emit('second');
            this.el.emit('play-anim-object');
            if (playBtn != null && texto != null && rewindBtn != null) {
              playBtn.setAttribute('visible', "false");
              texto.setAttribute('visible', "false");
            }
          });
        }

        if (rewindBtn != null) {
          rewindBtn.addEventListener('click', (e) => {
            this.el.emit('pause-anim');
            this.el.emit('rewind-animPR');
            this.el.emit('rewind-movePR');
          });
        }
        // RETINA OBJECT AND RETINA BANNER

        let banner_retina = document.getElementById('banner_retina')
        let retina = document.getElementById('retina')
        if (banner_retina != null && retina != null) {
          banner_retina.addEventListener('click', (e) => {
            let posactual = this.el.getAttribute('position').x;
            if (posactual != posinicial) {
              this.el.emit('rewind-animPR');
              this.el.emit('rewind-movePR');
              setTimeout(() => {
                if (playBtn != null && texto != null) {
                  playBtn.setAttribute('visible', 'true');
                  texto.setAttribute('visible', 'true');
                }
              }, 200)
            };
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

        // BATERIA OBJECT AND BATERIA BANNER
        let bateria = document.getElementById('bateria')
        let banner_bateria = document.getElementById('banner_bateria')
        if (banner_bateria != null && bateria != null) {
          banner_bateria.addEventListener('click', (e) => {
            let posactual = this.el.getAttribute('position').x;
            if (posactual != posinicial) {
              this.el.emit('rewind-animPR');
              this.el.emit('rewind-movePR');
              setTimeout(() => {
                if (playBtn != null && texto != null) {
                  playBtn.setAttribute('visible', 'true');
                  texto.setAttribute('visible', 'true');
                }
              }, 200)
            }
          });

          bateria.addEventListener('click', (e) => {
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


        // Teclado
        let teclado = document.getElementById('teclado')
        if (teclado != null) {
          teclado.addEventListener('click', (e) => {
            let posactual = this.el.getAttribute('position').x;
            if (posactual != posinicial) {
              this.el.emit('rewind-animPR');
              this.el.emit('rewind-movePR');
              setTimeout(() => {
                if (playBtn != null && texto != null) {
                  playBtn.setAttribute('visible', 'true');
                  texto.setAttribute('visible', 'true');
                }
              }, 200)
            }
          })
        }
         //PC 

         let pc = document.getElementById('clic_pc')
         if (pc != null) {
           pc.addEventListener('click', (e) => {
             this.el.emit('rewind-animPR');
             this.el.emit('rewind-movePR');
             setTimeout(() => {
               if (playBtn != null && texto != null) {
                 playBtn.setAttribute('visible', 'true');
                 texto.setAttribute('visible', 'true');
               }
             }, 200);
           });
         }

      }
    })



    AFRAME.registerComponent('procesador-manager', {
      init: function () {
        let cpu = document.getElementById("procesador")
        let playBtn = document.getElementById('banner_procesador');
        let texto = document.getElementById('texto_procesador');
        let rewindBtn = document.getElementById('close_procesador');
        let ghost1 = document.getElementById('ghost1_procesador');
        let ghost2 = document.getElementById('ghost2_procesador');

        if (playBtn != null) {
          playBtn.addEventListener('click', (e) => {
            setTimeout(() => {
              this.el.emit('second');
              this.el.emit('play-anim');
              if (playBtn != null && texto != null && ghost1 != null && ghost2 != null && rewindBtn != null) {
                playBtn.setAttribute('visible', "false");
                texto.setAttribute('visible', "false");
                ghost1.setAttribute('visible', "true");
                ghost2.setAttribute('visible', "true");
                rewindBtn.setAttribute('visible', "true");
              }
            }, 1500)
          });
        }


        if (cpu != null) {
          cpu.addEventListener('click', (e) => {
            setTimeout(() => {

              this.el.emit('second');
              this.el.emit('play-anim');
              if (playBtn != null && texto != null && ghost1 != null && ghost2 != null && rewindBtn != null) {
                playBtn.setAttribute('visible', "false");
                texto.setAttribute('visible', "false");
                ghost1.setAttribute('visible', "true");
                ghost2.setAttribute('visible', "true");
                rewindBtn.setAttribute('visible', "true");
              }
            }, 1500);
          });
        }

        if (rewindBtn != null) {
          rewindBtn.addEventListener('click', (e) => {
            // set the current scale as the "starting point"
            //this.el.setAttribute('animation__rewind', 'from', this.el.getAttribute('scale'))
            this.el.emit('pause-anim');
            this.el.emit('rewind-animPR');
            this.el.emit('rewind-movePR');

            setTimeout(() => {
              if (playBtn != null && texto != null) {
                playBtn.setAttribute('visible', 'true');
                texto.setAttribute('visible', 'true');
              }
            }, 200);
          });
        }

        /* Other objects and elements that will hide the current object*/

        // RETINA OBJECT AND RETINA BANNER
        let banner_retina = document.getElementById('banner_retina')
        let retina = document.getElementById('retina')
        if (banner_retina != null && retina != null) {
          banner_retina.addEventListener('click', (e) => {
            this.el.emit('rewind-animPR');
            this.el.emit('rewind-movePR');
            setTimeout(() => {
              if (playBtn != null && texto != null) {
                playBtn.setAttribute('visible', 'true');
                texto.setAttribute('visible', 'true');
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
        // BATERIA OBJECT AND BATERIA BANNER
        let bateria = document.getElementById('bateria')
        let banner_bateria = document.getElementById('banner_bateria')
        if (banner_bateria != null && bateria != null) {
          banner_bateria.addEventListener('click', (e) => {
            this.el.emit('rewind-animPR');
            this.el.emit('rewind-movePR');
            setTimeout(() => {
              if (playBtn != null && texto != null) {
                playBtn.setAttribute('visible', 'true');
                texto.setAttribute('visible', 'true');
              }
            }, 200);
          });

          bateria.addEventListener('click', (e) => {
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

        // Teclado
        let teclado = document.getElementById('teclado')
        if (teclado != null) {
          teclado.addEventListener('click', (e) => {
            this.el.emit('rewind-animPR');
            this.el.emit('rewind-movePR');
            setTimeout(() => {
              if (playBtn != null && texto != null) {
                playBtn.setAttribute('visible', 'true');
                texto.setAttribute('visible', 'true');
              }
            }, 200)

          })
        }

        // pc
        let pc = document.getElementById('clic_pc')
        if (pc != null) {
          pc.addEventListener('click', (e) => {
            this.el.emit('rewind-animPR');
            this.el.emit('rewind-movePR');
            setTimeout(() => {
              if (playBtn != null && texto != null) {
                playBtn.setAttribute('visible', 'true');
                texto.setAttribute('visible', 'true');
              }
            }, 200);
          });
        }

         },
    });

    AFRAME.registerComponent('bateria-manager-object', {
      init: function () {

        let bateria = document.getElementById("bateria")
        let playBtn = document.getElementById("banner_bateria");
        let texto = document.getElementById('texto_bateria');
        let rewindBtn = document.getElementById('close_bateria');
        let posinicial = this.el.getAttribute('position').x

        if (playBtn != null) {
          playBtn.addEventListener('click', (e) => {
            this.el.emit('second');
            this.el.emit('play-anim-object');
            if (playBtn != null && texto != null && rewindBtn != null) {
              playBtn.setAttribute('visible', "false");
              texto.setAttribute('visible', "false");
            }
          });
        }

        if (bateria != null) {
          bateria.addEventListener('click', (e) => {
            this.el.emit('second');
            this.el.emit('play-anim-object');
            if (playBtn != null && texto != null && rewindBtn != null) {
              playBtn.setAttribute('visible', "false");
              texto.setAttribute('visible', "false");
            }
          });
        }

        if (rewindBtn != null) {
          rewindBtn.addEventListener('click', (e) => {
            this.el.emit('pause-anim');
            this.el.emit('rewind-animBA');
            this.el.emit('rewind-moveBA');
          });
        }

        // RETINA OBJECT AND RETINA BANNER
        let banner_retina = document.getElementById('banner_retina')
        let retina = document.getElementById('retina')
        if (banner_retina != null && retina != null) {
          banner_retina.addEventListener('click', (e) => {
            let posactual = this.el.getAttribute('position').x;
            if (posactual != posinicial) {
              this.el.emit('rewind-animBA');
              this.el.emit('rewind-moveBA');
              setTimeout(() => {
                if (playBtn != null && texto != null) {
                  playBtn.setAttribute('visible', 'true');
                  texto.setAttribute('visible', 'true');
                }
              }, 200)
            }
          });
          retina.addEventListener('click', (e) => {
            this.el.emit('rewind-animBA');
            this.el.emit('rewind-moveBA');
            setTimeout(() => {
              if (playBtn != null) {
                playBtn.setAttribute('visible', 'true');
                //texto.setAttribute('visible', 'true');
              }
            }, 200)
          });
        }

        // PROCESADOR OBJECT AND PROCESADOR BANNER
        let banner_procesador = document.getElementById('banner_procesador')
        let procesador = document.getElementById('procesador')
        if (banner_procesador != null && procesador != null) {
          banner_procesador.addEventListener('click', (e) => {
            let posactual = this.el.getAttribute('position').x;
            if (posactual != posinicial) {
              this.el.emit('rewind-animBA');
              this.el.emit('rewind-moveBA');
              setTimeout(() => {
                if (playBtn != null && texto != null) {
                  playBtn.setAttribute('visible', 'true');
                  texto.setAttribute('visible', 'true');
                }
              }, 200)
            }
          })

          procesador.addEventListener('click', (e) => {
            this.el.emit('rewind-animBA');
            this.el.emit('rewind-moveBA');

            setTimeout(() => {
              if (playBtn != null) {
                playBtn.setAttribute('visible', 'true');
                //texto.setAttribute('visible', 'true');
              }
            }, 200);
          });
        }

        // Teclado
        let teclado = document.getElementById('teclado')
        if (teclado != null) {
          teclado.addEventListener('click', (e) => {
            let posactual = this.el.getAttribute('position').x;
            if (posactual != posinicial) {
              this.el.emit('rewind-animBA');
              this.el.emit('rewind-moveBA');
              setTimeout(() => {
                if (playBtn != null && texto != null) {
                  playBtn.setAttribute('visible', 'true');
                  texto.setAttribute('visible', 'true');
                }
              }, 200)
            }
          })
        }

         //PC 

        let pc = document.getElementById('clic_pc')
        if (pc != null) {
          pc.addEventListener('click', (e) => {
            let posactual = this.el.getAttribute('position').x;
            if (posactual != posinicial) {
              this.el.emit('rewind-animBA');
              this.el.emit('rewind-moveBA');
              setTimeout(() => {
                if (playBtn != null && texto != null) {
                  playBtn.setAttribute('visible', 'true');
                  texto.setAttribute('visible', 'true');
                }
              }, 200)
            }
          })



      }
    }
    })
    AFRAME.registerComponent('bateria-manager', {
      init: function () {
        let bateria = document.getElementById("bateria")
        let playBtn = document.getElementById('banner_bateria');
        let texto = document.getElementById('texto_bateria');
        let rewindBtn = document.getElementById('close_bateria');
        let ghost1 = document.getElementById('ghost1_bateria');

        if (playBtn != null) {
          playBtn.addEventListener('click', (e) => {
            setTimeout(() => {
              this.el.emit('second');
              this.el.emit('play-anim');
              if (playBtn != null && texto != null && ghost1 != null && rewindBtn != null) {
                playBtn.setAttribute('visible', "false");
                texto.setAttribute('visible', "false");
                ghost1.setAttribute('visible', "true");
                rewindBtn.setAttribute('visible', "true");
              }
            }, 1500)
          });
        }
        if (bateria != null) {
          bateria.addEventListener('click', (e) => {
            setTimeout(() => {
              this.el.emit('second');
              this.el.emit('play-anim');
              if (playBtn != null && texto != null && ghost1 != null && rewindBtn != null) {
                playBtn.setAttribute('visible', "false");
                texto.setAttribute('visible', "false");
                ghost1.setAttribute('visible', "true");
                rewindBtn.setAttribute('visible', "true");
              }
            }, 1500);
          });
        }

        if (rewindBtn != null) {
          rewindBtn.addEventListener('click', (e) => {
            // set the current scale as the "starting point"

            //this.el.setAttribute('animation__rewind', 'from', this.el.getAttribute('scale'))
            this.el.emit('pause-anim');
            this.el.emit('rewind-animBA');
            this.el.emit('rewind-moveBA');


            setTimeout(() => {
              if (playBtn != null && texto != null) {
                playBtn.setAttribute('visible', 'true');
                texto.setAttribute('visible', 'true');
              }
            }, 200);
          });
        }

        /* Other objects and elements that will hide the current object*/

        // RETINA OBJECT AND RETINA BANNER
        let banner_retina = document.getElementById('banner_retina')
        let retina = document.getElementById('retina')
        if (banner_retina != null && retina != null) {
          banner_retina.addEventListener('click', (e) => {
            this.el.emit('rewind-animBA');
            this.el.emit('rewind-moveBA');
            setTimeout(() => {
              if (playBtn != null && texto != null) {
                playBtn.setAttribute('visible', 'true');
                texto.setAttribute('visible', 'true');
              }
            }, 200);
          });
          retina.addEventListener('click', (e) => {
            this.el.emit('rewind-animBA');
            this.el.emit('rewind-moveBA');
            setTimeout(() => {
              if (playBtn != null) {
                playBtn.setAttribute('visible', 'true');
                //texto.setAttribute('visible', 'true');
              }
            }, 200)
          });
        }

        // PROCESADOR OBJECT AND PROCESADOR BANNER
        let banner_procesador = document.getElementById('banner_procesador')
        let procesador = document.getElementById('procesador')
        if (banner_procesador != null && procesador != null) {
          banner_procesador.addEventListener('click', (e) => {
            this.el.emit('rewind-animBA');
            this.el.emit('rewind-moveBA');
            setTimeout(() => {
              if (playBtn != null && texto != null) {
                playBtn.setAttribute('visible', 'true');
                texto.setAttribute('visible', 'true');
              }
            }, 200);
          })

          procesador.addEventListener('click', (e) => {
            this.el.emit('rewind-animBA');
            this.el.emit('rewind-moveBA');

            setTimeout(() => {
              if (playBtn != null) {
                playBtn.setAttribute('visible', 'true');
                //texto.setAttribute('visible', 'true');
              }
            }, 200);
          });
        }

        // Teclado
        let teclado = document.getElementById('teclado')
        if (teclado != null) {
          teclado.addEventListener('click', (e) => {
            this.el.emit('rewind-animBA');
            this.el.emit('rewind-moveBA');
            setTimeout(() => {
              if (playBtn != null && texto != null) {
                playBtn.setAttribute('visible', 'true');
                texto.setAttribute('visible', 'true');
              }
            }, 200)

          })
        }
         //PC 

         let pc = document.getElementById('clic_pc')
         if (pc != null) {
           pc.addEventListener('click', (e) => {
             this.el.emit('rewind-animBA');
             this.el.emit('rewind-moveBA');
             setTimeout(() => {
               if (playBtn != null && texto != null) {
                 playBtn.setAttribute('visible', 'true');
                 texto.setAttribute('visible', 'true');
               }
             }, 200);
           });
         }
      },
    });


    AFRAME.registerComponent('teclado-manager', {
      init: function () {

        let teclado = document.getElementById("teclado");
        let playBtn = document.getElementById('banner_teclado');
        let texto = document.getElementById('texto_teclado');
        let rewindBtn = document.getElementById('close_teclado');
        let posinicial = this.el.getAttribute('position').x

        if (teclado != null) {
          teclado.addEventListener('click', (e) => {
            this.el.emit('second');
            this.el.emit('play-anim')
            playBtn?.setAttribute('visible', "false");
            teclado?.setAttribute('visible', 'false');
            texto?.setAttribute('visible', 'false');
          });
        }

        if (rewindBtn != null) {
          rewindBtn.addEventListener('click', (e) => {
            this.el.emit('pause-anim');
            this.el.emit('rewind-animTE');
            this.el.emit('rewind-moveTE');
            setTimeout(() => {
              teclado?.setAttribute('visible', 'true');
              playBtn?.setAttribute('visible', "true");
              texto?.setAttribute('visible', 'true')
            }, 1150);

          });
        }

        // RETINA OBJECT AND RETINA BANNER

        let banner_retina = document.getElementById('banner_retina')
        let retina = document.getElementById('retina')
        if (banner_retina != null && retina != null) {
          banner_retina.addEventListener('click', (e) => {
            let posactual = this.el.getAttribute('position').x;
            if (posactual != posinicial) {
              this.el.emit('rewind-animTE');
              this.el.emit('rewind-moveTE');
              setTimeout(() => {
                playBtn?.setAttribute('visible', "true");
                teclado?.setAttribute('visible', 'true');
                texto?.setAttribute('visible', 'true');
              }, 1150);
            };
          });

          retina.addEventListener('click', (e) => {
            this.el.emit('rewind-animTE');
            this.el.emit('rewind-moveTE');
            setTimeout(() => {
              playBtn?.setAttribute('visible', "true");
              teclado?.setAttribute('visible', 'true');
              texto?.setAttribute('visible', 'true');
            }, 1150);
          });
        }

        // PROCESADOR OBJECT AND PROCESADOR BANNER
        let banner_procesador = document.getElementById('banner_procesador')
        let procesador = document.getElementById('procesador')
        if (banner_procesador != null && procesador != null) {
          banner_procesador.addEventListener('click', (e) => {
            let posactual = this.el.getAttribute('position').x;
            if (posactual != posinicial) {
              this.el.emit('rewind-moveTE');
              this.el.emit('rewind-animTE');
              setTimeout(() => {
                playBtn?.setAttribute('visible', "true");
                teclado?.setAttribute('visible', 'true');
                texto?.setAttribute('visible', 'true');
              }, 1150);
            }
            ;
          })

          procesador.addEventListener('click', (e) => {
            this.el.emit('rewind-animTE');
            this.el.emit('rewind-moveTE');
            setTimeout(() => {
              teclado?.setAttribute('visible', 'true');
              playBtn?.setAttribute('visible', "true");
              texto?.setAttribute('visible', 'true');
            }, 1150);
          });
        }

        // BATERIA OBJECT AND BATERIA BANNER
        let bateria = document.getElementById('bateria')
        let banner_bateria = document.getElementById('banner_bateria')
        if (banner_bateria != null && bateria != null) {
          banner_bateria.addEventListener('click', (e) => {
            let posactual = this.el.getAttribute('position').x;
            if (posactual != posinicial) {
              this.el.emit('rewind-animTE');
              this.el.emit('rewind-moveTE');
              setTimeout(() => {
                playBtn?.setAttribute('visible', "true");
                teclado?.setAttribute('visible', 'true');
                texto?.setAttribute('visible', 'true');
              }, 1150);
            }
          });

          bateria.addEventListener('click', (e) => {
            this.el.emit('rewind-animTE');
            this.el.emit('rewind-moveTE');
            setTimeout(() => {
              playBtn?.setAttribute('visible', "true");
              teclado?.setAttribute('visible', 'true');
              texto?.setAttribute('visible', 'true');
            }, 1150);
          });

        }
         //PC 

         let pc = document.getElementById('clic_pc')
         if (pc != null) {
           pc.addEventListener('click', (e) => {
             this.el.emit('rewind-animTE');
             this.el.emit('rewind-moveTE');
             setTimeout(() => {
              teclado?.setAttribute('visible','true');
              playBtn?.setAttribute('visible', "true");
              texto?.setAttribute('visible', 'true');
             }, 1150);
           });
         }



      }
    })


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

  esconder() {
    this.hide = false;
  }

  esconderObj() {
    if (this.hide == false) {
      this.hide = true;
    }

  }

  goToAr(objeto: string) {
    this.productoService.clic(objeto);
    window.open(
      'https://www.vectary.com/viewer-ar/v1/?model=07041aab-469e-42a5-932b-9d9cdbb09dbd&allowScaling=',
      '_blank'
    );
  }

}
