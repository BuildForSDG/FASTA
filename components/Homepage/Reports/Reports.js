/* eslint-disable no-unused-vars */
import React from "react";
import Report from "./Report";
import Link from "next/link";
import styled from "styled-components";
import { H3 } from "../../Text/Headings";
import { TextSmall } from "../../Text/Body";

const Text = styled(TextSmall)`
  font-size: 20px;
  margin: 5px 0;
`;

const Reports = (props) => {
  console.log(props);
  return (
    <div>
      <Text color="#232323">Reports in your area</Text>
      {props.reports && props.reports.map((report) => (
      <Report key={report._id} report={report} />
      ))}      

      <Link href="/report">
        <a>
        <TextSmall color="#2699fb">See All Reports</TextSmall>
        </a>
      </Link>
    </div>
  );
};

export default Reports;
