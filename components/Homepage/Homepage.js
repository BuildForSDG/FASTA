import React, { useState, useEffect } from "react";
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
  const [locationText, setLocationText] = useState(null);

  useEffect(() => {
    let textContent = '';
    const success = (position) => {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      const href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      textContent = `Lat: ${latitude} °, Long: ${longitude} °`;
      console.log(textContent);
      props.setLocated(true);
      setLocationText(textContent);
    }
  
    const error = () => {
      textContent = 'Unable to retrieve your location';
      setLocationText(textContent);
    }
  
    if(!navigator.geolocation) {
      textContent = 'Geolocation is not supported by your browser';
      setLocationText(textContent);
    } else {
      textContent = 'Locating…';
      setLocationText(textContent);
      navigator.geolocation.watchPosition(success, error);
    }
  }, []);

  return (
    <div className="homepage w-screen min-h-screen">
      <NavBar name="Fasta" />
      <Body className="px-4">
        {!props.located ? <GPS /> : <div>{locationText}</div>}
        <NewTrip user={props.user} />
        <RecentTrips />
        <Reports />
        <NewReport />
      </Body>
      {/* <BottomNav homeColor={{color: "#fff"}} /> */}
      <BottomNav />
    </div>
  );
};

export default Homepage;
