import React, { useEffect } from 'react';
import { PropTypes } from 'utils';
import { Map } from 'immutable';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDriver, updateDriver, deleteDriver } from 'actions';
import { createLoadingSelector, createErrorMessageSelector, FETCH_DRIVER } from 'reducers';
import { Form } from 'components';
import { driverForm } from 'forms';
import { PageHeader } from 'antd';

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
      <div className="wrap">
        <div className="content">
          <Form
            fields={driverForm.fields}
            submitLabel="zapisz"
            resetLabel="anuluj"
            onSubmit={values => dispatch(updateDriver(id, values.toJS()))}
            form="DriverDetails"
            enableReinitialize
            initialValues={driver}
          />
          <button
            type="button"
            onClick={() => dispatch(deleteDriver(id)).then(() => history.push('/drivers'))}
            style={{ marginRight: 8 }}
          >
            usuń
          </button>
        </div>
      </div>
    </PageHeader>
  );
};

DriverDetails.propTypes = {
  history: PropTypes.history.isRequired,
  match: PropTypes.match.isRequired,
};

export default DriverDetails;
