import React from 'react';
import config from 'config';
import { PropTypes } from 'utils';
import { Tag } from 'antd';
import { useTranslation } from 'react-i18next';

const {
  app: { status: statusList },
} = config;

const getStatusColor = status => {
  switch (status) {
    case 'active':
      return 'green';

    case 'vacation':
    case 'service':
      return 'orange';

    case 'inactive':
    case 'blocked':
      return 'red';

    default:
      return 'green';
  }
};

const Status = ({ status }) => {
  const { t } = useTranslation();

  return <Tag color={getStatusColor(status)}>{t(`status.${status}`)}</Tag>;
};

Status.propTypes = {
  status: PropTypes.oneOf([statusList]),
};

Status.defaultProps = {
  status: statusList[0],
};

export default Status;
