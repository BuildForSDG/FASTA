import styled from "styled-components";
import React from "react";
import { H3 } from "../../Text/Headings";
import { TextSmall } from "../../Text/Body";

const Body = styled.div`
  background-color: #afdeb1;
  border: 1px solid #bce0fd;
  border-radius: 10px;
  color: #43a047;
  padding: 20px;
`;

const Text = styled(TextSmall)`
  font-size: 20px;
  padding: 10px 0;
`;

const NewTrip = props => {
  return (
    <div className="new-trip">
      <Text>Welcome back {props.user}!</Text>
      <Body>
        <H3>Plan a new trip</H3>
        <p>Schedule your next outing</p>
      </Body>
    </div>
  );
};

export default NewTrip;
