import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import GPS from "./GPS";
import NewTrip from "./Trips/NewTrip";
import RecentTrips from "./Trips/RecentTrips";
import NewReport from "./NewReport";
import BottomNav from "../BottomNav";
import Reports from "./Reports/Reports";

const Body = styled.main`
  margin-top: 70px;
  padding-bottom: 60px;
  background: #f5f5f5;
`;

const Homepage = (props) => {
  return (
    <div className="homepage w-screen min-h-screen">
      <NavBar name="Fasta" />
      <Body className="px-4">
        <GPS />
        <NewTrip />
        <RecentTrips />
        <Reports />
        <NewReport />
      </Body>
      <BottomNav />
    </div>
  );
};

export default Homepage;
