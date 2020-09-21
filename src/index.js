import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import App from './TodoList';

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
     <App />
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);