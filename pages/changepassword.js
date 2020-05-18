/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable no-console */
import React, { useState, useRef } from "react";
import Head from "next/head";
import styled from "styled-components";
import { useForm, ErrorMessage } from "react-hook-form";
import { ToastContainer, toast } from "react-nextjs-toast";
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";

import Header from "../components/Header";
import Input from "../components/Input";
import { SubmitButton, LinkButton, LoaderContainer } from "../components/Buttons";
import { H3 } from "../components/Text/Headings";
import { TextSmall } from "../components/Text/Body";

const MainStyle = styled.main`
  height: calc(100vh - 80px);
`;

const AlertCardStyle = styled.div`
  border-radius: 10px;
  padding: 60px 26px 46px;
`;

const override = css`
  display: flex;
  margin: 0 auto;
`;

const ChangePassword = ({getUrl}) => {
  // const [submitted, setSubmitted] = useState(false);
  // const [loading, setLoading] = useState(false);

  const { register, handleSubmit, errors, watch } = useForm({ validateCriteriaMode: "all" });
  const password = useRef({});
  password.current = watch("password", "");
  
 const apiUrl = getUrl();

const onSubmit = (data) => {
  console.log(data);
  reset(data);
};

  submitted && (document.body.style.overflow = "hidden");

  return (
    <div className="w-screen ">
      <Head>
        <title>Fasta Change Password</title>
        <link rel="icon" href="/images/Logo.png" />
      </Head>

      <Header back />

      <MainStyle className="flex flex-col items-center justify-center">
      <ToastContainer />
        <H3 color="#43A047" className="mb-4">
          Enter your new password
        </H3>
        <TextSmall color="#43A047">This action will update your password in our records</TextSmall>

        <form onSubmit={handleSubmit(onSubmit)} className="w-11/12 mt-5">
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
            placeholder="New Password"
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
          {loading ?
          <LoaderContainer className="w-full mt-6">
            <BeatLoader
            // css={override}
            size={30}
            color="#43a047"
            loading
            />
          </LoaderContainer>
        :
          <SubmitButton type="submit" className="w-full mt-6">
            change password
          </SubmitButton>}
        </form>

        {submitted && (
          <div
            className="h-screen w-screen fixed top-0 left-0 z-40 flex justify-center items-end pb-16"
            style={{ backgroundColor: "#AFDEB199" }}
          >
            <AlertCardStyle className="w-10/12 bg-white">
              <img src="/images/success.svg" alt="" className="mx-auto mb-12" />
              <TextSmall className="text-center mb-6" style={{ color: "#43A047" }}>
                Your successfully changed your password.
              </TextSmall>

              <LinkButton href="login" className="w-10/12 mx-auto">
                Proceed to login
              </LinkButton>
            </AlertCardStyle>
          </div>
        )}
      </MainStyle>
    </div>
  );
};

export default ChangePassword;
