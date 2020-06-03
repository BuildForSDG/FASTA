/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { useState, useEffect } from "react";
import "../styles/styles.css";
import { toast } from "react-nextjs-toast";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [located, setLocated] = useState(false);
  const defaultUser = { fullname: "Guest", email: "guest@fasta.com", phonenumber: "08099887766" };
  const [user, setUser] = useState(defaultUser);
  const getUrl = () => {
    // if(location.host.indexOf('localhost') >= 0){
    // return 'http://localhost:8080/api/v1';
    // } else {
    return "https://fastaapp.herokuapp.com/api/v1";
  };
  // }

  const handleToast = (msg, type = "info") => toast.notify(msg, { duration: 10, type });

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
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
    />
  );
}
