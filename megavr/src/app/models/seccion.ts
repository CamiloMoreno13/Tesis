export class Seccion {
    public id: string; // Identificador del nombre de la seccion 
    public titulo_seccion: string;
    public texto_destacado: string;
    public texto_complementario: string;
    public icono: string;
    public video: string;
    public path_url: string;

    constructor(id: string, titulo_seccion: string, texto_destacado: string, texto_complementario: string, 
        icono: string, video: string, path_url: string, ) {
        this.id = id;
        this.titulo_seccion = titulo_seccion;
        this.texto_destacado = texto_destacado;
        this.texto_complementario = texto_complementario;
        this.icono = icono;
        this.video = video;
        this.path_url = path_url;
    }

}