/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import Router from "next/router";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-nextjs-toast";
// import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";
import styled from "styled-components";
import BottomNav from "../Homepage/BottomNav";
import Input from "../Input";
import { H3 } from "../Text/Headings";
import { SubmitButton, LoaderContainer } from "../Buttons";

const NavBar = styled.nav`
  height: 54px;
  width: 100%;
  position: fixed;
  background-color: #fff;
  box-shadow: 0px 1px 7px #0000001a;
  padding: 15px;
`;

const DetailsBody = styled.div`
  height: 76px;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 60px;
  padding: 15px;
  margin-bottom: 15px;
`;

const Text = styled(H3)`
  font-weight: normal;
`;

export const Nav = props => {
  return (
    <NavBar className="flex justify-between items-center z-10">
      <div onClick={() => Router.back()}>
        <img src="/images/account/Back-Arrow.svg" alt="back" />
      </div>
      <Text color="#232323" className="my-0 font-normal mx-auto">
        {props.title}
      </Text>
    </NavBar>
  );
};

const Details = ({ user }) => {
  const { name, email } = user;
  return (
    <DetailsBody className="flex items-center">
      <img src="/images/account/profile.svg" alt="profile" />
      <div className="ml-4">
        <Text>{name}</Text>
        <span style={{ color: "#7f7f7f" }}>{email}</span>
      </div>
    </DetailsBody>
  );
};

const handleFetch = async (url, method, body) => {
  console.log(body);
  const res = await fetch(url, {
  method, 
  body: JSON.stringify(body), 
  headers: { "Content-Type" : "application/json"}
});
  const response = await res.json();
  console.log(res.status, response);
  return {status: res.status, response};
}

const Number = ({ user, setUser, getUrl }) => {
  const [updated, setUpdated] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const apiUrl = getUrl();
  const { name, email, number } = user;

  const updateNumber = async(ev) => {
    console.log(ev, Object.keys(ev), email, number);
    setLoading(true);
  
  try {
          const resetResponse = await handleFetch(`${apiUrl}/users/update/phonenumber`, "POST", {email, oldphonenumber: number, newphonenumber: ev.newphonenumber});
          console.log(resetResponse);
          if (resetResponse.status === 200) {
          toast.notify("Phone Number updated successfully");
          setUser({name, email, number: newphonenumber});
          setUpdated(!updated);
        } else {
          toast.notify("Reset failed");
        }
  } catch(e) {
        console.log(e, "Some error in connection, Please try again!");
        toast.notify("Error in connection");
  } 
    setLoading(false);
  };

  const onSubmitForm = FormData => updateNumber(FormData);

  useEffect(() => {
    console.log("useEffect: ", user, updated);
    localStorage.setItem('user', JSON.stringify(user)); 
  }, []);

  return (
    <div className="bg-white p-4 mb-4 rounded-lg">
      <ToastContainer />
      <div className="flex items-center mb-3">
        <img src="/images/account/phone.svg" alt="phone" />
        <div className="ml-4">
          <Text>Registered Number</Text>
          <span style={{ color: "#7f7f7f" }}>{number}</span>
        </div>
      </div>
      <form className="flex justify-around" onSubmit={handleSubmit(onSubmitForm)}>
        <Input
          className="w-7/12"
          type="text"
          name="newphonenumber"
          placeholder="New Phone Number"
          ref={register({
            required: "Phone number cannot be empty",
            pattern: {
              value: /\d{11,14}/,
              message: "Phone number not valid"
            }
          })}
        />
        {loading ?
          <LoaderContainer className="w-full mt-6">
            <BeatLoader
            size={6}
            color="#43a047"
            loading
            />
          </LoaderContainer>
          :   
        <SubmitButton className="w-2/6" type="submit">
          UPDATE
        </SubmitButton>}
      </form>
      {errors.newphonenumber && <p className="text-xs text-red-500 my-2 ml-2">{errors.newphonenumber.message}</p>}
    </div>
  );
};

