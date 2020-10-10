import React from "react";
import { FocusOn } from "react-focus-on";

import Portal from "./Portal";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

interface Props {
  className?: string;
  close: () => void;
}

export const ModalContainer: React.FC<Props> = ({
  className,
  close,
  children,
}) => {
  return (
    <Portal>
      <Backdrop />
      <FocusOn onClickOutside={close} onEscapeKey={close}>
        <Modal className={className}>
          {React.Children.map(children as React.ReactElement[], function (
            child: React.ReactElement
          ) {
            return child && React.cloneElement(child, { close });
          })}
        </Modal>
      </FocusOn>
    </Portal>
  );
};
