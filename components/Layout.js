import styled from "styled-components";
import Head from "next/head";

import { ShadowedHeader } from "./Header";
import BottomNav from "./BottomNav";

const Body = styled.main`
  padding-bottom: 60px;
  // background: #f5f5f5;
  max-width: 100vw;
`;

const Layout = (props) => {
  return (
    <div className=" w-screen min-h-screen">
      <Head>
        <title>Fasta {props.header}</title>
        <link rel="icon" href="/images/Logo.png" />
      </Head>
      <ShadowedHeader heading={props.header} />
      <Body className="w-screen pt-4 min-h-screen px-4">{props.children}</Body>
      <BottomNav />
    </div>
  );
};

export default Layout;
