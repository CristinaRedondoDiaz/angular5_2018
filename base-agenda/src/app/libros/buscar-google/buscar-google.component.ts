import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-buscar-google',
  templateUrl: './buscar-google.component.html',
  styleUrls: ['./buscar-google.component.css'],
})
export class BuscarGoogleComponent implements OnInit {

  sURL: string;
  aLibros: Array<string>;
  sClave: string;

  constructor(public http: Http,
              public httpClient: HttpClient) { }

  ngOnInit() {
    this.aLibros = [];
    this.sURL = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
  }

  btnBuscar() {
    this.aLibros = [];
    const url = this.sURL + this.sClave;
    this.http.get(url).toPromise()
    .then((response) => {
      response.json().items.forEach(
        element => {
          this.aLibros.push(element.volumeInfo.title);
        }
      );
    });
  }

  btnBuscarV5() {
    this.aLibros = [];
    const url = this.sURL + this.sClave;
    this.httpClient.get(url).toPromise()
    .then((response: any) => {
      console.log(response.items);
       response.items.forEach(
        element => {
          this.aLibros.push(element.volumeInfo.title);
        }
      );
    });
  }

/*   btnBuscarRes() {
    this.aLibros = [];
    const url = this.sURL + this.sClave;
    this.http.get(url).subscribe(
      (response) => {
      response.json().items.forEach(
        element => {
          this.aLibros.push(element.volumeInfo.title);
        }
      );
      }, // fin del mettodo onNext
      (error) => {
        console.error(error);
      } // fin del mettodo onNext
    );
  } */

/*   btnBuscarRxFull() {
    this.aLibros = [];
    const url = this.sURL + this.sClave;
    this.http.get(url)
    .map(response => response.json()) // el objeto de tipo ResponseData, incluido en el observable
                                      // se parsea gracias a su propio método json()
    .map(response => response.items)  // el contenido del observable se transforma en un array de items
    .map((response: Array<any>) => { // el array se transforma en un array de los datos realmente solicitados
      const aDatos: Array<string> = [];
      response.forEach(element => aDatos.push(element.volumeInfo.title) );
      return aDatos;
    })
    .subscribe((response) => { // se recibe la respuesta ya transformada
      this.aLibros = response;
    });
  } */

   btnBuscarResV5() {
    this.aLibros = [];
    const url = this.sURL + this.sClave;
    this.httpClient.get(url).subscribe((response: any) => {
        response.items.forEach(
        element => {
          this.aLibros.push(element.volumeInfo.title);
        }
      );
    });
  }

   btnBuscarRxFullV5() {
    this.aLibros = [];
    const url = this.sURL + this.sClave;
    this.httpClient.get(url)
      .map((response: any) => response.items)  // el contenido del observable se transforma en un array de items
      .map((response: Array<any>) => { // el array se transforma en un array de los datos realmente solicitados
        const aDatos: Array<string> = [];
        response.forEach(element => aDatos.push(element.volumeInfo.title) );
        return aDatos;
        }
      )
      .subscribe((response) => { // se recibe la respuesta ya transformada
        this.aLibros = response;
    });
  } 

}
