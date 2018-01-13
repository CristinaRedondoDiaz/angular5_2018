import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() hijoNombre: string;
  @Output() emitNo: EventEmitter<string>;
  sNonbreElegido: string;
  constructor() {
    this.emitNo = new EventEmitter ();
  }

  ngOnInit() {
  }

  btnNoMeGusta() {
    this.emitNo.emit(this.sNonbreElegido);
  }
}
