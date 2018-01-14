import { User } from './models';

export interface Contacto extends User  {
    // nombre: string;
    // apellido: string;
    // telefono: string;
    email: string;
    id: number;
}


/* export class ContactoModel implements Contacto {
    constructor (
    public id: number,
    public nombre: string,
    public apellido: string,
    public telefono: string,
    public email: string) {}
} */
