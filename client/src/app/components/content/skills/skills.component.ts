import { Component, OnInit } from '@angular/core';
import { Ramiro } from 'src/app/models/classes/ramiro.class';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  me = Ramiro;
  constructor() { }

  ngOnInit() {
  }

}
