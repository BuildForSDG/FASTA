/* eslint-disable no-unused-vars */
import styled from "styled-components";
import React from "react";
import Trip from "./Trip";
import { TextSmall } from "../../Text/Body";

const Text = styled(TextSmall)`
  font-size: 20px;
  margin: 5px 0;
`;

const RecentTrips = props => {
  return (
    <div className="trips my-4 flex flex-col justify-between">
      <Text>Your Recent Trips</Text>
      <Trip />
      <Trip />
      <TextSmall color="#2699fb">See All Trips</TextSmall>
    </div>
  );
};

export default RecentTrips;
