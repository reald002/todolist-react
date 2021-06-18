import React from 'react';
import TodoItem from './components/TodoItem/index';
import InputField from './components/InputField/index'
import Filters from './components/Filters/index';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filter: 'All'
        };
    };

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
        newObj.checked = value;
        this.setState(state => ({
            data: [...state.data.map(e => {
                return e.id === id ? newObj : e
            }) ]
        }));
    }

    handleRadioChange = (value) => {
        this.setState({
            filter: value
        });
    }

    handleClearBtnClick = () => {
        this.setState(state => ({
            data: state.data.filter(e => e.checked === false)
        }));
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <h1>todos</h1>
                    <InputField onEnterClick={this.handleEnterPress} />
                    {this.state.data.map(e => <TodoItem onCheckboxClick={this.handleCheckboxClick} onRemoveTodo={this.handleRemoveTodo} filter={this.state.filter} checked={e.checked} key={e.id} text={e.text} id={e.id} />)}
                    {!!this.state.data.length && <Filters onClearBtnClick={this.handleClearBtnClick} onRadioChange={this.handleRadioChange} data={this.state.data} />}
                </div>
            </div>
        );
    }
}

export default App;
