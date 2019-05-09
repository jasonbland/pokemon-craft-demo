import React from 'react';
import axios from 'axios';
import image from './white-image.png';
import Card from './Card';

import 'semantic-ui-css/semantic.min.css';
// import '../style/style.css';
import './App.css';

class App extends React.Component {
  state = {
    data: [],
    finished: false
  };

  componentDidMount() {
    this.getPokemon();
  }

  async getPokemon() {
    try {
      for (let i = 1; i < 20; i++) {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        this.setState(prevState => ({
          data: [...prevState.data, response.data]
        }));
      }
      console.log(this.state.data);
    } catch (error) {
      console.log(error);
    }
  }

  renderCards() {
    return this.state.data.map(item => {
      return <Card item={item} />;
    });
  }

  render() {
    return (
      <div className="container">
        <div className="ui one column centered grid" style={Controls}>
          <div className="large ui buttons row">
            <button className="ui button">All</button>
            <button className="ui button">Bag</button>
          </div>
          <div className="ui icon input row">
            <input type="text" placeholder="Search..." />
            <i className="search icon" />
          </div>
        </div>
        <div className="ui five cards container">{this.renderCards()}</div>
      </div>
    );
  }
}

const Controls = {
  width: '200px',
  margin: 'auto'
};

export default App;
