import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
export interface IHeaderProps {
  title: string;
}

const Header = ({ title }: IHeaderProps) => {
  return (
   
      <Container className="App-header">
        <Row>
         
          <Col xs={12} md={12}>
         <h1>{title}</h1>
          </Col>
        </Row>
      </Container>
   
  );
};

export default Header;
