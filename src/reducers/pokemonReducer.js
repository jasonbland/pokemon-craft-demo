import { FETCH_POKEMON } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_POKEMON:
      return [...state, action.payload.data];
    default:
      return state;
  }
};
