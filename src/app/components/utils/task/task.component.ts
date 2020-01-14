import { Task } from './../../../models/classes/task.class';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() value : Task;
  constructor() { }

  ngOnInit() {
  }

}
