import { noticias } from "./noticias";

export class perfil {
    public menuName: string;
    public nombre: string;
    public noticias: noticias[];
    public ocupacion: string;
    public titulo: string;
    public video: string;

    constructor() {
        this.menuName = '';
        this.nombre = '';
        this.noticias = [];
        this.ocupacion = '';
        this.titulo = '';
        this.video = '';
    }
}
