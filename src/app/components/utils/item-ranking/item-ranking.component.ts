import { Component, OnInit, Input } from '@angular/core';
import { ItemRanking } from 'src/app/models/classes/item-ranking.class';

@Component({
  selector: 'app-item-ranking',
  templateUrl: './item-ranking.component.html',
  styleUrls: ['./item-ranking.component.scss']
})
export class ItemRankingComponent implements OnInit {

  @Input() value : ItemRanking;
  constructor() { }

  ngOnInit() {
  }

}
