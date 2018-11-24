import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/classes/menu-item.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [
    new MenuItem('aboutMe', 'about me', 'fas fa-at'),
    new MenuItem('summary', 'summary', 'fas fa-home'), 
    new MenuItem('skills', 'skills', 'fas fa-toolbox'),
    new MenuItem('workExperience', 'work experience', 'fas fa-building'),
    new MenuItem('education', 'education', 'fas fa-graduation-cap'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
