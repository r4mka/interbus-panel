import React from 'react';
import { PropTypes } from 'utils';
import { Header, Breadcrumb } from 'components';
import { Layout, OverflowWrapper, Content, Page } from 'ui';

const App = ({ children }) => (
  <Layout>
    <Header />
    <OverflowWrapper>
      <Content>
        <Page>
          <Breadcrumb />
          {children}
        </Page>
      </Content>
    </OverflowWrapper>
  </Layout>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
