import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.removeItem = this.removeItem.bind(this);
    }

    removeItem(index){
        this.props.props.removeTodo(index);
    }

    render() {
        return (
            <div>
                {this.props.props.items ? (this.props.props.items.map((todo, index) => {
                    return <TodoItem key={index} item={todo} delete={() => {this.removeItem(index)}} />
                })) : null}
                
            </div>
        )
    }

}

export default TodoList;
