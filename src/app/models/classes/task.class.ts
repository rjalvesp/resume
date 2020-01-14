import { ITask } from "../interfaces/task.interface";

export class Task {
    from?       : string;
    to?         : string;
    description : string[];
    title?      : string;
    constructor(json: ITask){
        this.from        = json.from;
        this.to          = json.to;
        this.description = json.description;
        this.title       = json.title;
    }
}