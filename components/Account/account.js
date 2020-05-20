import React, { useState } from "react";
import Router from "next/router";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import BottomNav from "../Homepage/BottomNav";
import Input from "../Input";
import { H3 } from "../Text/Headings";
import { SubmitButton } from "../Buttons";

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

export const Nav = (props) => {
  return (
    <NavBar className="flex justify-between items-center z-10">
      <div onClick={() => Router.back()}>
        <img src="/images/account/Back-Arrow.svg" alt="back" />
      </div>
      <Text color="#232323" className="my-0 font-normal mx-auto">{props.title}</Text>
    </NavBar>
  );
};

const Details = ({ name, email }) => {
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

const Number = ({number}) => {
  const [submit, setSubmitted] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const onSubmitForm = (FormData) => setSubmitted(true);
  return (
    <div className="bg-white p-4 mb-4 rounded-lg">
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
          name="phoneNumber"
          placeholder="New Phone Number"
          ref={register({
            required: "Phone number cannot be empty",
            pattern: {
              value: /\d{11,14}/,
              message: "Phone number not valid"
            }
          })}
        />
        <SubmitButton className="w-2/6" type="submit">
          UPDATE
        </SubmitButton>
      </form>
      {errors.phoneNumber && <p className="text-xs text-red-500 my-2 ml-2">{errors.phoneNumber.message}</p>}
    </div>
  );
};

const ChangePassword = (props) => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const onSubmitForm = (FormData) => {
    setSubmitted(true);
  };
  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="bg-white p-4 rounded-lg mb-4">
      <div className="flex items-start">
        <img src="/images/account/lock.svg" alt="password" />
        <div className="ml-4 flex flex-col justify-around w-full">
          <Text className="mb-4">Change Password</Text>
          <Input
            className="w-full mb-3"
            placeholder="Present Password"
            type="password"
            name="presentPassword"
            ref={register({
              required: "Present password required",
              minLength: {
                value: 8,
                message: "Password should be at least 8 characters"
              }
            })}
          />
          {errors.presentPassword && <p className="text-xs text-red-500 my-2">{errors.presentPassword.message}</p>}

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
          <SubmitButton className="w-full" type="submit">
            CHANGE PASSWORD
          </SubmitButton>
        </div>
      </div>
    </form>
  );
};

const Register = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const onSubmitForm = (FormData) => {
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

const Account = (props) => {
  return (
    <>
      <Nav title="Profile" />
      <div className="w-full p-4">
        <Details name="Steve Smith" email="stevem@gmail.com" />
        <Number number="081012345678" />
        <ChangePassword />
        <Register />
      </div>
      <BottomNav />
    </>
  );
};

export default Account;
