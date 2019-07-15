import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDrivers } from 'actions';

const Drivers = () => {
  const drivers = useSelector(state => state.getIn(['drivers', 'items']));
  const $isLoading = useSelector(state => state.getIn(['drivers', '$isLoading']));
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
      {$isLoading ? (
        <div>loading...</div>
      ) : (
        <ul>
          {drivers.map(driver => (
            <li key={driver}>{driver}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Drivers;
