import React from 'react';
import styled from 'styled-components';

import { CloseButton } from './CloseButton';

type Alignments = 'left' | 'center' | 'right';
interface Props {
  className?: string;
  align?: Alignments;
  close?: () => void;
}

export const ModalHeader: React.FC<Props> = ({
  className,
  align = 'left',
  close,
  children
}) => {
  return (
    <Header id='modal-header' className={className} align={align}>
      <CloseButton close={close} />
      {children}
    </Header>
  );
};

const Header = styled.header<{ align: Alignments }>`
  border-bottom: 1px solid #999;
  grid-area: header;
  padding: 0.25rem 3rem;
  position: relative;
  text-align: ${({ align }) => align};
`;
