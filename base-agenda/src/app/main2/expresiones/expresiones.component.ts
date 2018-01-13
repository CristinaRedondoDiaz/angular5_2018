import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-expresiones',
  templateUrl: './expresiones.component.html',
  styleUrls: ['./expresiones.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ExpresionesComponent implements OnInit {

  nNumber: number;
  sName: string;
  isSpanish: boolean;
  constructor() { }

  ngOnInit() {
    this.nNumber = 22;
    this.sName = 'Pepe';
  }

}
