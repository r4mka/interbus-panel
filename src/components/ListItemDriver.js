import React from 'react';
import { PropTypes } from 'utils';
import { List } from 'antd';
import { Link } from 'react-router-dom';
import { Map } from 'immutable';
import { useSelector } from 'react-redux';
import Status from './Status';

const ListItemDriver = ({ id }) => {
  const driver = useSelector(state => state.getIn(['entities', 'drivers', id])) || Map();

  return (
    <List.Item key={id} extra={<Status status={driver.get('status')} />}>
      <Link to={`/drivers/${id}`}>{`${driver.get('firstname')} ${driver.get('lastname')}`}</Link>
    </List.Item>
  );
};

ListItemDriver.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ListItemDriver;
