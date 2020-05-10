import React from "react";
import Head from 'next/head'
import { useForm } from "react-hook-form";
import "../fastaStyles.css";

function Login() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = () => {};

  return (
    <div className="container">
    <Head>
      <title>Fasta > Login </title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="Container">
      <div className="FormContainer">
        <p className="AppTitle">Fasta</p>
        <form className="FormGroup" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="FormTitle">Login</h1>
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
          <input className="Input"
            type="text"
            ref={register({ required: "Password is required" })}
            name="password"
            placeholder="Password"
          />
          {errors.password && (
            <div className="ValidationError">{errors.password.message}</div>
          )}
          <p className="Text">Forgot Password</p>
          <button className="FormButton">LOGIN</button>
          <p className="Text">Don&apos;t have an Account? </p>
        </form>
          <div className="FormLink">REGISTER</div>
      </div>
    </div>
    </div>
  );
};

export default Login;
