import React from 'react';
import TodoItem from './components/TodoItem';
import InputField from './components/InputField'
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
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

    render() {
        return (
            <div className="App">
                <div className="container">
                    <h1>todos</h1>
                    <InputField onEnterClick={this.handleEnterPress} />
                    {this.state.data.map(e => <TodoItem onRemoveTodo={this.handleRemoveTodo} key={e.id} text={e.text} id={e.id} />) }
                </div>
            </div>
        );
    }
}

export default App;
