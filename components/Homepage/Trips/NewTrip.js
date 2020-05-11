import styled from "styled-components";
import React from "react";

const Body = styled.div`
  background-color: #afdeb1;
  border: 1px solid #bce0fd;
  border-radius: 10px;
  color: #43a047;
  padding: 20px;
`;
const Heading = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

const Text = styled.p`
  font-size: 20px;
  padding: 15px 0;
`;

const NewTrip = (props) => {
  return (
    <div className="new-trip">
      <Text>Welcome Back!</Text>
      <Body>
        <Heading>Plan a new trip</Heading>
        <p>Schedule your next outing</p>
      </Body>
    </div>
  );
};

export default NewTrip;
