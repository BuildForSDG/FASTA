import React from "react";
import styled from "styled-components";
import { H3 } from "../../Text/Headings";
import { TextSmall } from "../../Text/Body";

const ReportBody = styled.div`
  background-color: #fff;
  border: 1px solid #afdeb1;
  border-radius: 10px;
  padding: 15px 20px;
  margin-bottom: 20px;
`;

const Report = (props) => {
  return (
    <ReportBody>
      <H3 color="#232323">{props.title}</H3>
      <TextSmall color="#6c6c6c">
        Along Olu-Obansanjo road. cars are on fire avoid the area, fire fighters are at the scene. Traffic is...
      </TextSmall>
    </ReportBody>
  );
};

export default Report;
