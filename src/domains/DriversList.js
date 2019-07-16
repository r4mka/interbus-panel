import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDrivers } from 'actions';
import { createLoadingSelector, FETCH_DRIVERS } from 'reducers';

const DriversList = () => {
  const drivers = useSelector(state => state.get('drivers'));
  const isLoading = useSelector(createLoadingSelector(FETCH_DRIVERS));
  const dispatch = useDispatch();

  useEffect(() => {
    if (drivers.isEmpty()) {
      dispatch(fetchDrivers());
    }
  }, []);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Back</Link>
          </li>
        </ul>
      </nav>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <ul>
          {drivers.map(driver => (
            <li key={driver}>
              <Link to={`/drivers/${driver}`}>{driver}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DriversList;
