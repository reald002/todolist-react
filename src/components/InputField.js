import {Component} from "react";
import './InputField.css';

class InputField extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }
    }

    handleInputChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            e.stopPropagation();
            this.props.onEnterClick(this.state.text);
            this.setState({
                text: '',
            });
        }
    }

    render() {
        return (
            <input className='input-field' type="text" onChange={this.handleInputChange} onKeyDown={this.handleKeyDown} placeholder='What needs to be done?' value={this.state.text} />
        );
    }
}

export default InputField;
