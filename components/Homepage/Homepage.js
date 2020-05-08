/* eslint-disable no-console */
import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import GPS from './GPS';
import NewTrip from './Trips/NewTrip';
import RecentTrips from './Trips/RecentTrips';
import Report from './NewReport';
import BottomNav from './BottomNav';

const Body = styled.main`
  margin: 20px;
  margin-top: 70px;
`;
const Homepage = props => {
  console.log(props);
  return (
    <div className="homepage w-screen h-screen">
      <NavBar name="Fasta" />
      <Body>
        <GPS />
        <NewTrip />
        <RecentTrips />
        <Report />
      </Body>
      <BottomNav />
    </div>
  );
};

export default Homepage;
