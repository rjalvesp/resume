import { IItemRanking } from "../interfaces/item-ranking.interface";

export class ItemRanking {
    name: string;
    ranking: number;
    constructor(json: IItemRanking){
        this.name = json.name;
        this.ranking = json.ranking;
    }
}