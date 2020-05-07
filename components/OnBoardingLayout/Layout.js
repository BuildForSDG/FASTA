/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import styled from 'styled-components';
import Link from 'next/link';
import React, { useState } from 'react';

import { H1 } from '../Text/Headings';

const StyledLayout = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${props => props.bg};
  color: ${props => props.color};

  a {
    color: ${props => props.color};
    font-size: 14px;
  }

  h1 {
    line-height: 45px;
  }
`;

const OnBoardingContainerLayout = styled.section`
  width: 400vw;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(4, 100vw);
  grid-auto-flow: row;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  transform: translate(-${props => props.screen * 100}vw);
  transition: 0.3s ease-out;
`;

const Layout = props => {
  const [screen, setScreen] = useState(0);

  function changeScreen({ target }) {
    setScreen(target.id);
  }

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <OnBoardingContainerLayout screen={screen}>
        {props.views.map((view, index) => {
          return (
            <StyledLayout
              bg={view.bg}
              color={view.color}
              key={index}
              className="w-screen h-screen flex flex-col justify-between pb-10 px-6"
            >
              <div className="text-right mt-8">
                <Link href="home">
                  <a className="font-bold">SKIP</a>
                </Link>
              </div>
              <div>
                <H1 className="w-10/12 font-bold uppercase mb-8">{view.heading}</H1>
                <p>{view.text}</p>

                <div className="flex justify-end items-center mt-10">
                  <p className="font-bold mr-4">{view.id}/4</p>
                  {view.id < 4 ? (
                    <p className="font-bold text-2xl" onFocus={changeScreen} onClick={changeScreen} id={view.id}>
                      &rarr;
                    </p>
                  ) : (
                    <Link href="home">
                      <a className="font-bold">Continue</a>
                    </Link>
                  )}
                </div>
              </div>
            </StyledLayout>
          );
        })}
      </OnBoardingContainerLayout>
    </div>
  );
};

export default Layout;
