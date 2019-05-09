import axios from 'axios';

export const FETCH_POKEMON = 'fetch_pokemon';

const ROOT_URL = 'https://pokeapi.co/api/v2/pokemon';
// const API_KEY = '?key=BLUESPIN';

export const fetchPokemon = id => async dispatch => {
  const request = await axios.get(`${ROOT_URL}/${id}/`);

  dispatch({ type: FETCH_POKEMON, payload: request });
};
