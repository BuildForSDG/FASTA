/* eslint-disable no-unused-vars */
import styled from "styled-components";
import React from "react";
import Link from "next/link";
import Trip from "./Trip";
import { TextSmall } from "../../Text/Body";

const Text = styled(TextSmall)`
  font-size: 20px;
  margin: 5px 0;
`;

const RecentTrips = () => {
  return (
    <div className="trips my-4 flex flex-col justify-between">
      <Text>Your Recent Trips</Text>
      <Trip origin="Rumuokoro, Port Harcourt" destination="Choba, Port Harcourt" />
      <Trip origin="Asaba, Delta State" destination="Ikeja, Lagos" />
      <Link href="/trips/scheduled-trips">
        <a>
          <span style={{ color: "#2699fb", fontSize: "12px" }}>See All Trips</span>
        </a>
      </Link>
    </div>
  );
};

export default RecentTrips;
