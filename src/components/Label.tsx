import React from 'react';
import styled from 'styled-components';

interface ILabelProps {
  inputId: string;
}

const Label: React.FunctionComponent<ILabelProps> = ({ inputId, children }) => {
  return <StyledLabel htmlFor={inputId}>{children}</StyledLabel>;
};

const StyledLabel = styled.label`
  display: block;
  text-transform: uppercase;
`;

export default Label;
