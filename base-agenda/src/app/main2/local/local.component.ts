import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

  @ViewChild('nombre') eNombre: any;

  // ElementRef;

  constructor() { }

  ngOnInit() {
    console.log(this.eNombre);
  }

}
