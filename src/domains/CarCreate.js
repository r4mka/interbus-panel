import React from 'react';
import { PropTypes } from 'utils';
import { useDispatch, useSelector } from 'react-redux';
import { createCar } from 'actions';
import { createErrorMessageSelector, CREATE_CAR } from 'reducers';
import { carForm } from 'forms';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'antd';
import { Card, Form } from 'components';

const CarCreate = ({ history }) => {
  const error = useSelector(createErrorMessageSelector(CREATE_CAR));
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const goBack = () => history.push('/cars');

  return (
    <Row gutter={16}>
      <Col xs={24} md={12}>
        <Card title={t('cars.create')} onBack={goBack}>
          <Form
            fields={carForm.fields}
            onSubmit={values => dispatch(createCar(values.toJS())).then(goBack)}
            form="CarCreate"
          />
          {error && <h2>{error}</h2>}
        </Card>
      </Col>
    </Row>
  );
};

CarCreate.propTypes = {
  history: PropTypes.history.isRequired,
};

export default CarCreate;
