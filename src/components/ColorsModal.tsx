import React, { useState } from "react";
import styled from "styled-components";

import Modal from "./Modal";
import Button from "./Button";
import Checkbox from "./Checkbox";

interface IColorsModalProps {
  colors: string[];
  onClose: () => void;
  onSubmit: (color: string[]) => void;
}

const ColorsModal: React.FC<IColorsModalProps> = ({
  colors,
  onClose,
  onSubmit,
}) => {
  const [modalColors, setModalColors] = useState<string[]>(colors);

  const onClickCheckbox = (value: string) => {
    const temp: string[] = Array.from(modalColors);
    temp.push(value);
    setModalColors(temp);
  };

  return (
    <Modal.Container close={onClose}>
      <Modal.Header align="left">
        <h1>Pick your favorite colors</h1>
      </Modal.Header>
      <Content>
        <Checkbox
          id="blue"
          label="Blue"
          onClick={() => onClickCheckbox("blue")}
        />
        <Checkbox
          id="green"
          label="Green"
          onClick={() => onClickCheckbox("green")}
        />
        <Checkbox id="red" label="Red" onClick={() => onClickCheckbox("red")} />
        <Checkbox
          id="orange"
          label="Orange"
          onClick={() => onClickCheckbox("orange")}
        />
        <Checkbox
          id="teal"
          label="Teal"
          onClick={() => onClickCheckbox("teal")}
        />
        <Checkbox
          id="black"
          label="Black"
          onClick={() => onClickCheckbox("black")}
        />
        <Checkbox
          id="pink"
          label="Pink"
          onClick={() => onClickCheckbox("pink")}
        />
        <Checkbox
          id="beige"
          label="Beige"
          onClick={() => onClickCheckbox("beige")}
        />
        <Checkbox
          id="maroon"
          label="Maroon"
          onClick={() => onClickCheckbox("maroon")}
        />
        <Checkbox
          id="grey"
          label="Grey"
          onClick={() => onClickCheckbox("grey")}
        />
      </Content>
      <Modal.Footer>
        <Button
          onClick={() => {
            onSubmit(modalColors);
            onClose();
          }}
        >
          Submit colors
        </Button>
      </Modal.Footer>
    </Modal.Container>
  );
};

const Content = styled(Modal.Content)`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
`;

export default ColorsModal;
