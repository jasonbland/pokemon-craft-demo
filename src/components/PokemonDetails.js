import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import GoogleMap from './GoogleMap';

import { fetchPokemon } from '../actions';

export class PokemonDetails extends React.Component {
  componentDidMount() {
    let config = {
      crossDomain: true,
      headers: {
        'x-api-key': 'lLB7po70xF5hYKJ2Gv2Mg5CNh4eG1zcoaRKWlZi0',
        'cache-control': 'no-cache'
      }
    };

    // Response to preflight request doesn't pass access control
    // check: It does not have HTTP ok status.
    axios
      .get('https://api.craft-demo.net/pokemon/1', config)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const { pokemon } = this.props;

    if (!pokemon) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">
          <div className="header">Back</div>
        </Link>
        <div className="container">
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              </div>
              <div className="content">
                <div className="header">{pokemon.name}</div>
                <div className="meta">
                  <a>Height: {pokemon.height}</a>
                </div>
                <div className="meta">
                  <a>Weight: {pokemon.weight}</a>
                </div>
                <div className="meta">
                  <a>In Bag: </a>
                  <input type="checkbox" name="vehicle1" value="Bike" />
                </div>
                <div className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </div>
              </div>
              <div className="extra content">
                <span className="right floated">Base Experience: {pokemon.base_experience}</span>
                <span>
                  <i className="user" />
                  Order: {pokemon.order}
                </span>
              </div>
            </div>
          </div>
          <GoogleMap />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ pokemon }, ownProps) => {
  return {
    pokemon: pokemon.filter(item => ownProps.match.params.id === item.name)[0]
  };
};

export default connect(
  mapStateToProps,
  { fetchPokemon }
)(PokemonDetails);
