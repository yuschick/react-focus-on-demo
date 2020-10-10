import React from 'react';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';

enum ALIGNMENTS {
  LEFT = 'left',
  RIGHT = 'right'
}

interface Props {
  align?: ALIGNMENTS.LEFT | ALIGNMENTS.RIGHT;
  close?: () => void;
}

export const CloseButton: React.FC<Props> = ({
  align = ALIGNMENTS.LEFT,
  close
}) => {
  return (
    <Button align={align} onClick={close} aria-label='Close'>
      <CloseIcon />
    </Button>
  );
};

const Button = styled.button<{ align: ALIGNMENTS.LEFT | ALIGNMENTS.RIGHT }>`
  align-content: center;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 50%;
  box-shadow: 0;
  cursor: pointer;
  display: flex;
  left: ${({ align }) => align === ALIGNMENTS.LEFT && 0};
  justify-content: center;
  margin: 0 0.5rem;
  padding: 0.25rem;
  position: absolute;
  right: ${({ align }) => align === ALIGNMENTS.RIGHT && 0};
  top: 50%;
  transform: translateY(-50%);
  transition: border 0.2s ease;

  &:focus {
    border: 1px solid #333;
    outline: 0;
  }

  svg {
    height: 22px;
    width: 22px;
  }
`;
