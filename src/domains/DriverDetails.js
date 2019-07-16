import React, { useEffect } from 'react';
import { PropTypes } from 'utils';
import { Map } from 'immutable';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDriver } from 'actions';
import { createLoadingSelector, createErrorMessageSelector, FETCH_DRIVER } from 'reducers';

const DriverDetails = ({
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
    <div>
      <h2>{`${driver.get('firstname')} ${driver.get('lastname')}`}</h2>
    </div>
  );
};

DriverDetails.propTypes = {
  match: PropTypes.match.isRequired,
};

export default DriverDetails;
