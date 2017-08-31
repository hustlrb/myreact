import React from 'react';
import ReactDOM from 'react-dom';
import RedBox from 'redbox-react';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

try {
  ReactDOM.render(<App />, document.getElementById('root'));
} catch (e) {
  ReactDOM.render(<RedBox error={e} />, document.getElementById('root'));
}

registerServiceWorker();
