import { Seccion } from './seccion';
import { Perfil } from './perfil';

export class Locutor {
    public nombre: string;
    public ocupacion: string;
    public video_cabina: string;
    public titulo_cabina: string;
    public video_perfil: string;
    public path_url: string;
    public secciones: Array<Seccion>;
    public perfil: Perfil;

    constructor( nombre: string, ocupacion: string, video_cabina: string, titulo_cabina: string, video_perfil: string, path_url_locutor: string, secciones: Array<Seccion>,
        icono: string, video: string, path_url:string ) {
        this.nombre = nombre;
        this.ocupacion = ocupacion;
        this.video_cabina = video_cabina;
        this.titulo_cabina = titulo_cabina;
        this.video_perfil = video_perfil;
        this.path_url = path_url_locutor;
        this.secciones = secciones;
        this.perfil = new Perfil(icono, video, path_url);
    }

}