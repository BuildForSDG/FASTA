/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Head from "next/head";
import Router from "next/router";
import Account from "../components/Account/account";

const Profile = (props) => {

  useEffect(() => {
    if (!props.loggedIn) {
      Router.push("/login");
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="" style={{ backgroundColor: "#F7F5F5" }}>
        <Account loggedIn={props.loggedIn} user={props.user} setUser={props.setUser} getUrl={props.getUrl} handleToast={props.handleToast} />
      </div>
    </div>
  );
};

export default Profile;
