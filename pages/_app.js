import React, { useState, useEffect } from "react";
import "../styles/styles.css";
// import "react-toastify/dist/ReactToastify.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const defaultUser = {name : "Guest", email: "guest@fasta.com", number: "08099887766"};
  const [user, setUser] = useState(defaultUser);
  const getUrl = () => {
    // if(location.host.indexOf('localhost') >= 0){
      return 'http://localhost:8080/api/v1';
    // } else {
    // return "https://fastaapp.herokuapp.com/api/v1";
  };
  // }

useEffect(() => {
  if (localStorage.getItem('user')) {
  setUser(JSON.parse(localStorage.getItem('user')));
  } else {
   setuser(defaultUser);
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
    />
  );
}
