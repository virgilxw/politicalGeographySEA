import React from 'react';
import './Title.css';
import Container from 'react-bootstrap/Container';

const Title = ({ content }) => {
  return (
    <Container id="intro">
      <h1>{content}</h1>
      <div id="byline">
        <p>by</p>
        <p>Reuben X. Wang (reubenwxw@gmail.com)</p>
      </div>
    </Container>
  );
}

export default Title;