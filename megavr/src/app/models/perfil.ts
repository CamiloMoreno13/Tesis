export class Perfil {
    public icono: string;
    public video: string;
    public path_url: string;

    /*
    constructor() {
        this.icono = '';
        this.video = '';
        this.path_url = '';
    }*/

    constructor(icono: string, video: string, path_url:string) {
        this.icono = icono;
        this.video = video;
        this.path_url = path_url;
    }

}