import {Component} from 'react';
import TodoItem from './components/TodoItem/index';
import InputField from './components/InputField/index';
import Filters from "./components/Filters/index";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: JSON.parse(localStorage.getItem('data')) ?? [],
            filter: localStorage.getItem('filter') ?? 'All'
        };
    }

    changeLocalStorage = data => {
        localStorage.setItem('data', JSON.stringify(data))
    }

    handleEnterPress = (text) => {
        const id = Date.now();
        this.setState(state => ({
            data: [...state.data, {id, text, checked: false}]
        }), () => {this.changeLocalStorage(this.state.data)});
    }

    handleRemoveTodo = (id) => {
        this.setState(state => ({
            data: state.data.filter(e => e.id !== id)
        }), () => {this.changeLocalStorage(this.state.data)});
    }

    handleCheckboxClick = (id) => {
        const newObj = {...this.state.data.find(todo => todo.id === id)};
        if(newObj) {
            newObj.checked = !newObj.checked;
            this.setState(state => ({
                data: [...state.data.map(todo => todo.id === id ? newObj : todo)]
            }), () => {this.changeLocalStorage(this.state.data)});
        }
    }

    handleRadioChange = (value) => {
        this.setState(state => ({
            filter: value
        }), () => localStorage.setItem('filter', this.state.filter ));
    }

    handleClearBtnClick = () => {
        this.setState(state => ({
            data: state.data.filter(e => !e.checked)
        }), () => {this.changeLocalStorage(this.state.data)});
    }

    handleToggleAllClick = () => {
        console.log(this.checkbox)
        const newData = [...this.state.data];
        const gotUncheckedTodos = (newData.filter(e => e.checked === false).length > 0);

        newData.forEach(todo => {
            todo.checked = gotUncheckedTodos
        })

        this.setState(state => ({
            data: newData
        }),() => {this.changeLocalStorage(this.state.data)});
    }

    render() {
        return (
            <div className="App">
                <h1>todos</h1>
                <div className="container">
                    <InputField onToggleAllClick={this.handleToggleAllClick} visible={this.state.data.length > 0} onEnterClick={this.handleEnterPress} />
                    <div>
                        {this.state.data.map(todo => <TodoItem onCheckboxClick={this.handleCheckboxClick} onRemoveTodo={this.handleRemoveTodo} filter={this.state.filter} checked={todo.checked} key={todo.id} text={todo.text} id={todo.id} />)}
                    </div>
                    {!!this.state.data.length && <Filters onClearBtnClick={this.handleClearBtnClick} onRadioChange={this.handleRadioChange} data={this.state.data} />}
                </div>
            </div>
        );
    }
}

export default App;
