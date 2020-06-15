/* eslint-disable no-unused-vars */
import React from "react";
<<<<<<< HEAD
import Report from "./Report";
import Link from "next/link";
=======
>>>>>>> b7c584c100c954e5bf7ba27c9f17a018e46bfc76
import styled from "styled-components";
import Link from "next/link";
import Report from "./Report";
import { H3 } from "../../Text/Headings";

const Text = styled(TextSmall)`
  font-size: 20px;
  margin: 5px 0;
`;

const Reports = (props) => {
  console.log(props);
  return (
    <div>
      <Text color="#232323">Reports in your area</Text>
      {props.reports && props.reports.slice(0,2).map((report) => (
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
