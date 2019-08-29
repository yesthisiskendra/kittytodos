import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      todos: [
        "eat dry food",
        "eat wet food",
        "but mom",
        "taunt Pippin",
        "attack brothers"
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  addTodo(event) {
    let prev_todos = this.state.todos;
    let new_todos = prev_todos.concat(this.state.value);
    this.setState({ todos: new_todos, value: "" });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>My Todo List</h1>
        {this.state.todos.map(todo => (
          <ListItem item={todo} key={todo} />
        ))}

        <form onSubmit={this.addTodo}>
          <label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Add todo" />
        </form>
      </div>
    );
  }
}

export default List;
