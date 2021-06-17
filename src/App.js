import React from 'react';
import InputField from './components/InputField'
import TodoItem from './components/TodoItem';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [
            {text: 'Random text', id: 0},
            {text: 'One more random text', id: 1}
        ]
    };
  };

  handleEnterPress = (text) => {
      const id = this.state.data.length;
      this.setState(state => ({
          data: [...state.data, {id, text, checked: false}]
      }));
  }

  render() {
    return (
        <div className="App">
            <div className="container">
                <h1>todos</h1>
                <InputField onEnterClick={this.handleEnterPress} />
                {this.state.data.map(e => <TodoItem text={e.text} id={e.id} />) }
            </div>
        </div>
    );
  }
}

export default App;
