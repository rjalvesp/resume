import { IMenuItem } from "../interfaces/menu-item.interface";

export class MenuItem {
    private _name: string;
    private _id: string;
    private _icon: string;

    public get id() : string { return `#${this._id}`; }
    public get icon() : string { return this._icon; }
    public get name() : string { return this._name; }    
    public get json() : IMenuItem { return { id: this.id, name: this.name } }

    constructor(id: string, name: string, icon: string){
        this._id = id;
        this._name = name;
        this._icon = icon;
    }
}