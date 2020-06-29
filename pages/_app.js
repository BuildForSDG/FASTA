/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { useState, useEffect, useSelector } from "react";
import "../styles/styles.css";
import { toast } from "react-nextjs-toast";

import {Provider} from "react-redux";
import withredux from "next-redux-wrapper";
import initializeStore from "../redux/store";

// This default export is required in a new `pages/_app.js` file.
// export default function MyApp({ Component, pageProps }) {
function MyApp({ Component, pageProps }) {

  console.log("page props: ", pageProps);
  
  const store = initializeStore();
  const state = store.getState();
  const { loggedIn, user, locations, located, trips, reports, token } = state;
  // const { loggedIn, user, location, located, trips, reports, token } = useSelector(state => state);
  // console.log(state);

  // const [loggedIn, setLoggedIn] = useState(false);
  // const [located, setLocated] = useState(false);
  // const [location, setLocation] = useState(null);
  // const [reports, setReports] = useState(null);
  // const [trips, setTrips] = useState(null);
  // const [token, setToken] = useState(null);
  // const defaultUser = { name: "Guest", email: "guest@fasta.com", phonenumber: "08099887766" };
  // const [user, setUser] = useState(defaultUser);
  const getUrl = () => {
    // if(location.host.indexOf('localhost') >= 0){
    // return 'http://localhost:8080/api/v1';
    // } else {
    return "https://fasta-app.herokuapp.com/api/v1";
  };
  // }

  const handleToast = (msg, type = "info") => toast.notify(msg, { duration: 5, type });

  const setLoggedIn = (data) => {
    console.log(data);
    store.dispatch({type: "LOGIN", data});
  };

  const setReports = (data) => {
    console.log(data);
    store.dispatch({type: "GET_REPORTS", data});
  };

  const setTrips = (data) => {
    console.log(data);
    store.dispatch({type: "GET_TRIPS", data});
  };

  const setLocation = (data) => {
    console.log(data);
    store.dispatch({type: "SET_LOCATION", data});
  };

  const setLocated = (data) => {
    console.log(data);
    store.dispatch({type: "SET_LOCATED", data});
  };
  
  const setUser = (data) => {
    console.log(data);
    store.dispatch({type: "SET_USER", data});
  };
  
  useEffect(() => {
    // if (localStorage.getItem("user")) {
      // setUser(JSON.parse(localStorage.getItem("user")));
      // setToken(JSON.parse(localStorage.getItem("token")));
      // setLoggedIn(JSON.parse(localStorage.getItem("loggedIn")));
      // setLocation(JSON.parse(localStorage.getItem("location")));
    // } else {
    //   setUser(defaultUser);
    // }
    // console.log(token);
    const fastaStore = JSON.parse(localStorage.getItem("fasta"));
    console.log(fastaStore);
    
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
    <Provider store={store}>
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
      locations={locations}
      setLocation={setLocation}
      reports={reports}
      setReports={setReports}
      trips={trips}
      setTrips={setTrips}
      token={token}
    />
    </Provider>
  );
}

MyApp.getInitialProps = async ({Component, ctx}) => {

  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

  return {pageProps: pageProps};
}

export default withredux(initializeStore)(MyApp);
