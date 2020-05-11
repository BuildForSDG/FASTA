/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
import React, { useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import { useForm, ErrorMessage } from "react-hook-form";

import Header from "../components/Header";
import Input from "../components/Input";
import { SubmitButton, LinkButton } from "../components/Buttons";
import { H3 } from "../components/Text/Headings";
import { TextSmall } from "../components/Text/Body";

const MainStyle = styled.main`
  height: calc(100vh - 80px);
`;

const AlertCardStyle = styled.div`
  border-radius: 10px;
  padding: 60px 26px 46px;
`;

const ResetPassword = () => {
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, errors } = useForm({ validateCriteriaMode: "all" });
  const onSubmit = (data) => {
    console.log(data);
    setSubmitted(true);
  };

  submitted && (document.body.style.overflow = "hidden");

  return (
    <div className="w-screen ">
      <Head>
        <title>Fasta Password Reset</title>
        <link rel="icon" href="/images/Logo.png" />
      </Head>

      <Header back />

      <MainStyle className="flex flex-col items-center justify-center">
        <H3 color="#43A047" className="mb-4">
          Recover Password
        </H3>
        <TextSmall color="#43A047">Enter the email address you registered with.</TextSmall>

        <form onSubmit={handleSubmit(onSubmit)} className="w-11/12 mt-5">
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

          <SubmitButton type="submit" className="w-full mt-6">
            recover password
          </SubmitButton>
        </form>

        {submitted && (
          <div
            className="h-screen w-screen fixed top-0 left-0 z-40 flex justify-center items-end pb-16"
            style={{ backgroundColor: "#AFDEB199" }}
          >
            <AlertCardStyle className="w-10/12 bg-white">
              <img src="/images/success.svg" alt="" className="mx-auto mb-12" />
              <TextSmall className="text-center mb-6" style={{ color: "#43A047" }}>
                Your recovery link has been sent to your email.
              </TextSmall>

              <LinkButton href="login" className="w-10/12 mx-auto">
                continue
              </LinkButton>
            </AlertCardStyle>
          </div>
        )}
      </MainStyle>
    </div>
  );
};

export default ResetPassword;
