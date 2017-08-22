import React from 'react';
import PropTypes from 'prop-types'
import { Provider } from 'react-redux';

import RootRouter from './view/router';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    store: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Provider store={this.props.store}>
        <RootRouter />
      </Provider>
    );
  }
}

export default App;
