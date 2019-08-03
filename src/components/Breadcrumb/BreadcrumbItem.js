import React from 'react';
import { PropTypes } from 'utils';
import { styled } from 'ui';
import { Breadcrumb as AntdBreadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  font-size: 16px;
`;

const BreadcrumbItem = ({ match: { url }, name }) => (
  <AntdBreadcrumb.Item>
    <StyledLink to={url}>{name}</StyledLink>
  </AntdBreadcrumb.Item>
);

BreadcrumbItem.propTypes = {
  match: PropTypes.match.isRequired,
  name: PropTypes.string.isRequired,
};

export default BreadcrumbItem;
