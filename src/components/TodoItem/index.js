import {Component} from "react";
import './index.css';

class TodoItem extends Component {
    constructor(props) {
        super(props);
    }
    handleRemoveBtnClick = () => {
        this.props.onRemoveTodo(this.props.id);
    };

    handleCheckboxClick = (e) => {
        this.props.onCheckboxClick(e.target.checked, this.props.id);
    };

    render() {
        return (
            <li style={{ display: (this.props.filter === this.props.checked || this.props.filter === 'All') ? 'flex' : 'none' }}  className="todo-item">
                <input className="checkbox" onClick={this.handleCheckboxClick} type="checkbox" id={this.props.id}/>
                <label htmlFor={this.props.id} />
                <span className="text">{this.props.text}</span>
                <button className="remove-btn" onClick={this.handleRemoveBtnClick} >&#215;</button>
            </li>
        );
    }
}

export default TodoItem;
