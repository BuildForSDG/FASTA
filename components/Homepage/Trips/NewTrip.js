import styled from "styled-components";
import React from "react";
import Link from "next/link";
import { H3 } from "../../Text/Headings";
import { TextSmall } from "../../Text/Body";

const Body = styled.div`
  background-color: #afdeb1;
  border: 1px solid #afdeb1;
  border-radius: 10px;
  color: #43a047;
  padding: 20px;
`;
const Heading = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

const Text = styled.p`
  font-size: 20px;
  padding: 10px 0;
`;

const NewTrip = (props) => {
  return (
    <Link href="/trips/new-trip">
      <a>
      <Text>Welcome back {props.user.fullname}!</Text>
      <Body>
        <H3>Plan a new trip</H3>
        <p>Schedule your next outing</p>
      </Body>
      </a>
    </Link>
  );
};

export default NewTrip;
