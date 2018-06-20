import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

import './styles/normalize.css';
import './styles/reset.css';
import './styles/utilities.css';
import './styles/base.css';

const root = document.getElementById('root');

if (root.hasChildNodes()) {
  ReactDOM.hydrate(<App />, root);
} else {
  ReactDOM.render(<App />, root);
}
