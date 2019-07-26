import React from 'react';
import { PropTypes } from 'utils';
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { Map } from 'immutable';

const BreadcrumbItem = ({ match: { url }, name }) => (
  <Breadcrumb.Item>
    <Link to={url}>{name}</Link>
  </Breadcrumb.Item>
);

BreadcrumbItem.propTypes = {
  match: PropTypes.match.isRequired,
  name: PropTypes.string.isRequired,
};

const CarBreadcrumbItem = connect((state, { match: { params: { id } } }) => ({
  name: state.getIn(['entities', 'cars', id, 'plate']),
}))(BreadcrumbItem);

const getDriverName = (driver = Map()) => `${driver.get('firstname')} ${driver.get('lastname')}`;

const DriverBreadcrumbItem = connect((state, { match: { params: { id } } }) => ({
  name: getDriverName(state.getIn(['entities', 'drivers', id])),
}))(BreadcrumbItem);

export default props => (
  <Breadcrumb {...props}>
    <Route path="/" component={p => <BreadcrumbItem {...p} name="Strona Główna" />} />
    <Route path="/cars" component={p => <BreadcrumbItem {...p} name="Auta" />} />
    <Switch>
      <Route
        path="/cars/create"
        component={p => <BreadcrumbItem {...p} name="Stwórz samochód" />}
      />
      <Route path="/cars/:id" component={CarBreadcrumbItem} />
    </Switch>
    <Route path="/drivers" component={p => <BreadcrumbItem {...p} name="Kierowcy" />} />
    <Switch>
      <Route
        path="/drivers/create"
        component={p => <BreadcrumbItem {...p} name="Stwórz kierowcę" />}
      />
      <Route path="/drivers/:id" component={DriverBreadcrumbItem} />
    </Switch>
  </Breadcrumb>
);
