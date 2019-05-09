import React from 'react';
import { shallow } from 'enzyme';
import PokemonList from '../components/PokemonList';

describe('PokemonList', () => {
  it('renders without crashing', () => {
    shallow(<PokemonList />);
  });
});
