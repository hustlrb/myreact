import React from 'react';
import PropTypes from 'prop-types'
import { Provider } from 'react-redux';

import IndexRouter from './route/index';
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
        <IndexRouter />
      </Provider>
    );
  }
}

export default App;
