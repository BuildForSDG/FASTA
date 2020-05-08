import styled from 'styled-components';

const Nav = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 1px 10px #0000000f;
  width: 100%;
  height: 54px;
  padding: 20px;
  position: fixed;
  top: 0;
`;

const NavLogo = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: #43a047;
`;

const NavBar = props => {
  return (
    <Nav className="flex justify-between items-center">
      <NavLogo>{props.name}</NavLogo>
      <div>...</div>
    </Nav>
  );
};

export default NavBar;
