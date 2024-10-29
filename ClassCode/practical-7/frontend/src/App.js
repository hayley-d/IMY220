import React from "react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    todoItems: [
      { title: "First todo", content: "This is the first todo" },
      { title: "Second todo", content: "This is the second todo" },
      { title: "Third todo", content: "This is the third todo" },
    ],
    todoCount: 3,
  };

  render() {
    return (
      <div className="container">
        <TodoInput
          props={{
            addTodo: (item) => {
              this.setState((prevState) => ({
                todoItems: [...prevState.todoItems, item],
                todoCount: prevState.todoCount + 1
              }));
            },
            todoCount: this.state.todoCount
          }}
        />
        <TodoList
          props={{
            items: this.state.todoItems,
            removeTodo: (index) => {
              this.setState((prevState) => ({
                todoItems: prevState.todoItems.filter((_, i) => i !== index),
                todoCount: prevState.todoCount - 1
              }));
            }
          }}
        />
      </div>
    );
  }
}

export default App;
