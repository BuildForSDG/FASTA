/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import React, {useState} from "react";

const Nav = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 1px 10px #0000000f;
  width: 100%;
  height: 54px;
  padding: 20px;
  position: fixed;
  top: 0;
`;

const LogOutStyle = styled.div`
  position: relative;
`;

const DropDownView = styled.div`
  display: flex;
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 50;
  box-shadow: 0px 3px 6px #00000029;
  background: #ffffff;
  padding: 10px;

  button {
    margin-bottom: 3px;
    cursor: pointer;
    background: transparent;
    border: none;

    &:hover {
      color: #0068b0;
      outline: none;
    }
  }
`;

const NavLogo = styled.img`
  height: 30px;
`;

const NavBar = (props) => {
  const [dropdownActive, setDropdownActive] = useState(false);

  const makeActive = () => {
    setDropdownActive(true);
  };

  const makeInactive = () => {
    setDropdownActive(false);
  };

  return (
    <Nav className="flex justify-between items-center">
      <NavLogo src="images/Logo.png" alt="Fasta" />
      <LogOutStyle>
        <img className="cursor-pointer" src="images/More.png" alt="more" onClick={makeActive} onFocus={makeActive} />
        {dropdownActive && (
          <DropDownView onMouseLeave={makeInactive}>
            <button type="button" className="capitalize">
              logout
            </button>
          </DropDownView>
        )}
      </LogOutStyle>
    </Nav>
  );
};

export default NavBar;
