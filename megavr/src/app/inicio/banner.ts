export class banner{
    public title: string;
    public subtitle : string;
    public imageT: string; 
    public imageS: string; 

    constructor(){
        this.title = "";
        this.subtitle = "";
        this.imageT = ""; 
        this.imageS = "";
    }

    createBanner (title: string, sub: string): banner{
        let nuevo = new banner();
        nuevo.title = title;
        nuevo.subtitle = sub; 
        nuevo.imageT = "../../assets/back.svg";
        return nuevo;
    }
}