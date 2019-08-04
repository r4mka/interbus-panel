import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { fetchDrivers } from 'actions';
import { createLoadingSelector, FETCH_DRIVERS } from 'reducers';
import { PropTypes } from 'utils';
import { Button, List } from 'antd';
import { Card, ListItemDriver } from 'components';

const DriversList = ({ history }) => {
  const drivers = useSelector(state => state.get('drivers'));
  const isLoading = useSelector(createLoadingSelector(FETCH_DRIVERS));
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchDrivers());
  }, []);

  return (
    <Card
      title="Kierowcy"
      onBack={() => history.push('/')}
      extra={
        <Button type="primary" onClick={() => history.push('/drivers/create')}>
          {t('drivers.create')}
        </Button>
      }
    >
      <List
        loading={isLoading}
        itemLayout="vertical"
        dataSource={drivers}
        renderItem={driverId => <ListItemDriver id={driverId} />}
      />
    </Card>
  );
};

DriversList.propTypes = {
  history: PropTypes.history.isRequired,
};

export default DriversList;
