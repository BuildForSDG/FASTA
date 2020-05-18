import React, { useState } from "react";
import "../styles/styles.css";
// import "react-toastify/dist/ReactToastify.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("Guest");
  const getUrl = () => {
    // if(location.host.indexOf('localhost') >= 0){
    //     console.log("functions");
    //   return 'http://localhost:8080/api/v1';
    // } else {
    return "https://fastaapp.herokuapp.com/api/v1";
  };
  // }

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
