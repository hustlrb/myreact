import React from 'react';
import { connect } from 'react-redux';

import BasicTable from './Table';

class Home extends React.Component {
  render() {
    return (
      <BasicTable />
    )
  }
}

const mapStateToProps = (appState, ownProps) => {
  return {
  };
};

export default connect(mapStateToProps)(Home);