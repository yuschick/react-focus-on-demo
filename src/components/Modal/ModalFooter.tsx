import React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
}

export const ModalFooter: React.FC<Props> = ({ className, children }) => {
  return (
    <Footer className={className} data-autofocus-inside>
      {children}
    </Footer>
  );
};

const Footer = styled.footer`
  align-content: center;
  align-items: center;
  border-top: 1px solid #999;
  display: flex;
  grid-area: footer;
  justify-content: center;
  min-height: 3rem;
  padding: 0.25rem 2rem;
  position: relative;
`;
