import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Breadcrumb as AntdBreadcrumb } from 'antd';
import { styled } from 'ui';
import BreadcrumbItem from './BreadcrumbItem';
import BreadcrumbItemCar from './BreadcrumbItemCar';
import BreadcrumbItemDriver from './BreadcrumbItemDriver';

const StyledBreadcrumb = styled(AntdBreadcrumb)`
  margin: 24px 0;
  padding-bottom: 8px;
  border-bottom: 2px solid lightgray;
`;

const Breadcrumb = props => {
  const { t } = useTranslation();

  return (
    <StyledBreadcrumb {...props}>
      <Route path="/" component={p => <BreadcrumbItem {...p} name={t('common.homepage')} />} />
      <Route path="/cars" component={p => <BreadcrumbItem {...p} name={t('cars.cars')} />} />
      <Switch>
        <Route
          path="/cars/create"
          component={p => <BreadcrumbItem {...p} name={t('cars.create')} />}
        />
        <Route path="/cars/:id" component={BreadcrumbItemCar} />
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
        <Route path="/drivers/:id" component={BreadcrumbItemDriver} />
      </Switch>
    </StyledBreadcrumb>
  );
};

export default Breadcrumb;
