import React, { useEffect } from 'react';
import { PropTypes } from 'utils';
import { Map } from 'immutable';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { fetchDriver, updateDriver, deleteDriver } from 'actions';
import { createLoadingSelector, createErrorMessageSelector, FETCH_DRIVER } from 'reducers';
import { driverForm } from 'forms';
import { Col, Row, Button, Empty } from 'antd';
import { Card, Form } from 'components';

const DriverDetails = ({
  history,
  match: {
    params: { id },
  },
}) => {
  const driver = useSelector(state => state.getIn(['entities', 'drivers', id])) || Map();
  const error = useSelector(createErrorMessageSelector(FETCH_DRIVER));
  const isLoading = useSelector(createLoadingSelector(FETCH_DRIVER));
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchDriver(id));
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Row type="flex" gutter={16}>
      <Col xs={24} md={12}>
        <Card
          loading={isLoading}
          title={`${driver.get('firstname')} ${driver.get('lastname')}`}
          onBack={() => history.goBack()}
          extra={
            <Button
              type="danger"
              onClick={() => dispatch(deleteDriver(id)).then(() => history.push('/drivers'))}
            >
              {t('button.delete')}
            </Button>
          }
        >
          <Form
            fields={driverForm.fields}
            onSubmit={values => dispatch(updateDriver(id, values.toJS()))}
            form="DriverDetails"
            enableReinitialize
            initialValues={driver}
          />
        </Card>
      </Col>
      <Col xs={24} md={12}>
        <Card title="Ostatnie wyjazdy" loading={isLoading}>
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </Card>
        <Card title="Statystyki" loading={isLoading}>
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </Card>
      </Col>
    </Row>
  );
};

DriverDetails.propTypes = {
  history: PropTypes.history.isRequired,
  match: PropTypes.match.isRequired,
};

export default DriverDetails;
