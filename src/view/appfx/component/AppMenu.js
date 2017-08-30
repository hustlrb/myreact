import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';
import { bindActionCreators } from 'redux';
import './AppMenu.css'

const { SubMenu } = Menu;
const { Sider } = Layout;

class SiderMenu extends React.Component {
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
    console.log('location prop: ', this.props);
    return (
      <Sider width={200} style={{ background: "#333744" }}>
        <Menu
          theme="dark"
          mode="inline"
          style={{ height: '100%', borderRight: 0, background: '#42485B' }}
          openKeys={this.state.openKeys}
          selectedKeys={[this.state.current]}
          onOpenChange={this.onOpenChange}
          onClick={this.handleClick}
        >
          <SubMenu key="/cabinet" title={<span><Icon type="laptop" />干衣柜综合管理</span>}>
            <Menu.Item key="/cabinet/list">干衣柜信息管理</Menu.Item>
          </SubMenu>

          <SubMenu key="/site" title={<span><Icon type="laptop" />服务点综合管理</span>}>
            <Menu.Item key="/site/list">服务点信息管理</Menu.Item>
            <Menu.Item key="/site/cabinet">服务点干衣柜管理</Menu.Item>
            <Menu.Item key="/site/investor">投资人信息管理</Menu.Item>
          </SubMenu>
          <SubMenu key="/order" title={<span><Icon type="notification" />充值与订单管理</span>}>
            <Menu.Item key="/order/deposit">用户充值管理</Menu.Item>
            <Menu.Item key="/order/list">订单信息管理</Menu.Item>
          </SubMenu>
          <SubMenu key="/settlement" title={<span><Icon type="notification" />结算管理</span>}>
            <Menu.Item key="/settlement/list">服务点分成统计</Menu.Item>
            <Menu.Item key="/settlement/site">服务单位分成结算</Menu.Item>
            <Menu.Item key="/settlement/investor">投资人分成结算</Menu.Item>
          </SubMenu>
          <SubMenu key="/system" title={<span><Icon type="notification" />系统管理</span>}>
            <Menu.Item key="/system/user">用户与角色管理</Menu.Item>
            <Menu.Item key="/system/role">角色与权限管理</Menu.Item>
            <Menu.Item key="/system/log">操作日志管理</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SiderMenu);