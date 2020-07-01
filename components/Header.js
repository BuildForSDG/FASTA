import Router from "next/router";
import styled from "styled-components";
import { H3 } from "./Text/Headings";

const Header = (props) => {
  return (
    <header className="container-fluid mx-auto mt-1 flex p-4 items-center">
      {props.back && (
        <button type="button" className="cursor-pointer " onClick={() => Router.back()}>
          <img src="/images/Backward arrow.svg" alt="" />
        </button>
      )}
      <div className="mx-auto">
        {props.heading ? <H3>{props.heading}</H3> : <img src="/images/Logo-small.svg" alt="" />}
      </div>
    </header>
  );
};

const ShadowedHeaderStyle = styled.header`
  box-shadow: 0px 1px 7px #0000001a;
  position: fixed;
  top: 0;
  z-index: 10;
  max-width: 100vw;
`;

export const ShadowedHeader = (props) => {
  return (
    <ShadowedHeaderStyle className="w-screen bg-white">
      <div className="flex p-4 items-center container mx-auto">
        <button type="button" className="cursor-pointer " onClick={() => Router.back()}>
          <img src="/images/Back-Arrow-Black.svg" alt="" />
        </button>
        <div className="flex-grow text-center">
          <H3>{props.heading}</H3>
        </div>
      </div>
    </ShadowedHeaderStyle>
  );
};

export default Header;
