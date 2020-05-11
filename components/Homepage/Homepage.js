import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import GPS from "./GPS";
import NewTrip from "./Trips/NewTrip";
import RecentTrips from "./Trips/RecentTrips";
import NewReport from "./NewReport";
import BottomNav from "./BottomNav";
import Reports from "./Reports/Reports";

const Body = styled.main`
  margin: 20px;
  margin-top: 70px;
`;
const Homepage = (props) => {
  return (
    <div className="homepage w-screen h-screen">
      <NavBar name="Fasta" />
      <Body>
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
