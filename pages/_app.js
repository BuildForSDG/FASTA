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
      setLocation(JSON.parse(localStorage.getItem("location")));
    } else {
      setUser(defaultUser);
    }
    console.log(token);

     const loadScript = (url) => {
         let script = document.createElement("script");
         script.type = "text/javascript";
      
         if (script.readyState) {
           script.onreadystatechange = function() {
             if (script.readyState === "loaded" || script.readyState === "complete") {
               script.onreadystatechange = null;
               console.log('script-1');
             }
           };
         } else {
           script.onload = () => console.log('script-2');
         }
      
         script.src = url;
         document.getElementsByTagName("head")[0].appendChild(script);
       };
        const key= "AIzaSyAm00Wsdh6jJB2QzlW5c6t_nu0gMRAZB9s";
        const scriptUrl = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`;
        loadScript(scriptUrl);
       return () => {
         // cleanup
       };
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
