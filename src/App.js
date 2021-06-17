import InputBlock from './components/InputBlock';
import TodoItem from './components/TodoItem';
import Filters from './components/Filters';
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
      //TODO: more keys for state object
    };
  };

  handleRemoveBtnClick = (id) => {
    this.setState({
      data: this.state.data.filter(e => e._id !== id)
    });
  }

  addTodoItem = async (todo) => {
    const newItem = await fetch('http://localhost:3001/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        text: todo.text,
      }),
    });
    const newItemJson = await newItem.json();
    this.setState({
      data: [...this.state.data, newItemJson]
    });
  };

  componentDidMount = async () => {
    try {
      const data = await fetch('http://localhost:3001/todos');
      const dataJson = await data.json();
      this.setState({
        data: dataJson
      });
    } catch (e) {
      console.log(e.reason);
    }
  };

  render() {
    return (
        <div className="App">
          <div className="container">
            <h1>todos</h1>
            <InputBlock onEnterClick={this.addTodoItem} />
            <ul className="todo">
              {this.state.data.map( el => (
                  <TodoItem onRemoveBtnClick={this.handleRemoveBtnClick} text={el.text} id={el._id} checked={el.checked}/>
              ))}
              <Filters />
            </ul>
          </div>
        </div>
    );
  }
}

export default App;
