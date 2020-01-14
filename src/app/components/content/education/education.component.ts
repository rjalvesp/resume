import { Ramiro } from './../../../models/classes/ramiro.class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  me = Ramiro;
  constructor() { }

  ngOnInit() {
  }

}
