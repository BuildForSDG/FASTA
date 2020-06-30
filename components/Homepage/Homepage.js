import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import GPS from "./GPS";
import NewTrip from "./Trips/NewTrip";
import RecentTrips from "./Trips/RecentTrips";
import NewReport from "./NewReport";
import BottomNav from "../BottomNav";
import Reports from "./Reports/Reports";
import Map from "../Map";

const Body = styled.main`
  margin-top: 70px;
  padding-bottom: 60px;
  background: #ffffff;
`;

const Homepage = (props) => {
  const [locationText, setLocationText] = useState(null);
  const [coordinates, setCoordinates] = useState({ lat: 6.55, lng: 3.333 });

  useEffect(() => {
    let textContent = "";
    const success = (position) => {
      const { latitude } = position.coords;
      const { longitude } = position.coords;

      textContent = `Lat: ${latitude.toFixed(3)} °, Long: ${longitude.toFixed(3)} °`;
      // console.log(textContent, latitude, longitude);
      setCoordinates({ lat: latitude, lng: longitude });
      setLocationText(textContent);
      props.setLocated(true);
      // console.log(coordinates, props.located, process.env.apiKey);
    };

    const error = () => {
      textContent = "Unable to retrieve your location";
      setLocationText(textContent);
    };

    if (!navigator.geolocation) {
      textContent = "Geolocation is not supported by your browser";
      setLocationText(textContent);
    } else {
      textContent = "Locating…";
      setLocationText(textContent);
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }, []);

  return (
    <div className="homepage screen min-h-screen">
      <NavBar name="Fasta" />
      <Body className="px-4">
        {!props.located ? (
          <GPS />
        ) : (
          <div>
            {locationText}
            <Map lat={coordinates.lat} lng={coordinates.lng} />
          </div>
        )}
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
