import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Layout, Menu, Icon } from 'antd';
import './style.less'

class AppSiderMenu extends React.Component {
  static __ANT_LAYOUT_SIDER = true;

  state = {
    current: '1',
    openKeys: [],
  };

  handleClick = (e) => {
    console.log('Clicked: ', e);
    this.setState({ current: e.key });
  };

  onOpenChange = (openKeys) => {
    const state = this.state;
    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
    const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    this.setState({ openKeys: nextOpenKeys });
  };

  getAncestorKeys = (key) => {
    const map = {
      sub3: ['sub2'],
    };
    return map[key] || [];
  };

  render() {
    return (
      <Menu
        theme="dark"
        mode="inline"
        openKeys={this.state.openKeys}
        selectedKeys={[this.state.current]}
        onOpenChange={this.onOpenChange}
        onClick={this.handleClick}
        className="app-sider-menu"
      >
        <Menu.SubMenu key="/cabinet" title={<span><Icon type="laptop" />干衣柜综合管理</span>}>
          <Menu.Item key="/cabinet/list"><Link to="/example">干衣柜信息管理</Link></Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu key="/site" title={<span><Icon type="laptop" />服务点综合管理</span>}>
          <Menu.Item key="/site/list"><Link to="/other">服务点信息管理</Link></Menu.Item>
          <Menu.Item key="/site/cabinet"><Link to="/another">服务点干衣柜管理</Link></Menu.Item>
          <Menu.Item key="/site/investor">投资人信息管理</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="/order" title={<span><Icon type="notification" />充值与订单管理</span>}>
          <Menu.Item key="/order/deposit">用户充值管理</Menu.Item>
          <Menu.Item key="/order/list">订单信息管理</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="/settlement" title={<span><Icon type="notification" />结算管理</span>}>
          <Menu.Item key="/settlement/list">服务点分成统计</Menu.Item>
          <Menu.Item key="/settlement/site">服务单位分成结算</Menu.Item>
          <Menu.Item key="/settlement/investor">投资人分成结算</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="/system" title={<span><Icon type="notification" />系统管理</span>}>
          <Menu.Item key="/system/user">用户与角色管理</Menu.Item>
          <Menu.Item key="/system/role">角色与权限管理</Menu.Item>
          <Menu.Item key="/system/log">操作日志管理</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    )
  }
}

export default connect()(AppSiderMenu);