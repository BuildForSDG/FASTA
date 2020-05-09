import styled from "styled-components";
import React from "react";
import Trip from "./Trip";

const Text = styled.p`
  padding: 10px 0;
  font-size: 20px;
  margin-top: 10px;
`;

const RecentTrips = (props) => {
  return (
    <div className="trips">
      <Text>Your Recent Trips</Text>
      <Trip />
      <Trip />
    </div>
  );
};

export default RecentTrips;
