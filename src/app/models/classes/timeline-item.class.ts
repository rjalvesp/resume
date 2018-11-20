import * as Moment from 'moment';
import { ITimelineItem } from '../interfaces/timeline-item.interface';
import { Task } from './task.class';
export class TimelineItem {
    from: Moment.Moment;
    to: Moment.Moment;
    job: string;
    company: string;
    charge: string;
    tasks: Task[];
    constructor(json: ITimelineItem){
        this.from = json.from;
        this.to = json.to;
        this.job = json.job;
        this.company = json.company;
        this.charge = json.charge;
        this.tasks = json.tasks
    }
}