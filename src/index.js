import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { store } from './store';

import { Provider } from 'react-redux';


import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <GlobalStyle/>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);

