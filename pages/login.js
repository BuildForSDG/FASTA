/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import styled from "styled-components";
import { useForm, ErrorMessage } from "react-hook-form";
import { ToastContainer } from "react-nextjs-toast";
// import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";

import Header from "../components/Header";
import Input from "../components/Input";
import { SubmitButton, LoaderContainer } from "../components/Buttons";
import { H3 } from "../components/Text/Headings";
import { TextSmall } from "../components/Text/Body";

const MainStyle = styled.main`
  height: calc(100vh - 78px);
`;

const Login = ({loggedIn, setLoggedIn, user, setUser, getUrl, handleToast }) => {
  // console.log("loggedIn:", loggedIn);
  const [loading, setLoading] = useState(false);
  
  const { register, handleSubmit, errors } = useForm({ validateCriteriaMode: "all" });
 
  const apiUrl = getUrl();

//  sign in
const signIn = async(ev) => {
  console.log(ev, Object.keys(ev));
  setLoading(true);

try {
      const res = await fetch(`${apiUrl}/users/login`, {
                              method: "POST", 
                              body: JSON.stringify(ev), 
                              headers: { "Content-Type" : "application/json"}
                            });
      const response = await res.json();
      console.log(res.status, response);
      if (res.status === 200) {
        setLoggedIn(true);
        // setUser({name: response.user.fullname.split(" ")[0], email: ev.email, number: response.user.phonenumber});
        setUser(response.user);
        handleToast(response.response, "success");
      } else if (res.status >= 500) {
        handleToast("Some connection or server error", "error");
      } else {
        handleToast("Invalid email and/or password", "error");
      }
} catch(e) {
      console.log(e, "Some error in connection, Please try again!");
      handleToast("Error in connection", "error");
} 
  setLoading(false);
};

const onSubmit = (data) => {
  // console.log(data);
  signIn(data);
};

useEffect(() => {
  localStorage.setItem("user", JSON.stringify(user)); 
}, [user]);


  if (loggedIn) {
    Router.push("/home");
  }

  return (
    <div className="w-screen ">
      <Head>
        <title>Fasta Login</title>
        <link rel="icon" href="/images/Logo.png" />
        <link href="/manifest.json" rel="manifest" />
            <meta charset='utf-8' />
            <meta http-quiv='x-UA-Compatible' content='IE=edge'/>
            <meta name='viewport' content='width=device-width,initial-scale=1,minimun-scale=1,maximum-scale=1,user-scalable=no'/>
            <meta name="description" content="Your travel companion" />
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
      </Head>

      <Header />

      <MainStyle className="flex flex-col items-center justify-between">
        <form onSubmit={handleSubmit(onSubmit)} className="w-11/12 mt-32">
          <ToastContainer />
          <H3 color="#43A047" className="text-center mb-4">
            Login
          </H3>
          <Input
            className="mx-auto"
            type="email"
            name="email"
            ref={register({
              required: "Please provide registered email",
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/,
                message: "Email not valid"
              }
            })}
            placeholder="example@email.com"
          />
          <ErrorMessage errors={errors} name="email">
            {({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p key={type} className="text-xs text-red-500 text-center my-2">
                  {message}
                </p>
              ))}
          </ErrorMessage>

          <Input
            className="mx-auto mt-5"
            type="password"
            name="password"
            ref={register({
              required: "Please enter authorized password",
              minLength: {
                value: 8,
                message: "password should be at least 8 characters"
              }
            })}
            placeholder="Password"
          />
          <ErrorMessage errors={errors} name="password">
            {({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p key={type} className="text-xs text-red-500 text-center my-2">
                  {message}
                </p>
              ))}
          </ErrorMessage>

          <Link href="resetpassword">
            <a>
              <TextSmall className="mt-4" color="#43A047">
                Forgot password?
              </TextSmall>
            </a>
          </Link>

          {loading ?
          <LoaderContainer className="w-full mt-6">
            <BeatLoader
            size={30}
            color="#43a047"
            loading
            />
          </LoaderContainer>
          :
          <SubmitButton type="submit" className="w-full mt-6">
            LOGIN
          </SubmitButton>}
        </form>

        <div className="w-full">
          <TextSmall className="mb-3 text-center" color="#43A047">
            Don't have an account?
          </TextSmall>
          <Link href="signup">
            <a>
              <div
                className="cursor-pointer w-full py-4 text-center text-sm"
                style={{
                  backgroundColor: "#7AC77D",
                  color: "#ffffff"
                }}
              >
                REGISTER
              </div>
            </a>
          </Link>
        </div>
      </MainStyle>
    </div>
  );
};

export default Login;
