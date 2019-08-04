import React from 'react';
import { styled } from 'ui';
import { PropTypes } from 'utils';
import { PageHeader, Spin } from 'antd';

const StyledCard = styled(PageHeader)`
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.22);
  margin-bottom: 16px !important;

  .ant-page-header-content {
    margin-top: 16px;
  }
`;

const SpinContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
`;

const Card = ({ children, loading, ...props }) => (
  <StyledCard {...props}>
    {loading ? (
      <SpinContainer>
        <Spin delay={1000} />
      </SpinContainer>
    ) : (
      children
    )}
  </StyledCard>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
};

Card.defaultProps = {
  loading: false,
};

export default Card;
