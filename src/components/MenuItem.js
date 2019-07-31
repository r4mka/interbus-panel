import React from 'react';
import { PropTypes } from 'utils';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  margin: 1rem;
  padding: 1rem;
  background-color: #f0f2f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;

  :hover {
    background-color: #d2d8e1;
  }
`;

const MenuItem = ({ icon, name, url }) => (
  <StyledLink to={url}>
    <Icon type={icon} />
    {name}
  </StyledLink>
);

MenuItem.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
};

MenuItem.defaultProps = {
  icon: '',
  name: '',
  url: '',
};

export default MenuItem;
