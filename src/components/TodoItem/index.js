import {Component} from "react";
import './index.css';

class TodoItem extends Component {
    constructor(props) {
        super(props);
    }
    handleRemoveBtnClick = () => {
        this.props.onRemoveTodo(this.props.id);
    };

    handleCheckboxClick = () => {
        this.props.onCheckboxClick(this.props.id);
    };

    render() {
        const isTodoCompleted = this.props.checked ? 'Completed' : 'Active';
        return ((this.props.filter === isTodoCompleted || this.props.filter === 'All') &&
                <li className="todo-item">
                    <input className="checkbox" checked={this.props.checked} onChange={this.handleCheckboxClick} type="checkbox" id={this.props.id}/>
                    <label htmlFor={this.props.id}/>
                    <span className="text">{this.props.text}</span>
                    <button className="remove-btn" onClick={this.handleRemoveBtnClick}>&#215;</button>
                </li>
        );
    }
}

export default TodoItem;
