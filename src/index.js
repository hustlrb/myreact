import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store/persistStore';
import RedBox from 'redbox-react';
import './index.css';
import App from './App'
import registerServiceWorker from './registerServiceWorker';

try {
  ReactDOM.render(<App store={store}/>, document.getElementById('root'));
} catch (e) {
  ReactDOM.render(<RedBox error={e} />, document.getElementById('root'));
}

registerServiceWorker();
