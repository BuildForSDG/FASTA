import styled from "styled-components";
import Head from "next/head";

import { ShadowedHeader } from "./Header";
import BottomNav from "./BottomNav";

const Body = styled.main`
  padding-bottom: 60px;
  background: #ffffff;
  max-width: 100vw;
`;

const Layout = (props) => {
  return (
    <div className=" w-screen min-h-screen">
      <Head>
        <title>Fasta {props.header}</title>
        <meta charset='utf-8' />
        <meta http-quiv='x-UA-Compatible' content='IE=edge'/>
        <meta name='viewport' content='width=device-width,initial-scale=1,minimun-scale=1,maximum-scale=1,user-scalable=no'/>
        <meta name='description' conmtent='Description'/>
        <meta name='keywords' />
        
        <link rel="manifest" href="/manifest.json"/>
        <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16'/>
        <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32'/>
        <link rel="apple-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB"/>
      </Head>
      <ShadowedHeader heading={props.header} />
      <Body className="w-screen pt-4 min-h-screen px-4">{props.children}</Body>
      <BottomNav />
    </div>
  );
};

export default Layout;
