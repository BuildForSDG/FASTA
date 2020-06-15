/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { useState, useEffect } from "react";
import "../styles/styles.css";
import { toast } from "react-nextjs-toast";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [located, setLocated] = useState(false);
  const [location, setLocation] = useState(null);
  const [reports, setReports] = useState(null);
  const [trips, setTrips] = useState(null);
  const [token, setToken] = useState(null);
  const defaultUser = { name: "Guest", email: "guest@fasta.com", phonenumber: "08099887766" };
  const [user, setUser] = useState(defaultUser);
  const getUrl = () => {
    // if(location.host.indexOf('localhost') >= 0){
    // return 'http://localhost:8080/api/v1';
    // } else {
    return "https://fasta-app.herokuapp.com/api/v1";
  };
  // }

  const handleToast = (msg, type = "info") => toast.notify(msg, { duration: 5, type });

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
      setToken(JSON.parse(localStorage.getItem("token")));
      setLoggedIn(JSON.parse(localStorage.getItem("loggedIn")));
    } else {
      setUser(defaultUser);
    }
  }, []);

  return (
    <Component
      {...pageProps}
      loggedIn={loggedIn}
      setLoggedIn={setLoggedIn}
      user={user}
      setUser={setUser}
      getUrl={getUrl}
      handleToast={handleToast}
      located={located}
      setLocated={setLocated}
      location={location}
      setLocation={setLocation}
      reports={reports}
      setReports={setReports}
      trips={trips}
      setTrips={setTrips}
      token={token}
      setToken={setToken}
    />
  );
}
