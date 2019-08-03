import React from 'react';
import { PropTypes } from 'utils';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import { styled } from 'ui';
import { darken } from 'polished';

const StyledLink = styled(Link)`
  margin: 8px 0;
  padding: 2rem 0.5rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.22);

  :hover {
    background-color: ${darken(0.1, '#fff')};
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
