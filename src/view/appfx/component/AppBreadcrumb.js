import React from 'react';
import { connect } from 'react-redux';
import { Breadcrumb } from 'antd';

class AppBreadcrumb extends React.Component {
  render () {
    console.log('-----------> ', this.props);
    return (
      <Breadcrumb style={{ margin: '12px' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}

export default connect()(AppBreadcrumb);