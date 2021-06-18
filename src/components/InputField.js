import './InputField.css';

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

    return (
        <input className='input-field' type="text" onKeyDown={handleKeyDown} placeholder='What needs to be done?' />
    );
}

export default InputField;
