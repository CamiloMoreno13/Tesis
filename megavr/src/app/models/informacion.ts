import { Locutor } from './locutor';
import { Seccion } from './seccion';


export class Informacion {
    public locutores: Array<Locutor>;


    constructor() {
        var mateo: Locutor;
        var caro: Locutor;
        var shirry: Locutor;
        var carlos: Locutor;
        var dani: Locutor;

        var mateo_sec1: Seccion = new Seccion('Tecnologia', 'Tecnología', 'Nuevos gadgets tecnologicos', 'Tecnologias activas', '', '', 'tecnologia');
        var mateo_sec2: Seccion = new Seccion('Cine', 'Cine', 'La nueva pelicula de Tim Burton', 'Peliculas independientes', '', '', 'cine');
        var mateo_sec3: Seccion = new Seccion('Videojuegos', 'Videojuegos', 'CyberPunk afronta demandas', 'Juego en PS5', '', '', 'videojuegos');
        var mateo_sec4: Seccion = new Seccion('Televisión', 'Tecnología', 'Nuevos gadgets tecnologicos', 'Tecnologias activas', '', '', 'series');
        var mateo_sec5: Seccion = new Seccion('Farandula', 'Tecnología', 'Jessica Cediel nuevo cambio', 'Tema de opinión', '', '', 'farandula');

        var caro_sec1: Seccion = new Seccion('Las toxihistorias', 'Tecnología', 'Nuevos gadgets tecnologicos', 'Tecnologias activas', '', '', 'tema_semana');


        var array_name: Array<Seccion> = [mateo_sec1, mateo_sec2, mateo_sec3, mateo_sec4, mateo_sec5];
        mateo = new Locutor('Mateo', 'El cinefilo', '', '', '', 'mateo', array_name, '', '', '');
        caro = new Locutor('Mateo2', 'El cinefilo', '', '', '', 'caro', array_name, '', '', '');
        this.locutores = [ mateo, caro ];
    }

}