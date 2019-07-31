import React from 'react';
import { PropTypes } from 'utils';
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';
import { Breadcrumb as AntdBreadcrumb } from 'antd';
import { Map } from 'immutable';
import { useTranslation } from 'react-i18next';

const BreadcrumbItem = ({ match: { url }, name }) => (
  <AntdBreadcrumb.Item>
    <Link to={url}>{name}</Link>
  </AntdBreadcrumb.Item>
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

const Breadcrumb = props => {
  const { t } = useTranslation();

  return (
    <AntdBreadcrumb {...props}>
      <Route path="/" component={p => <BreadcrumbItem {...p} name={t('common.homepage')} />} />
      <Route path="/cars" component={p => <BreadcrumbItem {...p} name={t('cars.cars')} />} />
      <Switch>
        <Route
          path="/cars/create"
          component={p => <BreadcrumbItem {...p} name={t('cars.create')} />}
        />
        <Route path="/cars/:id" component={CarBreadcrumbItem} />
      </Switch>
      <Route
        path="/drivers"
        component={p => <BreadcrumbItem {...p} name={t('drivers.drivers')} />}
      />
      <Switch>
        <Route
          path="/drivers/create"
          component={p => <BreadcrumbItem {...p} name={t('drivers.create')} />}
        />
        <Route path="/drivers/:id" component={DriverBreadcrumbItem} />
      </Switch>
    </AntdBreadcrumb>
  );
};

export default Breadcrumb;
