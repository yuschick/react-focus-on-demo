import React from 'react';
import styled from 'styled-components';

const Header: React.FunctionComponent = () => {
  return (
    <StyledHeader>
      <Title>
        Easy accessibility <span>with</span> React-Focus-On
      </Title>
      <SquareDetail />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  align-content: center;
  border-bottom: 1px solid var(--primary-accent);
  display: flex;
  margin: 0 auto;
  max-width: 70%;
  padding: 1rem;
  position: relative;
  width: 100%;
`;

const Title = styled.h1`
  font-family: var(--primary-font);
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
  max-width: 420px;
  -webkit-text-stroke-color: var(--primary-dark);
  -webkit-text-stroke-width: 0.5px;
  text-transform: uppercase;

  span {
    color: var(--primary-accent);
    -webkit-text-stroke: 0;
  }
`;

const SquareDetail = styled.div`
  background: var(--primary-accent);
  bottom: 0;
  height: 25px;
  position: absolute;
  right: 0;
  width: 25px;
`;

export default Header;
