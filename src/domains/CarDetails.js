import React, { useEffect } from 'react';
import { PropTypes } from 'utils';
import { Map } from 'immutable';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { fetchCar, updateCar, deleteCar } from 'actions';
import { createLoadingSelector, createErrorMessageSelector, FETCH_CAR } from 'reducers';
import { carForm } from 'forms';
import { Button, Col, Empty, Row } from 'antd';
import { Card, Form } from 'components';

const CarDetails = ({
  history,
  match: {
    params: { id },
  },
}) => {
  const car = useSelector(state => state.getIn(['entities', 'cars', id])) || Map();
  const error = useSelector(createErrorMessageSelector(FETCH_CAR));
  const isLoading = useSelector(createLoadingSelector(FETCH_CAR));
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchCar(id));
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Row type="flex" gutter={16}>
      <Col xs={24} md={12}>
        <Card
          loading={isLoading}
          title={car.get('plate')}
          onBack={() => history.goBack()}
          extra={
            <Button
              type="danger"
              onClick={() => dispatch(deleteCar(id)).then(() => history.push('/cars'))}
            >
              {t('button.delete')}
            </Button>
          }
        >
          <Form
            fields={carForm.fields}
            onSubmit={values => dispatch(updateCar(id, values.toJS()))}
            form="DriverDetails"
            enableReinitialize
            initialValues={car}
          />
        </Card>
      </Col>
      <Col xs={24} md={12}>
        <Card title={t('common.lastDepartures')} loading={isLoading}>
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </Card>
        <Card title={t('common.stats')} loading={isLoading}>
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </Card>
      </Col>
    </Row>
  );
};

CarDetails.propTypes = {
  history: PropTypes.history.isRequired,
  match: PropTypes.match.isRequired,
};

export default CarDetails;
