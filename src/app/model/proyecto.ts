export class Proyecto {
    id?: number;
    nombre: string;
    linkproyecto: string;
    descripcion: string;
    img: string;

    constructor(nombre: string, linkproyecto: string, descripcion:string, img: string){
        this.nombre = nombre;   
        this.linkproyecto = linkproyecto;    
        this.descripcion = descripcion;
        this.img = img;
    }
}
