import React from 'react';
import { PropTypes } from 'utils';
import { Link } from 'react-router-dom';
import { Map } from 'immutable';
import { useSelector } from 'react-redux';
import { List, Tag } from 'antd';
import Status from './Status';

const ListItemCar = ({ id }) => {
  const car = useSelector(state => state.getIn(['entities', 'cars', id])) || Map();

  return (
    <List.Item
      key={id}
      extra={[<Tag>{car.get('carModel')}</Tag>, <Status status={car.get('status')} />]}
    >
      <Link to={`/cars/${id}`}>{car.get('plate')}</Link>
    </List.Item>
  );
};

ListItemCar.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ListItemCar;
