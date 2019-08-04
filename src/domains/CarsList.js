import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { PropTypes } from 'utils';
import { fetchCars } from 'actions';
import { createLoadingSelector, FETCH_CARS } from 'reducers';
import { Button, List } from 'antd';
import { Card, ListItemCar } from 'components';

const CarsList = ({ history }) => {
  const cars = useSelector(state => state.get('cars'));
  const isLoading = useSelector(createLoadingSelector(FETCH_CARS));
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  return (
    <Card
      title={t('cars.cars')}
      onBack={() => history.push('/')}
      extra={
        <Button type="primary" onClick={() => history.push('/cars/create')}>
          {t('cars.create')}
        </Button>
      }
    >
      <List
        loading={isLoading}
        itemLayout="vertical"
        dataSource={cars}
        renderItem={carId => <ListItemCar id={carId} />}
      />
    </Card>
  );
};

CarsList.propTypes = {
  history: PropTypes.history.isRequired,
};

export default CarsList;
