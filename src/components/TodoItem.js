import {Component} from "react";

class TodoItem extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
              <li className="todo-item">
                  <input className="checkbox" type="checkbox" id={this.props.id}/>
                  <label htmlFor={this.props.id} />

                  <span className="text">{this.props.text}</span>

                  <button className="removeTodoBtn" />
              </li>
        );
    }
}

export default TodoItem;
