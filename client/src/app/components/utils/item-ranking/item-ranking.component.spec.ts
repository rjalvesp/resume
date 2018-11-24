import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRankingComponent } from './item-ranking.component';

describe('ItemRankingComponent', () => {
  let component: ItemRankingComponent;
  let fixture: ComponentFixture<ItemRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
