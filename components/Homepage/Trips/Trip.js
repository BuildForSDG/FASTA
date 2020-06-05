import styled from "styled-components";
import React from "react";
import { TextSmall } from "../../Text/Body";


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

const Trip = (props) => {
  return (
    <TripBody className="trip">
       <p style={{ color: "#2699FB" }} className="text-xs">
        Start Position
      </p>
      <TextSmall color="#6C6C6C">{props.origin}</TextSmall>
      <p style={{ color: "#2699FB" }} className="text-xs mt-4">
        End Position
      </p>
      <TextSmall color="#6C6C6C">{props.destination}</TextSmall>
    </TripBody>
  );
};

export default Trip;
