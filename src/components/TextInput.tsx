import React from 'react';
import styled from 'styled-components';

interface ITextInputProps {
  id: string;
  name: string;
}

const TextInput: React.FunctionComponent<ITextInputProps> = ({ id, name }) => {
  return <Input type='text' name={name} id={id} autoComplete='off' />;
};

const Input = styled.input`
  border: 1px solid #ababab;
  display: block;
  padding: 0.5rem 0.5rem;
  transition: background 0.3s ease;
  width: 100%;

  :focus {
    border-color: var(--primary-accent);
  }
`;

export default TextInput;
