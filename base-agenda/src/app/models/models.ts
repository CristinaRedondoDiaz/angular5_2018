export interface User {
    nombre: string;
    apellido: string;
    telefono: string;
}

export interface Printer {
    codigo: string | number;
    nombre: string;
}

export interface Departamento {
    codigo: string | number;
    nombre: string;
}

export class Impresion {
    constructor (
        public impresora: Printer,
        public isColor: boolean,
        public isClaro: boolean,
        public departamento: Departamento
    ) {}


}
