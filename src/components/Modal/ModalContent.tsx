import React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
}

export const ModalContent: React.FC<Props> = ({ className, children }) => {
  return (
    <Content id='modal-content' className={className} data-autofocus-inside>
      {children}
    </Content>
  );
};

const Content = styled.main`
  background: #efefef;
  grid-area: content;
  padding: 1rem;
`;
