import React from 'react';
import { createPortal } from 'react-dom';

interface Props {
  mountId?: string;
}

const Portal: React.FC<Props> = ({ mountId = 'root', children }) => {
  const mount: HTMLElement | null = document.getElementById(mountId);

  return mount && createPortal(children, mount);
};

export default Portal;
