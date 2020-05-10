import React from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";
import "../fastaStyles.css";
// import { FaArrowLeft } from 'react-icons/fa';

export default function ResetPassword() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = () => {};

  return (
    <div>
      <Head>
        <title>Fasta Forgot Password</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="Container">
      <div className="FormContainer">
        <p className="AppTitle"> 
        {/* <span><FaArrowLeft /></span> */}
         Fasta</p>
        <form className="FormGroup" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="FormTitle">Recover Password</h1>
          <input className="Input"
            type="text"
            ref={register({
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "invalid email address",
              },
            })}
            name="email"
            placeholder="Email"
          />
          {errors.email && (
            <div className="ValidationError">{errors.email.message}</div>
          )}
          <p className="Text">Enter the email address you registered with.</p>
          <button className="FormButton">RECOVER PASSWORD</button>
        </form>
      </div>
    </div>
    </div>
  );
}
