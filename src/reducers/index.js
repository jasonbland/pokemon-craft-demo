import { combineReducers } from 'redux';
import PokemonReducer from './pokemonReducer';

const rootReducer = combineReducers({
  pokemon: PokemonReducer
});

export default rootReducer;
