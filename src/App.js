import React from 'react';
import InputField from './components/InputField'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data: []
    };
  };

  handleEnterClick = (text) => {
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
                <InputField onEnterClick={this.handleEnterClick} />
            </div>
        </div>
    );
  }
}

export default App;
