/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { useForm, ErrorMessage } from "react-hook-form";

import Header from "../components/Header";
import Input from "../components/Input";
import { SubmitButton } from "../components/Buttons";
import { H3 } from "../components/Text/Headings";
import { TextSmall } from "../components/Text/Body";

const MainStyle = styled.main`
  height: calc(100vh - 78px);
`;

const Login = () => {
  const { register, handleSubmit, errors } = useForm({ validateCriteriaMode: "all" });
  const onSubmit = (data) => {
    // console.log(data);
  };

  return (
    <div className="w-screen ">
      <Head>
        <title>Fasta Login</title>
        <link rel="icon" href="/images/Logo.png" />
      </Head>

      <Header />

      <MainStyle className="flex flex-col items-center justify-between">
        <form onSubmit={handleSubmit(onSubmit)} className="w-11/12 mt-32">
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
              ))
            }
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
              ))
            }
          </ErrorMessage>

          <Link href="resetpassword">
            <a>
              <TextSmall className="mt-4" color="#43A047">
                Forgot password?
              </TextSmall>
            </a>
          </Link>

          <SubmitButton type="submit" className="w-full mt-6">
            LOGIN
          </SubmitButton>
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
