import React, {Component} from 'react'
import {
  Layout,
  Row,
  Col,
} from 'antd'
import {Link} from 'react-router-dom'
import SideMenu from './component/SiderMenu'
import Home from '../home/'
import { Route, Switch } from 'react-router-dom';
import { view as About } from '../about/'

const { Header, Footer, Sider, Content } = Layout

export default class AppFx extends Component {
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
