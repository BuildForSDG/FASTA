import styled from "styled-components";
import React from "react";

const Nav = styled.ul`
  background-color: #43a047;
  position: fixed;
  width: 100%;
  bottom: 0;
  padding: 10px 0;
  margin-top: 10px;
`;

const BottomNav = () => {
  return (
    <Nav className="flex justify-around">
      <li className="cursor-pointer text-white">A</li>
      <li className="cursor-pointer text-white">B</li>
      <li className="cursor-pointer text-white">C</li>
      <li className="cursor-pointer text-white">D</li>
      <li className="cursor-pointer text-white">E</li>
    </Nav>
  );
};

export default BottomNav;
