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
        e.preventDefault();
        if(e.key === 'Enter') {
            this.props.handleEnterClick({
                text: this.state.text,
            });
            this.setState({
                text: '',
            });
        }
    }

    render() {
        return (
            <input className='input-field' type="text" onKeyDown={this.handleKeyDown} onChange={this.handleInputChange} placeholder='What needs to be done?' value={this.state.text} />
        );
    }
}

export default InputField;
