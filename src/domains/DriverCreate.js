import React from 'react';
import { PropTypes } from 'utils';
import { useDispatch, useSelector } from 'react-redux';
import { createDriver } from 'actions';
import { createErrorMessageSelector, CREATE_DRIVER } from 'reducers';
import { driverForm } from 'forms';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'antd';
import { Card, Form } from 'components';

const DriverCreate = ({ history }) => {
  const error = useSelector(createErrorMessageSelector(CREATE_DRIVER));
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const goBack = () => history.push('/drivers');

  return (
    <Row gutter={16}>
      <Col xs={24} md={12}>
        <Card title={t('drivers.create')} onBack={goBack}>
          <Form
            fields={driverForm.fields}
            onSubmit={values => dispatch(createDriver(values.toJS())).then(goBack)}
            form="DriverCreate"
          />
          {error && <h2>{error}</h2>}
        </Card>
      </Col>
    </Row>
  );
};

DriverCreate.propTypes = {
  history: PropTypes.history.isRequired,
};

export default DriverCreate;
