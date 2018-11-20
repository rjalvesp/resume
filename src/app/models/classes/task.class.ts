import { ITask } from "../interfaces/task.interface";
import * as Moment from 'moment';

export class Task {
    from: Moment.Moment;
    to: Moment.Moment;
    description: string[];
    title: string;
    constructor(json: ITask){
        this.from = json.from;
        this.to = json.to;
        this.description = json.description;
        this.title = json.title;
    }
}