import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export interface ITripComponentProps {
  img: string;
  title:string;
}

const TripComponent = ({ img,title }: ITripComponentProps) => {
  return (
    <div className='box'>
      <Card>
        <Card.Body>
          <Row>
            <Col  xs={6} md={12}>
              <Card.Img variant="top" src={img.replace("{0}", "Maximal")} />
            </Col>
            <Col xs={6} md={12}>
              <Card.Text className="details-box">
            {title}
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TripComponent;
