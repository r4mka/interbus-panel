import React from 'react';
import { PropTypes } from 'utils';
import { Layout, Menu } from 'antd';
import { Breadcrumb } from 'components';

const { Header, Content, Footer } = Layout;

const App = ({ children }) => (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        {/* <Menu.Item key="1">nav 1</Menu.Item> */}
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }} />
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>{children}</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
