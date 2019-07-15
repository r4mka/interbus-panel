import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCars } from 'actions';

const Cars = () => {
  const cars = useSelector(state => state.getIn(['cars', 'items']));
  const $isLoading = useSelector(state => state.getIn(['cars', '$isLoading']));
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
      {$isLoading ? (
        <div>loading...</div>
      ) : (
        <ul>
          {cars.map(car => (
            <li key={car}>{car}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cars;
