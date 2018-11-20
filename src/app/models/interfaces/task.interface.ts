import * as Moment from 'moment';
export interface ITask {
    from: Moment.Moment;
    to: Moment.Moment;
    description: string[];
    title: string;
}