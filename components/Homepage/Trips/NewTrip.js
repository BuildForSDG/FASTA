import styled from "styled-components";
import React from "react";
import Link from "next/link";

const Body = styled.div`
  background-color: #afdeb1;
  border: 1px solid #bce0fd;
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
    <>
      <Text>Welcome back {props.user}!</Text>
      <Link href="trips/new-trip">
        <a>
          <div className="new-trip">
            <Body>
              <Heading>Plan a new trip</Heading>
              <p>Schedule your next outing</p>
            </Body>
          </div>
        </a>
      </Link>
    </>
  );
};

export default NewTrip;
