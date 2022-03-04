import React from 'react';

import Container from 'react-bootstrap/Container';
import Title from './Essay/Title';
import Section1 from './Essay/Section1';
import './Essay.css';

const Essay = () => {
  return (
    <Container id="body">
      <Title content="Colonialism and the Formation of Southeast Asia's Nation-states" />
      <Section1 />
    </Container>
  );
}

export default Essay;
