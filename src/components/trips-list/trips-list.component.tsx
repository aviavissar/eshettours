import React from "react";
import Container from "react-bootstrap/Container";
import Trip from "../trip/trip.component"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


export interface IStepListProps {
  allTrips: [];
}

const TripListComponent = ({ allTrips }: IStepListProps) => {
  return <Container>

<Row className="row">
  {
    allTrips.map(({DepartureId,Img,Title})=>{
   return   <Col key={DepartureId} className='m-0'  xs={12} md={3}>
      <Trip title={Title} img={Img} />
     </Col>
    })
  }
   
    
  </Row>
  </Container>;
};
export default TripListComponent;






// import TripComponent, {
//   ITripComponentProps,

// } from "../trip/trip.component";
//{ steps }: IStepListProps
