import styled from "styled-components";
import React from "react";
import { H3 } from "../Text/Headings";
import { TextSmall } from "../Text/Body";
import Link from "next/link";

const Body = styled.div`
  background-color: #bce0fd;
  color: #2699fb;
  border: 1px solid #bce0fd;
  border-radius: 10px;
  padding: 20px 20px;
  margin-bottom: 10px;
  margin-top: 20px;
`;

const NewReport = (props) => {
  return (
    <Link href="reports/makeReport">
      <a>
        <Body>
          <H3>Make a New Report</H3>
          <TextSmall>Update us with your current emergencies in your area.</TextSmall>
        </Body>
      </a>
    </Link>
  );
};

export default NewReport;
