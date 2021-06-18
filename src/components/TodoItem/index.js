import './index.css';

function TodoItem(props) {
    const handleRemoveBtnClick = () => {
        props.onRemoveTodo(props.id);
    };

    const handleCheckboxClick = (e) => {
        props.onCheckboxClick(e.target.checked, props.id);
    };

    return (
        <li style={{ display: (props.filter === props.checked || props.filter === 'All') ? 'flex' : 'none' }}  className="todo-item">
            <input className="checkbox" onClick={handleCheckboxClick} type="checkbox" id={props.id}/>
            <label htmlFor={props.id} />
            <span className="text">{props.text}</span>
            <button className="remove-btn" onClick={handleRemoveBtnClick} >&#215;</button>
        </li>
    );
}

export default TodoItem;
