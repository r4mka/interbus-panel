import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { PropTypes } from 'utils';
import { fetchOrders } from 'actions';
import { createLoadingSelector, FETCH_ORDERS } from 'reducers';
import { Button, List } from 'antd';
import { Card, ListItemOrder } from 'components';

const OrdersList = ({ history }) => {
  const orders = useSelector(state => state.get('orders'));
  const isLoading = useSelector(createLoadingSelector(FETCH_ORDERS));
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  return (
    <Card
      title={t('orders.orders')}
      onBack={() => history.push('/')}
      extra={
        <Button type="primary" onClick={() => history.push('/orders/create')}>
          {t('orders.create')}
        </Button>
      }
    >
      <List
        loading={isLoading}
        itemLayout="vertical"
        dataSource={orders}
        renderItem={orderId => <ListItemOrder id={orderId} />}
      />
    </Card>
  );
};

OrdersList.propTypes = {
  history: PropTypes.history.isRequired,
};

export default OrdersList;
