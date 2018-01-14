import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LibrosV5Service {
  sURL: string;

  constructor(public http: HttpClient) {
    this.sURL = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
    // this.sURL = 'http://www.googleapis.com/books/v1/volumes?q=intitle:';
  }

  buscar(clave: string) {
    const aLibros: Array<string>  = [];
    const url = this.sURL + clave;
    return this.http.get(url).toPromise()
    .then((response: any) => {
      response.items.forEach(
        element => { aLibros.push(element.volumeInfo.title); }
        );
      return aLibros;
    });
  }

  buscarRx (clave: string) {
    const url = this.sURL + clave;
    return this.http.get(url)
    .map(
      response => this.extractTitles(response)
    );
  }

  private extractTitles(response: any) {
    if (response.items) {
      return response.items.map(
        book => book.volumeInfo.title);
    } else {
      return response;
    }
  }
}



