import { Ramiro } from './../../../models/classes/ramiro.class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brief',
  templateUrl: './brief.component.html',
  styleUrls: ['./brief.component.scss']
})
export class BriefComponent implements OnInit {

  me = Ramiro;
  constructor() { }

  ngOnInit() {
  }

}
