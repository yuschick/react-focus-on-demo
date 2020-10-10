import React from 'react';
import styled from 'styled-components';

interface ICheckboxProps {
  id: string;
  label: string;
  onClick: () => void;
}

const Checkbox: React.FunctionComponent<ICheckboxProps> = ({
  id,
  label,
  onClick
}) => {
  return (
    <span>
      <Input id={id} type='checkbox' value={label} onClick={onClick} />
      <label htmlFor={id}>{label}</label>
    </span>
  );
};

const Input = styled.input`
  opacity: 0;
  position: absolute;

  & + label {
    position: relative;
    cursor: pointer;
    padding: 0;
  }

  & + label:before {
    content: '';
    margin-right: 10px;
    display: inline-block;
    vertical-align: text-top;
    width: 20px;
    height: 20px;
    background: white;
  }

  &:focus + label:before {
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
  }

  &:checked + label:before {
    background: var(--primary-accent);
  }

  &:disabled + label {
    color: #b8b8b8;
    cursor: auto;
  }

  &:disabled + label:before {
    box-shadow: none;
    background: #ddd;
  }

  &:checked + label:after {
    content: '';
    position: absolute;
    left: 5px;
    top: 9px;
    background: white;
    width: 2px;
    height: 2px;
    box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white,
      4px -6px 0 white, 4px -8px 0 white;
    transform: rotate(45deg);
  }
`;

export default Checkbox;
