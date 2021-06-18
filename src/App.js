import {Component, createRef} from 'react';
import TodoItem from './components/TodoItem/index';
import InputField from './components/InputField/index';
import Filters from "./components/Filters/index";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filter: 'All'
        };
        this.checkbox = createRef();
    }

    handleEnterPress = (text) => {
        const id = Date.now();
        this.setState(state => ({
            data: [...state.data, {id, text, checked: false}]
        }));
    }

    handleRemoveTodo = (id) => {
        this.setState(state => ({
            data: state.data.filter(e => e.id !== id)
        }));
    }

    handleCheckboxClick = (value, id) => {
        const newObj = Object.assign(this.state.data.find(e => e.id === id));
        if(newObj) {
            newObj.checked = value;
            this.setState(state => ({
                data: [...state.data.map(e => e.id === id ? newObj : e)]
            }));
        }
    }

    handleRadioChange = (value) => {
        this.setState({
            filter: value
        });
    }

    handleClearBtnClick = () => {
        this.setState(state => ({
            data: state.data.filter(e => !e.checked)
        }));
    }

    handleToggleAllClick = () => {
        const todos = this.checkbox.current.children;
        const newData = [...this.state.data];
        if(newData.filter(e => e.checked === false).length > 0) {
            for (let el of todos) {
                el.querySelector('.checkbox').checked = true;
                newData.forEach(e => e.checked = true);
            }
        } else {
            for (let el of todos) {
                el.querySelector('.checkbox').checked = false;
                newData.forEach(e => e.checked = false);
            }
        }

        this.setState({
            data: newData
        });
    }

    render() {
        return (
            <div className="App">
                <h1>todos</h1>
                <div className="container">
                    <InputField onToggleAllClick={this.handleToggleAllClick} visible={this.state.data.length > 0} onEnterClick={this.handleEnterPress} />
                    <div ref={this.checkbox} >
                        {this.state.data.map(e => <TodoItem onCheckboxClick={this.handleCheckboxClick} onRemoveTodo={this.handleRemoveTodo} filter={this.state.filter} checked={e.checked} key={e.id} text={e.text} id={e.id} />)}
                    </div>
                    {!!this.state.data.length && <Filters onClearBtnClick={this.handleClearBtnClick} onRadioChange={this.handleRadioChange} data={this.state.data} />}
                </div>
            </div>
        );
    }
}

export default App;
