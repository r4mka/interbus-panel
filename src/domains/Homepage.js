import React from 'react';
import { MenuItem } from 'components';
import { Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';

const Homepage = () => {
  const { t } = useTranslation();

  return (
    <Row type="flex">
      <Col xs={12}>
        <MenuItem icon="car" name={t('cars.cars')} url="/cars" />
      </Col>
      <Col xs={12}>
        <MenuItem icon="user" name={t('drivers.drivers')} url="/drivers" />
      </Col>
    </Row>
  );
};

export default Homepage;
