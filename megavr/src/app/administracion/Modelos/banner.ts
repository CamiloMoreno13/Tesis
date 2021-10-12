export class banner{
    public title: string;
    public subtitle : string;
    public imagenes : string[]; 

    constructor(){
        this.title = "";
        this.subtitle = "";
        this.imagenes = [];
    }

    createBanner (title: string, sub: string): banner{
        let nuevo = new banner();
        nuevo.title = title;
        nuevo.subtitle = sub; 
        return nuevo;
    }
}