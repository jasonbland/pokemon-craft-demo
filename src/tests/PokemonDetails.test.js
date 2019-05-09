import React from 'react';
import { shallow } from 'enzyme';
import PokemonDetails from '../components/PokemonDetails';

describe('PokemonDetails', () => {
  it('renders without crashing', () => {
    shallow(<PokemonDetails />);
  });
});
