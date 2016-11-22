import {observable, action, computed} from "mobx";
import ToDo from "./toDoClass";

class Store {

    @observable todos = [];


    /*
     * add a new task
     * @prop {String} task
     */
    @action addNewTodo(task) {
        let newTodo = new ToDo(task);
        this.todos.push(newTodo);
    }

    /*
     * deletes a task
     * @prop {Number} index
     */
    @action deleteTodo(index) {
        this.todos.splice(index, 1);
    }

    @action editTodo(index){
        this.todos[index].isBeingEdited = true;
    }

}

let ToDoStore = new Store();
export default ToDoStore;