const ChangePassword = ({ user, getUrl }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, errors, watch } = useForm({ validateCriteriaMode: "all" });
  const newPassword = useRef({});
  newPassword.current = watch("newPassword", "");  
  
  const { email } = user;
  const apiUrl = getUrl();

  const updatePassword = async(ev) => {
    console.log(ev, Object.keys(ev));
    setLoading(true);
  
  try {
        const auth = await handleFetch(`${apiUrl}/users/login`, "POST", {email, password: ev.currentPassword});
        console.log(auth);
        if (auth.status === 200) {
          const forgetResponse = await handleFetch(`${apiUrl}/users/forget`, "POST", {email, password: ev.currentPassword});

          const resetResponse = await handleFetch(`${apiUrl}/users/reset/${forgetResponse.response.token}`, "POST", {password: ev.newPassword, confirmPassword: ev.confirmPassword});
            if (resetResponse.status === 200) {
          toast.notify("Reset successful");
            } else {
          toast.notify("Reset failed");
            }
        } else {
          toast.notify("Invalid current password");
        }
  } catch(e) {
        console.log(e, "Some error in connection, Please try again!");
        toast.notify("Error in connection");
  } 
    setLoading(false);
  };

  const onSubmitForm = FormData => updatePassword(FormData);

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="bg-white p-4 rounded-lg mb-4">
      <ToastContainer />
      <div className="flex items-start">
        <img src="/images/account/lock.svg" alt="password" />
        <div className="ml-4 flex flex-col justify-around w-full">
          <Text className="mb-4">Change Password</Text>
          <Input
            className="w-full mb-3"
            placeholder="Current Password"
            type="password"
            name="currentPassword"
            ref={register({
              required: "Current password required",
              minLength: {
                value: 8,
                message: "Password should be at least 8 characters"
              }
            })}
          />
          {errors.currentPassword && <p className="text-xs text-red-500 my-2">{errors.currentPassword.message}</p>}

          <Input
            className="w-full mb-3"
            placeholder="New Password"
            type="password"
            name="newPassword"
            ref={register({
              required: "New password required",
              minLength: {
                value: 8,
                message: "New password should be at least 8 characters"
              }
            })}
          />
          {errors.newPassword && <p className="text-xs text-red-500 my-2">{errors.newPassword.message}</p>}

          <Input
            className="w-full mb-3"
            placeholder="Confirm Password"
            type="password"
            name="confirmPassword"
            ref={register({
              required: "New password required",
              minLength: {
                value: 8,
                message: "New password should be at least 8 characters"
              },
              validate: (value) => value === newPassword.current || "The passwords do not match"
            })}
          />
          {errors.confirmPassword && <p className="text-xs text-red-500 my-2">{errors.confirmPassword.message}</p>}
          {loading ?
          <LoaderContainer className="w-full mt-6">
            <BeatLoader
            size={30}
            color="#43a047"
            loading
            />
          </LoaderContainer>
          :          
          <SubmitButton className="w-full" type="submit">
            CHANGE PASSWORD
          </SubmitButton>}
        </div>
      </div>
    </form>
  );
};

const Register = props => {
  const { register, handleSubmit, errors } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const onSubmitForm = FormData => {
    setSubmitted(true);
  };
  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="bg-white p-4 rounded-lg mb-16">
      <div className="flex items-start">
        <img src="/images/account/car.png" alt="password" />
        <div className="ml-4 flex flex-col justify-around w-full">
          <Text className="mb-4">Register as a Transporter</Text>
          <Input
            className="w-full mb-3"
            placeholder="Vehicle Type"
            name="vehicleType"
            ref={register({
              required: "Vehicle type required"
            })}
          />
          {errors.vehicleType && <p className="text-xs text-red-500 my-2">{errors.vehicleType.message}</p>}
          <Input
            className="w-full mb-3"
            placeholder="Licence Number"
            name="licenceNumber"
            ref={register({
              required: "Licence number required"
            })}
          />
          {errors.licenceNumber && <p className="text-xs text-red-500 my-2">{errors.licenceNumber.message}</p>}
          <Input
            className="w-full mb-3"
            placeholder="Address"
            name="address"
            ref={register({
              required: "Address required"
            })}
          />
          {errors.address && <p className="text-xs text-red-500 my-2">{errors.address.message}</p>}
          <SubmitButton className="w-full" type="submit">
            Register
          </SubmitButton>
        </div>
      </div>
    </form>
  );
};

const Account = props => {
  return (
    <>
      <Nav title="Profile" />
      <div className="w-full p-4">
        <Details user={props.user} />
        <Number user={props.user} setUser={props.setUser} getUrl={props.getUrl} />
        <ChangePassword user={props.user} getUrl={props.getUrl} />
        <Register />
      </div>
      <BottomNav />
    </>
  );
};

export default Account;
