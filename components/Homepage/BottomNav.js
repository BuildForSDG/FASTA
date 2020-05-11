import styled from "styled-components";
import React from "react";
import Link from "next/link";

const Nav = styled.ul`
  background-color: #43a047;
  position: fixed;
  width: 100%;
  bottom: 0;
  padding: 10px 0;
  margin-top: 10px;
`;

const Text = styled.span`
  text-align: center;
  font: Bold 10px/12px Arial;
  letter-spacing: 0px;
  color: #7cbc7f;
`;

const BottomNav = () => {
  return (
    <Nav className="flex justify-evenly items-center">
      <li>
        <Link href="/home">
          <a className="flex flex-col items-center justify-between ">
            <img src="images/Home.png" alt="home" />
            <Text style={{color: "#fff"}}>Home</Text>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/start_trip">
          <a className="flex flex-col items-center justify-between ">
            <img src="images/Explore-inactive.png" alt="home" />
            <Text>Start Trip</Text>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/reports">
          <a className="flex flex-col items-center justify-between ">
            <img src="images/Reports-unactive.png" alt="home" />
            <Text>Reports</Text>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/account">
          <a className="flex flex-col items-center justify-between ">
            <img src="images/Profile-inactive.png" alt="home" />
            <Text>Account</Text>
          </a>
        </Link>
      </li>
    </Nav>
  );
};

export default BottomNav;
