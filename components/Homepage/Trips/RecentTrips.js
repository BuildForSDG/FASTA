import styled from "styled-components";
import React from "react";
import Trip from "./Trip";

const Text = styled.p`
  font-size: 20px;
  margin: 10px 0;
`;

const RecentTrips = (props) => {
  return (
    <div className="trips my-4 flex flex-col justify-between">
      <Text>Your Recent Trips</Text>
      <Trip />
      <Trip />
      <span style={{ color: "#2699fb", fontSize: "12px"}}>See All Trips</span>
    </div>
  );
};

export default RecentTrips;
