import React from 'react';
import InputField from './components/InputField'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    return (
        <div className="App">
            <div className="container">
                <h1>todos</h1>
                <InputField />
            </div>
        </div>
    );
  }
}

export default App;
