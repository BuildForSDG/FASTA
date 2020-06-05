/* eslint-disable no-unused-vars */
import styled from "styled-components";
import React from "react";

const Nav = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 1px 10px #0000000f;
  width: 100%;
  height: 54px;
  padding: 20px;
  position: fixed;
  top: 0;
`;

const NavLogo = styled.img`
  height: 30px;
`;

const NavBar = (props) => {
  return (
    <Nav className="flex justify-between items-center">
      <NavLogo src="images/Logo.png" alt="Fasta" />
    </Nav>
  );
};

export default NavBar;
