import React from 'react';
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

  render() {
    return (
        <div className="App">
            <div className="container">
                {this.state.data.map(e => <TodoItem text={e.text} id={e.id} />) }
            </div>
        </div>
    );
  }
}

export default App;
