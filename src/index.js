import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { Router, Route, Switch } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';

import PokemonList from './components/PokemonList';
import history from './history';

import 'semantic-ui-css/semantic.min.css';

const store = createStore(reducers, compose(applyMiddleware(ReduxThunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/" component={PokemonList} exact />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.querySelector('#root')
);
