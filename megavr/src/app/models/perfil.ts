import { Noticia } from "./noticia";

export interface Perfil {
    nombre:    string;
    video:     string;
    noticias:  Noticia[];
    titulo:    string;
    ocupacion: string;
}