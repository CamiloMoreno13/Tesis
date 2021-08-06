export class banner{
    public title: string;
    public subtitle : string;

    constructor(){
        this.title = "";
        this.subtitle = "";
    }

    createBanner (title: string, sub: string): banner{
        let nuevo = new banner();
        nuevo.title = title;
        nuevo.subtitle = sub; 
        return nuevo;
    }
}