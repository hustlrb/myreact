import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Layout, Row, Col } from 'antd';

import SideMenu from './SiderMenu';
import { view as Home } from '../../home/';
import { view as About } from '../../about/';

const { Header, Footer, Sider, Content } = Layout;

class AppFx extends React.Component {
  render() {
    return (
      <Layout style={{height: '100%'}}>
        <Header>
          <Row>
            <Col span={2}>
              <Link to="/">LOGO</Link>
            </Col>
            <Col span={22}>
              <Link to="/about">关于我们</Link>
            </Col>
          </Row>
        </Header>

        <Layout>
          <Sider>
            <SideMenu />
          </Sider>

          <Content>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
            </Switch>
          </Content>
        </Layout>

        <Footer>Footer</Footer>


      </Layout>
    )
  }
}

export default AppFx;
