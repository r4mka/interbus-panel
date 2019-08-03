import React from 'react';
import { styled } from 'ui';

const Container = styled.div`
  flex: 0 0 auto;
  z-index: 10;
  background-color: white;
  padding: 1rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const Header = () => <Container>header</Container>;

export default Header;
