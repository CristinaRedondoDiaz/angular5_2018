import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  sItem: string;
  sEtiquetaInput: string;
  sEtiquetaBtn: string;
  @Output() outAddTarea: EventEmitter<string>;

  constructor() {
    this.outAddTarea = new EventEmitter();
  }

  ngOnInit() {
    this.sEtiquetaInput = 'Escribe una tarea';
    this.sEtiquetaBtn = 'Añadir';
  }

  addItem() {
    this.outAddTarea.emit(this.sItem);
    this.sItem = '';
  }
}
