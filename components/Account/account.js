import React from "react";
import Router from "next/router";
import styled from "styled-components";
import BottomNav from "../Homepage/BottomNav";

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

const Button = styled.button`
  height: 48px;
  background-color: #43a047;
  border-radius: 4px;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
`;

const Input = styled.input`
  /* width: 60%; */
  height: 48px;
  background: #fff;
  border: 1px solid #afdeb1;
  padding: 5px;
  margin-right: 15px;
  ::placeholder {
    color: #afdeb1;
  }
`;

const Text = styled.p`
  font-size: 20px;
  color: #232323;
`;

export const Nav = (props) => {
  return (
    <NavBar className="flex justify-between items-center z-10">
      <div onClick={() => Router.back()}>
        <img src="/images/account/Back-Arrow.svg" alt="back" />
      </div>
      <Text className="my-0 mx-auto">{props.title}</Text>
    </NavBar>
  );
};

const Details = (props) => {
  return (
    <DetailsBody className="flex items-center">
      <img src="/images/account/profile.svg" alt="profile" />
      <div className="ml-4">
        <Text>{props.name}</Text>
        <span style={{ color: "#7f7f7f" }}>{props.email}</span>
      </div>
    </DetailsBody>
  );
};

const Number = (props) => {
  return (
    <div className="bg-white p-4 mb-4 rounded-lg">
      <div className="flex items-center mb-3">
        <img src="/images/account/phone.svg" alt="phone" />
        <div className="ml-4">
          <Text>Registered Number</Text>
          <span style={{ color: "#7f7f7f" }}>{props.number}</span>
        </div>
      </div>
      <form>
        <Input className="w-3/5" type="text" placeholder="New Phone Number" />
        <Button className="w-2/6" type="submit">
          UPDATE
        </Button>
      </form>
    </div>
  );
};

const ChangePassword = (props) => {
  return (
    <form className="bg-white p-4 rounded-lg mb-4">
      <div className="flex items-start">
        <img src="/images/account/lock.svg" alt="password" />
        <div className="ml-4 flex flex-col justify-around w-full">
          <Text className="mb-4">Change Password</Text>
          <Input className="w-full mb-3" placeholder="Present Password" />
          <Input className="w-full mb-3" placeholder="New Password" />
          <Button className="w-full" type="submit">
            CHANGE PASSWORD
          </Button>
        </div>
      </div>
    </form>
  );
};

const Register = (props) => {
  return (
    <form className="bg-white p-4 rounded-lg mb-16">
      <div className="flex items-start">
        <img src="/images/account/lock.svg" alt="password" />
        <div className="ml-4 flex flex-col justify-around w-full">
          <Text className="mb-4">Register as a Transporter</Text>
          <Input className="w-full mb-3" placeholder="Vehicle Type" />
          <Input className="w-full mb-3" placeholder="Licence Number" />
          <Input className="w-full mb-3" placeholder="Address" />
          <Button className="w-full" type="submit">
            Register
          </Button>
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
