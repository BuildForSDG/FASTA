/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import Head from "next/head";
import Popup from "../Popup";
import { H1 } from "../Text/Headings";

const StyledLayout = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};

  a {
    color: ${(props) => props.color};
    font-size: 14px;
  }

  h1 {
    line-height: 45px;
  }
`;

const OnBoardingContainerLayout = styled.section`
  width: 400vw;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(4, 100vw);
  grid-auto-flow: row;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  transform: translate(-${(props) => props.screen * 100}vw);
  transition: 0.3s ease-out;
`;

const Layout = (props) => {
  const [screen, setScreen] = useState(0);
  const [showPopup, setShowPopup] = useState(true);

  function changeScreen({ target }) {
    setScreen(target.id);
  }

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Head>
        <title>Fasta {props.header}</title>
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
      {showPopup && window.innerWidth > 998 && <Popup closePopup={togglePopup} />}
      <OnBoardingContainerLayout screen={screen}>
        {props.views.map((view, index) => {
          return (
            <StyledLayout
              bg={view.bg}
              color={view.color}
              key={index}
              className="w-screen h-screen flex flex-col justify-between pb-10 px-6"
            >
              <div className="text-right mt-8">
                <Link href="login">
                  <a className="font-bold">SKIP</a>
                </Link>
              </div>
              <img className="mx-auto my-2" src={view.img} alt="" />
              <div>
                <H1 className="w-10/12 font-bold uppercase mb-8">{view.heading}</H1>
                <p>{view.text}</p>

                <div className="flex justify-end items-center mt-10">
                  <p className="font-bold mr-4">{view.id}/4</p>
                  {view.id < 4 ? (
                    <p
                      className="cursor-pointer font-bold text-2xl"
                      onFocus={changeScreen}
                      onClick={changeScreen}
                      id={view.id}
                    >
                      &rarr;
                    </p>
                  ) : (
                    <Link href="login">
                      <a className="font-bold">Continue</a>
                    </Link>
                  )}
                </div>
              </div>
            </StyledLayout>
          );
        })}
      </OnBoardingContainerLayout>
    </div>
  );
};

export default Layout;
