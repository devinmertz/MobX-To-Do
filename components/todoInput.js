import React from "react";
import {observer} from "mobx-react";
import ToDoStore from "../stores/todoStore";


@observer
export default class ToDoInput extends React.Component {

    addTask(e) {
        let value = e.target.value;
        if (e.which === 13 && value.length) {
            ToDoStore.addNewTodo(value);
            e.target.value = "";
        }
    }

    render() {
        return (
            <div style={{textAlign: "center"}}>
                <input onKeyUp={this.addTask.bind(this)} type="text" placeholder="Enter new to-do"/>
            </div>
        )
    }
}