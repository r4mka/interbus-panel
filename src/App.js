import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCars, fetchDrivers } from 'actions';

function App({ handleFetchCars, handleFetchDrivers }) {
  useEffect(() => {
    handleFetchCars({ params: { limit: 2 } }).then(({ value: { lastKey } }) => {
      setTimeout(() => handleFetchCars({ params: { limit: 2, lastKey } }), 3000);
    });
    handleFetchDrivers();
  }, []);

  return <div>InterBus Panel</div>;
}

App.propTypes = {
  handleFetchCars: PropTypes.func.isRequired,
  handleFetchDrivers: PropTypes.func.isRequired,
};

export default connect(
  null,
  { handleFetchCars: fetchCars, handleFetchDrivers: fetchDrivers },
)(App);
