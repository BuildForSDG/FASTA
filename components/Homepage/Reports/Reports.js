/* eslint-disable no-unused-vars */
import React from "react";
import Report from "./Report";
import styled from "styled-components";
import { H3 } from "../../Text/Headings";
import { TextSmall } from "../../Text/Body";

const Text = styled(TextSmall)`
  font-size: 20px;
  margin: 5px 0;
`;

const Reports = props => {
  return (
    <div>
      <Text color="#232323">Reports in your area</Text>
      <Report title="Accident" />
      <Report title="Shoot-out" />
      <TextSmall color="#2699fb">See All Reports</TextSmall>
    </div>
  );
};

export default Reports;
