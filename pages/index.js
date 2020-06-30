// /* eslint-disable prettier/prettier */
import Head from "next/head";
import React, { useState, useEffect } from "react";
import views from "../components/OnBoardingLayout/view";
import Layout from "../components/OnBoardingLayout/Layout";

export default function Hom() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
    // return () => {
    //   console.log('splash loaded');
    // };
  }, []);
  return (
    <div>
      <Head>
        <title>Fasta</title>
        <meta charset="utf-8" />
        <meta http-quiv="x-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimun-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Your Travel Companion" />
        <meta name="keywords" content="travel, faster, safe trip, vehicle, taxi, map, plan" />

        {/* <!-- Android  --> */}
        <meta name="theme-color" content="#43a047" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* <!-- iOS --> */}
        <meta name="apple-mobile-web-app-title" content="Application Title" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* <!-- Windows  --> */}
        <meta name="msapplication-navbutton-color" content="red" />
        <meta name="msapplication-TileColor" content="red" />
        <meta name="msapplication-TileImage" content="ms-icon-144x144.png" />
        <meta name="msapplication-config" content="browserconfig.xml" />

        {/* <!-- Pinned Sites  --> */}
        <meta name="application-name" content="Application Name" />
        <meta name="msapplication-tooltip" content="Tooltip Text" />
        <meta name="msapplication-starturl" content="/" />

        {/* <!-- Tap highlighting  --> */}
        <meta name="msapplication-tap-highlight" content="no" />

        {/* <!-- UC Mobile Browser  --> */}
        <meta name="full-screen" content="yes" />
        <meta name="browsermode" content="application" />

        {/* <!-- Disable night mode for this page  --> */}
        <meta name="nightmode" content="enable/disable" />

        {/* <!-- Fitscreen  --> */}
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />

        {/* <!-- Layout mode --> */}
        <meta name="layoutmode" content="fitscreen/standard" />

        {/* <!-- imagemode - show image even in text only mode  --> */}
        <meta name="imagemode" content="force" />

        {/* <!-- Orientation  --> */}
        <meta name="screen-orientation" content="portrait" />

        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#43a047" />
        <link rel="icon" href="/images/Logo.png" />
        {/* <!-- Main Link Tags  --> */}
        <link href="/images/icons/favicon-16.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="/images/icons/favicon-32.png" rel="icon" type="image/png" sizes="32x32" />
        <link href="/images/icons/favicon-48.png" rel="icon" type="image/png" sizes="48x48" />

        {/* <!-- iOS  --> */}
        <link href="touch-icon-iphone.png" rel="apple-touch-icon" />
        <link href="touch-icon-ipad.png" rel="apple-touch-icon" sizes="76x76" />
        <link href="touch-icon-iphone-retina.png" rel="apple-touch-icon" sizes="120x120" />
        <link href="touch-icon-ipad-retina.png" rel="apple-touch-icon" sizes="152x152" />

        {/* <!-- Startup Image  --> */}
        <link href="touch-icon-start-up-320x480.png" rel="apple-touch-startup-image" />

        {/* <!-- Pinned Tab  --> */}
        <link href="/images/logo.png" rel="mask-icon" size="any" color="red" />

        {/* <!-- Android  --> */}
        <link href="/images/icons/icon-192x192.png" rel="icon" sizes="192x192" />
        <link href="/images/icons/icon-128x128.png" rel="icon" sizes="128x128" />

        {/* <!-- Others --> */}
        <link href="favicon.icon" rel="shortcut icon" type="image/x-icon" />

        {/* <!-- UC Browser  --> */}
        <link href="/images/icons/icon-52x52.png" rel="apple-touch-icon-precomposed" sizes="57x57" />
        <link href="/images/icons/icon-72x72.png" rel="apple-touch-icon" sizes="72x72" />

        <link rel="apple-touch-icon" sizes="57x57" href="/images/icons/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/images/icons/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/images/icons/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/images/icons/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/images/icons/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/images/icons/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/images/icons/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/images/icons/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/icons/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/icons/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/images/icons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/icons/favicon-16x16.png" />

        {/* <!-- Manifest.json  --> */}
        <link href="/manifest.json" rel="manifest" />
      </Head>
      {!loaded ? (
        <div className="w-screen h-screen flex justify-center items-center" style={{ backgroundColor: "#FFF" }}>
          <img src="/images/Logo.png" alt="" />
        </div>
      ) : (
        <Layout views={views} />
      )}
    </div>
  );
}
