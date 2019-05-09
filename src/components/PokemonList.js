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
    start: 1,
    end: 20,
    scrollPosition: 0
  };

  componentWillMount() {
    if (!this.props.pokemon.length) {
      this.loadPokemons();
    }
    window.addEventListener('scroll', this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll);
  }

  listenToScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = winScroll / height;

    this.setState({
      scrollPosition: scrolled
    });

    if (this.state.scrollPosition >= 0.9) {
      this.setState(prevState => ({ start: prevState.end + 1, end: prevState.end + 10 }));
      this.loadPokemons();
    }
  };

  loadPokemons() {
    if (this.state.end < 150) {
      for (let i = this.state.start; i <= this.state.end; i++) {
        this.props.fetchPokemon(i);
      }
    }
  }

  renderCards() {
    return this.props.pokemon.map(item => {
      return <Card item={item} key={item.id} />;
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
