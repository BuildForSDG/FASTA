import React, { useState, useEffect } from "react";
import Router from "next/router";
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
  // const [tokenInvalid, setTokenInvalid] = useState(false);
  const [coordinates, setCoordinates] = useState({});

  useEffect(() => {
   
    let textContent = "";
    const success = (position) => {
      const { latitude } = position.coords;
      const { longitude } = position.coords;

      textContent = `Lat: ${latitude.toFixed(3)} °, Long: ${longitude.toFixed(3)} °`;
      // console.log(textContent, latitude, longitude);
      setCoordinates({ lat: latitude, lng: longitude });
      props.setLocation({ lat: latitude, lng: longitude });
      localStorage.setItem("location", JSON.stringify(props.locations)); 
      setLocationText(textContent);
      props.setLocated(true);
      console.log(props.locations, props.located);
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
    
    (async () => {
      const apiUrl = props.getUrl();
      console.log(props);
    try {
      const res = await fetch(`${apiUrl}/trips`, {
                              method: "GET", 
                              headers: { "Content-Type" : "application/json",
                                        "Authorization": `Bearer ${props.token}`}
                            });
      const response = await res.json();
      console.log(res.status, response);
      if (res.status === 200) {
        const getTrips = response;
        props.setTrips(getTrips.response);
        return {getTrips};
      } else if (res.status === 403) {
        // setTokenInvalid(true);
        props.setLoggedIn(false);
        // localStorage.setItem("loggedIn", JSON.stringify(props.loggedIn)); 
        Router.push("/login");
        return;
      } else {
        const getTrips = {response: []};
        props.setTrips(getTrips.response);
        return getTrips;
      }
      } catch(e) {
          console.log(e, "Some error in connection, Please try again!");
        // const getTrips = {response: e.message};
        const getTrips = {response: []};
        return {getTrips};
        }
      })();

      console.log(props.locations);
    const apiUrl = new URL(`${props.getUrl()}/reports`);
   
    (async () => {
      if (props.locations === null) {
        const getReports = {response: [{_id: 0, description: "Your location is not available!"}]};
        props.setReports(getReports.response);
        return getReports;
      }      
      apiUrl.searchParams.set('lat', props.locations.lat);
      apiUrl.searchParams.set('lng', props.locations.lng);
      try {
        const res = await fetch(`${apiUrl}`, {
                                method: "GET", 
                                headers: { "Content-Type" : "application/json"}
                              });
        const response = await res.json();
        console.log(res.status, response);
        if (res.status === 200) {
          const getReports = response;
          props.setReports(getReports.response);
          return {getReports};
        } else {
          const getReports = {response: []};
            props.setReports(getReports.response);
            return {getReports};
          }
        } catch(e) {
            console.log(e, "Some error in connection, Please try again!");
            const getReports = {response: [{_id: 0, description: "Error loading reports!"}]};
            props.setReports(getReports.response);
            return {getReports};
          }
    })();
    return () => {}
  }, []);

  return (
    <div className="homepage w-screen min-h-screen">
      <NavBar name="Fasta" />
      <Body className="px-4">
        {!props.located ? (
          <GPS />
        ) : (
          <div>
            {/* {locationText} */}
            {/* <Map lat={coordinates.lat} lng={coordinates.lng} /> */}
            <Map lat={props.locations && props.locations.lat} lng={props.locations && props.locations.lng} />
          </div>
        )}
        <NewTrip user={props.user} locations={props.locations} />
        <RecentTrips trips={props.trips} />
        <Reports reports={props.reports} />
        <NewReport />
      </Body>
      {/* <BottomNav homeColor={{color: "#fff"}} /> */}
      <BottomNav />
    </div>
  );
};

export default Homepage;
