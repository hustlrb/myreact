import React from 'react';
import { Provider } from 'react-redux';
import Routes from './route/router';
import appStore from './redux/store';

const App = () => {
  return (
    <Provider store={appStore}>
      <Routes />
    </Provider>
  );
};

export default App;
