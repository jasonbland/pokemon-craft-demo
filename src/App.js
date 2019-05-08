import React from 'react';
import axios from 'axios';

import 'semantic-ui-css/semantic.min.css';
// import '../style/style.css';
import './App.css';

class App extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.getPokemon();
  }

  async getPokemon() {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
      this.setState({ data: response });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="App">
        <div>Hello</div>
      </div>
    );
  }
}

export default App;
