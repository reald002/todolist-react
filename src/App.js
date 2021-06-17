import React from 'react';
import TodoItem from './components/TodoItem';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        text: 'ahaha'
    };
  };

  render() {
    return (
        <div className="App">
            <div className="container">
                <TodoItem text={this.state.text} />
            </div>
        </div>
    );
  }
}

export default App;
