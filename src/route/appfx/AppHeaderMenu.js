import React from 'react';
import { connect } from 'react-redux';
import { Menu } from 'antd';

const AppHeaderMenu = () => {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      className="app-header-menu"
    >
      <Menu.Item key="loginUser">您好，系统管理员</Menu.Item>
    </Menu>
  )
};

export default connect()(AppHeaderMenu);
