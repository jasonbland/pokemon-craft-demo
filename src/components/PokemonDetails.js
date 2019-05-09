import React from 'react';
import { connect } from 'react-redux';

class PokemonDetails extends React.Component {
  render() {
    return (
      <div>
        <div>Hello</div>
      </div>
    );
  }
}

const mapStateToProps = ({ pokemon }) => {
  console.log(pokemon);
  return {
    pokemon
  };
};

export default connect(
  mapStateToProps,
  null
)(PokemonDetails);
