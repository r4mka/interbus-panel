import React from 'react';
import { MenuItem } from 'components';
import { Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';

const Homepage = () => {
  const { t } = useTranslation();

  return (
    <Row gutter={16}>
      <Col xs={24} sm={12} md={6}>
        <MenuItem icon="car" name={t('cars.cars')} url="/cars" />
      </Col>
      <Col xs={24} sm={12} md={6}>
        <MenuItem icon="user" name={t('drivers.drivers')} url="/drivers" />
      </Col>
      <Col xs={24} sm={12} md={6}>
        <MenuItem icon="solution" name={t('orders.orders')} url="/orders" />
      </Col>
    </Row>
  );
};

export default Homepage;
