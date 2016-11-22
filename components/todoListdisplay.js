import React from "react";
import {observer} from "mobx-react";
import ToDoStore from "../stores/todoStore";
import ToDoItem from "./todoItem"

@observer
export default class ToDoListDisplay extends React.Component {

    editTodo(e) {
        ToDoStore.editTodo(e.target.parentNode.id);
    }

    render() {
        let toDoList = ToDoStore.todos.map((task, index)=> {
            if (!task.isBeingEdited) {
                return (
                    <div id={index}>
                        <button onClick={this.editTodo.bind(this)}>Edit</button>
                        <ToDoItem key={index} index={index} task={task}/>
                    </div>
                );
            } else {
                return (
                    <span>
                       <button>Cancel</button>
                       <input type="text" default={task.title}/>
                   </span>
                )
            }
        });

        return (
            <div style={{textAlign: "center"}}>
                <h3>My To-dos:</h3>
                {toDoList}
            </div>
        )
    }
}