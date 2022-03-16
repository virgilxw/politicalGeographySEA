import React from "react";
import Container from "react-bootstrap/Container";
import Title from "./Essay/Title";
import Section1 from "./Essay/Section1";

import "./Essay.css";
const Essay = () => {
  return (
    <Container id="body" fluid className="p-0">
      <Title content="Political Geography Along the Mekong River" />
      <Section1 />
    </Container>
  );
};

export default Essay;
