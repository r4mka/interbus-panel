import styled from 'styled-components';
import facepaint from 'facepaint';

const breakpoints = [576, 768, 992, 1200];
export const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #fafafa;
`;

export const OverflowWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  justify-content: space-between;
`;

export const Content = styled.div`
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
`;

export const Page = styled.div`
  ${mq({
    margin: ['1rem', '2rem'],
  })};
  max-width: 1000px;
  flex: 1;
`;
