import { Task } from '../classes/task.class';
export interface ITimelineItem {
    from    : string;
    to?     : string;
    job?    : string;
    company : string;
    charge  : string;
    tasks?  : Task[];
}