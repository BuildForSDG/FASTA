/* eslint-disable prettier/prettier */
import styled from "styled-components";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = styled.nav`
  background-color: #43a047;
  position: fixed;
  bottom: 0;
  padding: 14px 0;
`;

const ListItemStyle = styled.li`
  list-style-type: none;
`;

const Text = styled.div`
  text-align: center;
  font: Bold 10px/12px Arial;
  letter-spacing: 0px;
  color: #7cbc7f;
  margin-top: 5px;
`;

const ListItem = (props) => {
  const router = useRouter();

  return (
    <Link href={props.href}>
      <a>
        <ListItemStyle className="flex flex-col items-center justify-between ">
          <img src={router.pathname.includes(props.href) ? props.activeImg : props.inactiveImg} alt="" />
          <Text style={{color: router.pathname.includes(props.href) ? "#ffffff" : "rgba(255, 255, 255, 0.6"}}>{props.text}</Text>
        </ListItemStyle>
      </a>
    </Link>
  );
};

const BottomNav = () => {

  return (
    <Nav className="flex justify-evenly items-center w-screen">
     <ListItem 
      href="/home"
      activeImg="/images/Home.png"
      inactiveImg="/images/Home-inactive.svg"
      text= "Home"
     />

     <ListItem 
      href="/trip"
      activeImg="/images/Explore-active.svg"
      inactiveImg="/images/Explore-inactive.png"
      text="Trips"
     />

     <ListItem 
      href="/report"
      activeImg="/images/Reports-active.svg"
      inactiveImg="/images/Reports-inactive.png"
      text="Reports"
     />

     <ListItem 
      href="/account"
      activeImg="/images/Profile-active.svg"
      inactiveImg="/images/Profile-inactive.png"
      text="Account"
     />
    </Nav>
  );
};

export default BottomNav;
