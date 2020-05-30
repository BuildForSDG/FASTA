import Router from "next/router";
import styled from "styled-components";
import { H3 } from "./Text/Headings";

const Header = (props) => {
  return (
    <header className="container-fluid mx-auto mt-1 flex p-4 items-center">
      {props.back && (
        <div className="cursor-pointer " role="" onClick={() => Router.back()}>
          <img src="/images/Backward arrow.svg" alt="" />
        </div>
      )}
      <div className="mx-auto">
        {props.heading ? <H3>{props.heading}</H3> : <img src="/images/Logo-small.svg" alt="" />}
      </div>
    </header>
  );
};

const ShadowedHeaderStyle = styled.header`
  box-shadow: 0px 1px 7px #0000001a;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const ShadowedHeader = (props) => {
  return (
    <ShadowedHeaderStyle className="w-screen flex p-4 items-center bg-white">
      <div className="cursor-pointer " role="" onClick={() => Router.back()}>
        <img src="/images/Back-Arrow-Black.svg" alt="" />
      </div>
      <div className="flex-grow text-center">
        <H3>{props.heading}</H3>
      </div>
    </ShadowedHeaderStyle>
  );
};

export default Header;
