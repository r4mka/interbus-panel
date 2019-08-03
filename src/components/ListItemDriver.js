import React from 'react';
import { PropTypes } from 'utils';
import { Row, Col, List, Tag } from 'antd';
import { Link } from 'react-router-dom';
import { Map } from 'immutable';
import { useSelector } from 'react-redux';

const ListItemDriver = ({ id }) => {
  const driver = useSelector(state => state.getIn(['entities', 'drivers', id])) || Map();

  return (
    <List.Item key={id}>
      {/* <List.Item.Meta title={<a href={item.href}>{item.title}</a>} description={item.description} /> */}
      <Row gutter={16}>
        <Col xs={2}>
          <Tag style={{ width: '100%', textAlign: 'center' }} color="green">
            {driver.get('status')}
          </Tag>
        </Col>
        <Col xs={22}>
          <Link to={`/drivers/${id}`}>{`${driver.get('firstname')} ${driver.get(
            'lastname',
          )}`}</Link>
        </Col>
      </Row>
    </List.Item>
  );
};

ListItemDriver.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ListItemDriver;
