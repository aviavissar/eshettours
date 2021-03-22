import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { useDispatch } from "react-redux";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export interface IStepListProps {
  allTrips: [];
}

const FilterComponent = ({ allTrips }: IStepListProps) => {
  let [selectedTripsNum, setSelectedTripsNum] = useState<number>(
    allTrips.length
  );
  let [selected, setSelected] = useState<boolean>(false);
  const dispatch = useDispatch();
  let result: any[];

  const doFilter = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSelected(true);
    const text = e.target.value;
    if (text) {
      result = allTrips.filter((element: any) =>
        element.Title.toLowerCase().includes(text.toLowerCase())
      );
      dispatch({ type: "ADD_LIST", list: result });
      setSelectedTripsNum(result.length);
      console.log("text,text", text);
    } else {
      dispatch({ type: "ADD_LIST", list: allTrips });
      setSelectedTripsNum(allTrips.length);
    }
  };

  return (
    <Container className="filter">
      <Row className="row">
        <Col className="m-0" xs={5} md={2}>
          <span>סינון ע"פ:</span>
        </Col>
        <Col className="m-0" xs={3} md={5}>
          <input type="text" onChange={doFilter} />
        </Col>
      </Row>
      <Row className="row">
        <Col className="m-0" xs={12} md={12}>
          <span>
            מציג {selected ? selectedTripsNum : allTrips.length} מתוך
            {allTrips.length}:
          </span>
        </Col>
      </Row>
    </Container>
  );
};
export default FilterComponent;
