import React from "react";
import {observer} from "mobx-react";
import ToDoStore from "../stores/todoStore";

@observer
export default class ToDoItem extends React.Component {


    deleteTodo(e) {
        let index = e.target.parentNode.id;
        console.log("This is the index: ", index);
        ToDoStore.deleteTodo(index);
    }


    render() {
        return (
            <div id={this.props.index}>
                <button onClick={this.deleteTodo.bind(this)}>X</button>
                {this.props.task.title}
            </div>
        )
    }
}