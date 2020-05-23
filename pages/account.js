import React from "react";
import Head from "next/head";
import Account from "../components/Account/account";

const Profile = (props) => {
  return (
    <div>
      <Head>
        <title>Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="" style={{ backgroundColor: "#F7F5F5" }}>
        <Account user={props.user} setUser={props.setUser} getUrl={props.getUrl} />
      </div>
    </div>
  );
};

export default Profile;
