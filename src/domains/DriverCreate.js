import React from 'react';
import { PropTypes } from 'utils';
import { useDispatch, useSelector } from 'react-redux';
import { createDriver } from 'actions';
import { createErrorMessageSelector, CREATE_DRIVER } from 'reducers';
import { Form } from 'components';
import { driverForm } from 'forms';

const DriverCreate = ({ history }) => {
  const error = useSelector(createErrorMessageSelector(CREATE_DRIVER));
  const dispatch = useDispatch();
  const goBack = () => history.push('/drivers');

  return (
    <>
      <Form
        fields={driverForm.fields}
        submitLabel="stwórz"
        resetLabel="anuluj"
        onSubmit={values => dispatch(createDriver(values.toJS())).then(goBack)}
        form="DriverCreate"
      />
      {error && <h2>{error}</h2>}
      <button type="button" onClick={goBack} style={{ marginRight: 8 }}>
        cofnij
      </button>
    </>
  );
};

DriverCreate.propTypes = {
  history: PropTypes.history.isRequired,
};

export default DriverCreate;
