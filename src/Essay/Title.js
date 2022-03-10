import React from 'react';
import './Title.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Title = ({ content }) => {
  return (
    <Row className="py-5 g-0">
      <Col id="intro" md={{ span: 10, offset: 1 }} className="p-5">
        <Container>
          <h1>{content}</h1>
          <div id="byline">
            <p>by</p>
            <p>Reuben X. Wang </p>
            <p>reubenwxw@gmail.com</p>
          </div>
        </Container>
      </Col>
    </Row>
  );
}

export default Title;