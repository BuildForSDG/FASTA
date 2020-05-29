/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import styled from "styled-components";
import { useForm, ErrorMessage } from "react-hook-form";
import { ToastContainer, toast } from "react-nextjs-toast";
// import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";

import Header from "../components/Header";
import Input from "../components/Input";
import { SubmitButton, LinkButton, LoaderContainer } from "../components/Buttons";
import { H3 } from "../components/Text/Headings";
import { TextSmall } from "../components/Text/Body";

const MainStyle = styled.main`
  min-height: calc(100vh - 78px);
`;

const AlertCardStyle = styled.div`
  border-radius: 10px;
  padding: 60px 26px 46px;
`;

const Signup = ({loggedIn, getUrl, handleToast}) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");
  console.log("loggedIn:", loggedIn);

  const { register, handleSubmit, errors, watch } = useForm({ validateCriteriaMode: "all" });
  const password = useRef({});
  password.current = watch("password", "");
 
const apiUrl = getUrl();

useEffect(() => {
  const {origin} = window.location;
  setUrl(origin);
}, []);
console.log(url);

//  sign up
const signUp = async(ev) => {
  ev.origin = url;
  console.log(ev, Object.keys(ev));
  setLoading(true);

try {
      const res = await fetch(`${apiUrl}/users`, {
                              method: "POST", 
                              body: JSON.stringify(ev), 
                              headers: { "Content-Type" : "application/json"}
                            });
      console.log(res.status);
      const response = await res.json();
      console.log(response);
      if (res.status === 200) {
      setSubmitted(true);
      } else {
        handleToast(response.response, "error");
      }
} catch(e) {
      console.log(e, "Some error in connection, Please try again!");
      handleToast("Error in connection", "error");
}
  setLoading(false);
}; 

const onSubmit = (data) => {
  console.log(data);
  signUp(data);
};

if (loggedIn) {
  Router.push("/home");
}

  submitted && (document.body.style.overflow = "hidden");

  return (
    <div className="w-screen ">
      <Head>
        <title>Fasta Create Account</title>
        <link rel="icon" href="/images/Logo.png" />
      </Head>

      <Header />

      <MainStyle className="flex flex-col items-center justify-between">
        <form onSubmit={handleSubmit(onSubmit)} className="w-11/12 mt-4">
        <ToastContainer />
          <H3 color="#43A047" className="mb-4 text-center">
            Create an Account
          </H3>
          <Input
            className="mx-auto"
            type="text"
            name="fullname"
            ref={register({
              required: "Please enter your full name",
              minLength: {
                value: 3,
                message: "Please enter complete name"
              }
            })}
            placeholder="Your Full Name"
          />
          <ErrorMessage errors={errors} name="fullname">
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
            type="tel"
            name="phonenumber"
            ref={register({
              required: "Please provide your phone number",
              pattern: {
                value: /\d{11,14}/,
                message: "phone number not valid"
              }
            })}
            placeholder="Phone Number"
          />
          <ErrorMessage errors={errors} name="phonenumber">
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
              required: "Please enter password",
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

          <Input
            className="mx-auto mt-5"
            type="password"
            name="confirmPassword"
            ref={register({
              required: "Please re-enter password",
              minLength: {
                value: 8,
                message: "password should be at least 8 characters"
              },
              validate: (value) => value === password.current || "The passwords do not match"
            })}
            placeholder="Confirm Password"
          />
          <ErrorMessage errors={errors} name="confirmPassword">
            {({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p key={type} className="text-xs text-red-500 text-center my-2">
                  {message}
                </p>
              ))}
          </ErrorMessage>

          <p className="text-xs mt-5 text-center w-10/12 mx-auto" style={{ color: "#43A047" }}>
            By creating an account you agree to our Terms of Service and Privacy Policy
          </p>

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
            Continue
          </SubmitButton>}
        </form>

        <div className="w-full mt-10">
          <p className="text-xs mb-3 text-center" style={{ color: "#43A047" }}>
            Already have an account?
          </p>
          <Link href="login">
            <a>
              <div
                className="cursor-pointer w-full py-4 text-center text-sm"
                style={{
                  backgroundColor: "#7AC77D",
                  color: "#ffffff"
                }}
              >
                LOGIN
              </div>
            </a>
          </Link>
        </div>

        {submitted && (
          <div
            className="h-screen w-screen fixed top-0 left-0 z-40 flex justify-center items-end pb-16"
            style={{ backgroundColor: "#AFDEB199" }}
          >
            <AlertCardStyle className="w-10/12 bg-white">
              <img src="/images/success.svg" alt="" className="mx-auto mb-12" />
              <TextSmall className="text-center mb-6" style={{ color: "#43A047" }}>
                Your Account was created successfully.
              </TextSmall>

              <LinkButton href="login" className="w-10/12 mx-auto">
               <span> Please check your mail to login! </span>
              </LinkButton>
            </AlertCardStyle>
          </div>
        )}
      </MainStyle>
    </div>
  );
};

export default Signup;
