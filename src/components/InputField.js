import {Component} from "react";
import './InputField.css';

class InputField extends Component {
    constructor(props) {
        super(props);
    }

    handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            this.props.onEnterClick(e.target.value);
            e.target.value = '';
        }
    }

    render() {
        return (
            <input className='input-field' type="text" onKeyDown={this.handleKeyDown} placeholder='What needs to be done?' />
        );
    }
}

export default InputField;
