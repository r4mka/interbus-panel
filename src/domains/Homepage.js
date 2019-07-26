import React from 'react';
import { MenuItem } from 'components';
import { Row, Col } from 'antd';

const Homepage = () => (
  <Row type="flex">
    <Col xs={12}>
      <MenuItem icon="car" name="Samochody" url="/cars" />
    </Col>
    <Col xs={12}>
      <MenuItem icon="user" name="Kierowcy" url="/drivers" />
    </Col>
  </Row>
);

export default Homepage;
