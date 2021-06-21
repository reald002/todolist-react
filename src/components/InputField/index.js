import './index.css';

function InputField(props) {
    const handleKeyDown = (e) => {
        if(e.target.value === '') {
            return;
        }
        if(e.key === 'Enter') {
            props.onEnterClick(e.target.value);
            e.target.value = '';
        }
    }

    const handleToggleAllClick = () => {
        props.onToggleAllClick();
    }

    return (
        <div className="input-block">
            <button onClick={handleToggleAllClick} style={{ display: props.visible ? 'block' : 'none' }} className="toggle-all">❯</button>
            <input className="input-field" type="text" onKeyDown={handleKeyDown} placeholder="What needs to be done?" />
        </div>

    );
}

export default InputField;
