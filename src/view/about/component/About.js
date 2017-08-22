import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { requestFetchLocation, requestFetchDomain } from '../action';
import { selectLocation, selectDomain } from '../selector';
import logo from './logo.svg';
import './style.css';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    domain: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired
  };

  static defaultProps = {
    domain: "loading..",
    location: {address: "loading.."}
  };

  componentDidMount() {
    this.props.requestFetchDomain({times: 2});
  }

  render() {
    let domain = this.props.domain;
    let location = this.props.location.address;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          当前域名: {domain}
        </p>
        <div>
          <Button type="primary" onClick={() => {this.props.requestFetchLocation()}}>获取地理位置</Button>
        </div>
        <div>
          {location}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (appState, ownProps) => {
  return {
    location: selectLocation(appState),
    domain: selectDomain(appState)
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  requestFetchLocation,
  requestFetchDomain
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(About);