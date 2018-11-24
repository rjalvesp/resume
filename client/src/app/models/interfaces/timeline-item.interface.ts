import * as Moment from 'moment';
import { Task } from '../classes/task.class';
export interface ITimelineItem {
    from: Moment.Moment;
    to: Moment.Moment;
    job: string;
    company: string;
    charge: string;
    tasks: Task[];
}