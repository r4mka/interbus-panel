import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { fetchCars } from 'actions';
import { createLoadingSelector, FETCH_CARS } from 'reducers';

const CarsList = () => {
  const cars = useSelector(state => state.get('cars'));
  const isLoading = useSelector(createLoadingSelector(FETCH_CARS));
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    if (cars.isEmpty()) {
      dispatch(fetchCars());
    }
  }, []);

  return isLoading ? (
    <div>loading...</div>
  ) : (
    <ul>
      <li>
        <Link to="/cars/create">{t('cars.create')}</Link>
      </li>
      {cars.map(car => (
        <li key={car}>
          <Link to={`/cars/${car}`}>{car}</Link>
        </li>
      ))}
    </ul>
  );
};

export default CarsList;
