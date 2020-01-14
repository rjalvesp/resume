import { ItemRanking } from "./item-ranking.class";
import { ISkill } from "../interfaces/skill.interface";

export class Skill {
    title : string;
    values: ItemRanking[];
    constructor(json: ISkill){
        this.title  = json.title;
        this.values = json.values;
    }
}