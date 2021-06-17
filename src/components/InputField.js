import {Component} from "react";
import './InputField.css';

class InputField extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }
    }

    handleKeyDown = (e) => {
        this.setState({
            text: e.target.value
        }, () => {
            if(e.key === 'Enter') {
                this.props.onEnterClick(this.state.text);
                e.target.value = '';
                this.setState({
                    text: '',
                });
            }
        })
    }

    render() {
        return (
            <input className='input-field' type="text" onKeyDown={this.handleKeyDown} placeholder='What needs to be done?' />
        );
    }
}

export default InputField;
