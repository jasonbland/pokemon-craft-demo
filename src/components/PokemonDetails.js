import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPokemon } from '../actions';

class PokemonDetails extends React.Component {
  render() {
    const { pokemon } = this.props;

    if (!pokemon) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div>{pokemon.name}</div>
        <Link to="/">
          <div className="header">go back</div>
        </Link>
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
