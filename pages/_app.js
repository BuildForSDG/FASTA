import React, { useState } from "react";
import "../styles/styles.css";
import "react-toastify/dist/ReactToastify.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const [loggedIn, setLoggedIn] = useState(false);
  return <Component {...pageProps} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />;
}
