import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(...middleware));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={ store }>
    <React.StrictMode>
      <App />
    </React.StrictMode> 
  </Provider>
);