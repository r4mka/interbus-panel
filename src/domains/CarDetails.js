import React, { useEffect } from 'react';
import { PropTypes } from 'utils';
import { Map } from 'immutable';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCar } from 'actions';
import { createLoadingSelector, createErrorMessageSelector, FETCH_CAR } from 'reducers';

const CarDetails = ({
  match: {
    params: { id },
  },
}) => {
  const car = useSelector(state => state.getIn(['entities', 'cars', id])) || Map();
  const error = useSelector(createErrorMessageSelector(FETCH_CAR));
  const isLoading = useSelector(createLoadingSelector(FETCH_CAR));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCar(id));
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>{car.get('plate')}</h2>
    </div>
  );
};

CarDetails.propTypes = {
  match: PropTypes.match.isRequired,
};

export default CarDetails;
