import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux'
import { Button, Card } from 'antd';
import { actionRequestFetchPosition, actionRequestFetchDomain } from './redux';
import { selectPosition, selectDomain } from './redux';
import logo from './ExampleLogo.svg';
import './Example.css';

class About extends React.Component {
  static propTypes = {
    domain: PropTypes.string.isRequired,
    position: PropTypes.object.isRequired
  };

  static defaultProps = {
    domain: "loading..",
    position: {address: "loading.."}
  };

  componentDidMount() {
    this.props.actionRequestFetchDomain({times: 2});
  }

  render() {
    let domain = this.props.domain;
    let position = this.props.position.address;
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
          <Button type="primary" onClick={this.props.actionRequestFetchPosition}>获取地理位置</Button>
        </div>
        <div>
          {position}
        </div>
        <Button type="primary" onClick={this.props.gotoHome}>返回首页</Button>
        <Button type="primary" onClick={() => this.props.gotoHome()}>返回首页</Button>
        <Button type="primary" onClick={() => {this.props.gotoHome();}}>返回首页</Button>
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Card title="Card title" bordered={true} style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (appState, ownProps) => {
  return {
    position: selectPosition(appState),
    domain: selectDomain(appState)
  };
};

const mapDispatchToProps = {
  // gotoHome: () => { return push("/") },
  gotoHome: () => push("/"),
  actionRequestFetchPosition,
  actionRequestFetchDomain
};

export default connect(mapStateToProps, mapDispatchToProps)(About);