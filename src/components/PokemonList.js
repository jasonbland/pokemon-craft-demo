import React from 'react';
import { connect } from 'react-redux';
import { fetchPokemon } from '../actions';
// import image from '../white-image.png';
import Card from './Card';

import 'semantic-ui-css/semantic.min.css';
// import '../style/style.css';
// import './App.css';

class PokemonList extends React.Component {
  state = {
    data: [],
    finished: false
  };

  componentDidMount() {
    for (let i = 1; i < 20; i++) {
      this.props.fetchPokemon(i);
    }
  }

  renderCards() {
    return this.props.pokemon.map(item => {
      return <Card item={item} key={item.name} />;
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

const mapStateToProps = ({ pokemon }) => {
  return {
    pokemon
  };
};

export default connect(
  mapStateToProps,
  { fetchPokemon }
)(PokemonList);
