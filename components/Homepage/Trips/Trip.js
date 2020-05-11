import styled from "styled-components";
import React from "react";

const TripBody = styled.div`
  background-color: #fff;
  border: 1px solid #afdeb1;
  border-radius: 10px;
  color: #6c6c6c;
  padding: 10px 20px;
  span {
    display: block;
  }
  margin-bottom: 20px;
`;
const Start = styled.span``;
const End = styled.span``;

const Trip = () => {
  return (
    <TripBody className="trip">
      <Start>Start Point : Rumuokoro, Port Harcourt</Start>
      <img src="images/Connector.png" alt="connector" />
      <End>End Point : Rumuokoro, Port Harcourt</End>
    </TripBody>
  );
};

export default Trip;
