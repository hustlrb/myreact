import React from 'react';
import { Menu, Icon } from 'antd';
import './HeaderMenu.less';

const HeaderMenu = (props) => {
  const { logout, user } = props;
  let handleClickMenu = e => e.key === 'logout' && logout();
  return (
    <Menu theme="dark" mode='horizontal' onClick={handleClickMenu} className='app-header-menu' >
      <Menu.SubMenu title={< span ><Icon type='user' />{user.name}</span>}>
        <Menu.Item key='logout'>
          <a>注销</a>
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  )
};

export default HeaderMenu;
