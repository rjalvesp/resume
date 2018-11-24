import { TimelineItem } from './../../../models/classes/timeline-item.class';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss']
})
export class TimelineItemComponent implements OnInit {
  @Input() value : TimelineItem;
  constructor() { }

  ngOnInit() {
  }

}
