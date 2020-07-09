/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { useState, useEffect } from "react";
import "../styles/styles.css";
import { toast } from "react-nextjs-toast";
import Cookie from "js-cookie";
import cookies from "next-cookies";

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps, initialLoggedIn, initialUser, initialToken, initialLocation, initialLocated, initialReports, initialTrips }) {
  const [loggedIn, setLoggedIn] = useState(() => initialLoggedIn || false);
  const [located, setLocated] = useState(() => initialLocated || false);
  const [location, setLocation] = useState(() => initialLocation || {});
  const [reports, setReports] = useState(() => initialReports || []);
  const [trips, setTrips] = useState(() => initialTrips || []);
  const [token, setToken] = useState(() => initialToken || "");
  const defaultUser = { fullname: "Guest Fasta", email: "guest@fasta.com", phonenumber: "08099887766" };
  const [user, setUser] = useState(() => initialUser || defaultUser);
  const getUrl = () => {
    // if(location.host.indexOf('localhost') >= 0){
    // return 'http://localhost:8080/api/v1';
    // } else {
    return "https://fasta-app.herokuapp.com/api/v1";
  };
 
  const handleToast = (msg, type = "info") => toast.notify(msg, { duration: 5, type });
  console.log("loggedIn: ", loggedIn, "location: ", location);
  useEffect(() => {
      Cookie.set("loggedIn", loggedIn);
      // Cookie.set("user", JSON.stringify(user));
      Cookie.set("user", user);
      Cookie.set("token", token);
      Cookie.set("location", location);
      Cookie.set("located", located);
      Cookie.set("reports", JSON.stringify(reports));
      Cookie.set("trips", JSON.stringify(trips));

     const loadScript = (url) => {
         let script = document.createElement("script");
         script.type = "text/javascript";
      
         if (script.readyState) {
           script.onreadystatechange = function() {
             if (script.readyState === "loaded" || script.readyState === "complete") {
               script.onreadystatechange = null;
               console.log("script-1");
             }
           };
         } else {
           script.onload = () => console.log("script-2");
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
  }, [loggedIn, user, token, location, located, reports, trips]);

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

MyApp.getInitialProps = ({Component, ctx}) => {
  const allCookies = cookies(ctx);
  // const cookiesLog = Cookie.get();
  const pageProps = Component.getInitialProps ? Component.getInitialProps(ctx) : {};
  // console.log("allCookies: ", allCookies, pageProps, cookiesLog);
  return {
    initialLoggedIn: allCookies.loggedIn,
    initialUser: allCookies.user,
    initialToken: allCookies.token,
    initialLocation: allCookies.location,
    initialLocated: allCookies.located,
    initialReports: allCookies.reports,
    initialTrips: allCookies.trips
  };
}

export default MyApp;