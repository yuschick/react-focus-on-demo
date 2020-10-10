import React from 'react';
import styled from 'styled-components';

const Backdrop: React.FC = () => <Overlay />;

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`;

export default Backdrop;
