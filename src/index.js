import React from 'react';
import ReactDOM from 'react-dom';
import RedBox from 'redbox-react';
import appStore from './redux/store';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

try {
  ReactDOM.render(<App store={appStore}/>, document.getElementById('root'));
} catch (e) {
  ReactDOM.render(<RedBox error={e} />, document.getElementById('root'));
}

registerServiceWorker();
