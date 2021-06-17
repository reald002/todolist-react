import {Component} from "react";
import './TodoItem.css';

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

                  <button className="remove-btn" >&#215;</button>
              </li>
        );
    }
}

export default TodoItem;
