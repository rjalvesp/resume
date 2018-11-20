import { Component, OnInit } from '@angular/core';
import { Ramiro } from 'src/app/models/classes/ramiro.class';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  me = Ramiro;
  constructor() { }

  ngOnInit() {
  }

}
