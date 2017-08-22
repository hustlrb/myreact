import React, {Component} from 'react'
import {
  Layout,
  Row,
  Col,
} from 'antd'
import {Link} from 'react-router-dom'
import SideMenu from '../../component/SiderMenu/index'

const { Header, Footer, Sider, Content } = Layout

export default class MainFrame extends Component {
  constructor(props) {
    super(props)
  }

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
            {this.props.children}
          </Content>
        </Layout>

        <Footer>Footer</Footer>
      </Layout>
    )
  }
}
