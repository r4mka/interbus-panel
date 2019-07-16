import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCars } from 'actions';
import { createLoadingSelector, FETCH_CARS } from 'reducers';

const CarsList = () => {
  const cars = useSelector(state => state.get('cars'));
  const isLoading = useSelector(createLoadingSelector(FETCH_CARS));
  const dispatch = useDispatch();

  useEffect(() => {
    if (cars.isEmpty()) {
      dispatch(fetchCars());
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
          {cars.map(car => (
            <li key={car}>
              <Link to={`/cars/${car}`}>{car}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CarsList;
