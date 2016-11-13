import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import { Provider } from 'react-redux';
import { createHistory } from 'history';
import { syncReduxAndRouter } from 'redux-simple-router';

import routes from './routes';
import configureStore from './store';
// import response from './middleware/alerts';

const history = createHistory();
const store = configureStore();

syncReduxAndRouter(history, store);

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>
), document.getElementById('app'));
