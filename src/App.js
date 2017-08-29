import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import { routerHistory } from './redux/store';
import { view as AppFx } from './view/appfx/';

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={routerHistory}>
          <AppFx />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
