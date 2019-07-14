import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCars, fetchCar, fetchDrivers } from 'actions';

function App({ handleFetchCars, handleFetchCar, handleFetchDrivers }) {
  useEffect(() => {
    handleFetchCars().then(() => {
      setTimeout(() => handleFetchCar('CAR-jliPlI3y8'), 1500);
    });
    setTimeout(handleFetchDrivers, 3000);
  }, []);

  return <div>InterBus Panel</div>;
}

App.propTypes = {
  handleFetchCar: PropTypes.func.isRequired,
  handleFetchCars: PropTypes.func.isRequired,
  handleFetchDrivers: PropTypes.func.isRequired,
};

export default connect(
  null,
  { handleFetchCars: fetchCars, handleFetchDrivers: fetchDrivers, handleFetchCar: fetchCar },
)(App);
