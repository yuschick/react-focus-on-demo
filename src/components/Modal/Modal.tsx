import React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
}

const Modal: React.FC<Props> = ({ className, children }) => {
  return (
    <Wrapper
      className={className}
      role='dialog'
      aria-labelledby='modal-header'
      aria-describedby='modal-content'
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #fff;
  border: 1px solid #999;
  border-radius: 5px;
  box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.5);
  display: grid;
  grid-template-areas:
    'header'
    'content'
    'footer';
  grid-template-rows: min-content auto min-content;
  height: 300px;
  left: 50%;
  max-width: 500px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

export default Modal;
