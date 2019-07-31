import React, { useEffect } from 'react';
import { PropTypes } from 'utils';
import { Map } from 'immutable';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { fetchDriver, updateDriver, deleteDriver } from 'actions';
import { createLoadingSelector, createErrorMessageSelector, FETCH_DRIVER } from 'reducers';
import { Form } from 'components';
import { driverForm } from 'forms';
import { Col, PageHeader, Row, Button } from 'antd';

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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <PageHeader title={`${driver.get('firstname')} ${driver.get('lastname')}`}>
      <Row type="flex" gutter={8}>
        <Col xs={24} sm={12}>
          <Form
            fields={driverForm.fields}
            onSubmit={values => dispatch(updateDriver(id, values.toJS()))}
            form="DriverDetails"
            enableReinitialize
            initialValues={driver}
          />
        </Col>
        <Col xs={24} sm={12}>
          <Button
            type="danger"
            onClick={() => dispatch(deleteDriver(id)).then(() => history.push('/drivers'))}
          >
            {t('button.delete')}
          </Button>
        </Col>
      </Row>
    </PageHeader>
  );
};

DriverDetails.propTypes = {
  history: PropTypes.history.isRequired,
  match: PropTypes.match.isRequired,
};

export default DriverDetails;
