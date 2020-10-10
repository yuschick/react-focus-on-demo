import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

interface IButtonProps {
  onClick: () => void;
}

const Button: React.FunctionComponent<IButtonProps> = ({
  onClick,
  children
}) => {
  return (
    <StyledButton type='button' onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background: var(--primary-accent);
  border: 0;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 0.75rem;
  min-width: 125px;
  padding: 0.5rem;
  text-align: center;
  text-transform: uppercase;
  transition: background 0.3s ease;

  :focus,
  :hover {
    background: ${lighten(0.2, '#2274A5')};
  }
`;

export default Button;
