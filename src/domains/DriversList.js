import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { fetchDrivers } from 'actions';
import { createLoadingSelector, FETCH_DRIVERS } from 'reducers';

const DriversList = () => {
  const drivers = useSelector(state => state.get('drivers'));
  const isLoading = useSelector(createLoadingSelector(FETCH_DRIVERS));
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    if (drivers.isEmpty()) {
      dispatch(fetchDrivers());
    }
  }, []);

  return isLoading ? (
    <div>loading...</div>
  ) : (
    <ul>
      <li>
        <Link to="/drivers/create">{t('drivers.create')}</Link>
      </li>
      {drivers.map(driver => (
        <li key={driver}>
          <Link to={`/drivers/${driver}`}>{driver}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DriversList;
