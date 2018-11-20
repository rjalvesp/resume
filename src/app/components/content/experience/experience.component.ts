import { Component, OnInit } from '@angular/core';
import { Ramiro } from '../../../models/classes/ramiro.class';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  me = Ramiro;
  constructor() { }

  ngOnInit() {
  }

}
