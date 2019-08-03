import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ListItemDriver } from 'components';
import { fetchDrivers } from 'actions';
import { createLoadingSelector, FETCH_DRIVERS } from 'reducers';
import { styled } from 'ui';
import { PropTypes } from 'utils';
import { PageHeader, Button, List } from 'antd';

const StyledPageHeader = styled(PageHeader)`
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.22);
`;
const DriversList = ({ history }) => {
  const drivers = useSelector(state => state.get('drivers'));
  const isLoading = useSelector(createLoadingSelector(FETCH_DRIVERS));
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    if (drivers.isEmpty()) {
      dispatch(fetchDrivers());
    }
  }, []);

  return isLoading ? (
    <div>loading...</div>
  ) : (
    <StyledPageHeader
      title="Kierowcy"
      onBack={() => history.push('/')}
      extra={
        <Button type="primary" onClick={() => history.push('/drivers/create')}>
          {t('drivers.create')}
        </Button>
      }
    >
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={drivers}
        renderItem={driverId => <ListItemDriver id={driverId} />}
      />
    </StyledPageHeader>
  );
};

DriversList.propTypes = {
  history: PropTypes.history.isRequired,
};

export default DriversList;
