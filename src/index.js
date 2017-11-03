import React from 'react';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import reducers from './reducers/index';
import './index.css';

const loggerMiddleware = createLogger();
const store = createStore(
  reducers,
  applyMiddleware(thunkMiddleware, loggerMiddleware),
);

const appjs = () => (
  <Provider store={store}>
    <App store={store} />
  </Provider>
);

render(appjs(), document.getElementById('root'));
registerServiceWorker();
