import React, { useState } from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import Label from './components/Label';
import TextInput from './components/TextInput';
import Button from './components/Button';
import ColorsModal from './components/ColorsModal';

const Main = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [colors, setColors] = useState<string[]>([]);

  return (
    <Container>
      {modal && (
        <ColorsModal
          colors={colors}
          onClose={() => setModal(false)}
          onSubmit={setColors}
        />
      )}
      <Header />
      <MainContent>
        <Form>
          <div>
            <Label inputId='name'>Name</Label>
            <TextInput name='name' id='name' />
          </div>
          <div>
            <Label inputId='name'>Favorite Color(s)</Label>
            {!colors.length && (
              <NoSelectionText>No colors selected</NoSelectionText>
            )}
            {!!colors.length && <Colors>{colors.join(', ')}</Colors>}
            <Button onClick={() => setModal(true)}>View colors</Button>
          </div>
        </Form>
      </MainContent>
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  align-content: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100%;
`;

const MainContent = styled.main`
  background: white;
  border: 1px solid #dedede;
  margin: 2rem auto;
  max-width: 70%;
  padding: 1rem;
  width: 100%;
`;

const Form = styled.form`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr;
  width: 100%;
`;

const NoSelectionText = styled.p`
  color: var(--secondary-dark);
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
`;

const Colors = styled.p`
  margin-bottom: 0.5rem;
  text-transform: capitalize;
`;

export default Main;
