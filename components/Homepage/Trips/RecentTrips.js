/* eslint-disable no-unused-vars */
import styled from "styled-components";
import React from "react";
import Link from "next/link";
import Trip from "./Trip";
import { TextSmall } from "../../Text/Body";

// const TextSmall = styled.p`
//   font-size: 14px;
//   color: ${(props) => props.color};
// `;

const Text = styled(TextSmall)`
  font-size: 20px;
  margin: 5px 0;
`;

const RecentTrips = (props) => {
  console.log(props.trips);
  return (
    <div className="trips my-4 flex flex-col justify-between">
      <Text>Your Recent Trips</Text>
      {props.trips && props.trips.slice(0,2).map((trip, index) => (
      <Trip key={trip._id} trip={trip} />
      ))}
      
      <Link href="/trip">
        <a>
        <TextSmall color="#2699fb">See All Trips</TextSmall>
        </a>
      </Link>
    </div>
  );
};

export default RecentTrips;
