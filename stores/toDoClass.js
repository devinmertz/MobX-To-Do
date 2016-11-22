import {observable, action, computed} from "mobx";

export default class ToDo {
    @observable title;
    @observable completed;
    @observable isBeingEdited;

    /*
     *@param {string} task
     */
    constructor(task){
        this.title = task;
        this.completed = false;
        this.isBeingEdited = false;
    }


}