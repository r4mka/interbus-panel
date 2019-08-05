import React from 'react';
import { PropTypes } from 'utils';
import { List } from 'antd';
import { Link } from 'react-router-dom';
import { Map } from 'immutable';
import { useSelector } from 'react-redux';

const ListItemOrder = ({ id }) => {
  const order = useSelector(state => state.getIn(['entities', 'orders', id])) || Map();

  return (
    <List.Item key={id}>
      <Link to={`/orders/${id}`}>{`${order.get('firstname')} ${order.get('lastname')}`}</Link>
    </List.Item>
  );
};

ListItemOrder.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ListItemOrder;
