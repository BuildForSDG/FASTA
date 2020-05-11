import React from "react";
import styled from "styled-components";

const ReportBody = styled.div`
  background-color: #fff;
  border: 1px solid #afdeb1;
  border-radius: 10px;
  padding: 15px 20px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 14px;
  color: #232323;
  font-weight: bold;
`;

const Text = styled.p`
  color: #6c6c6c;
  font-size: 14px;
`;

const Report = (props) => {
  return (
    <ReportBody>
      <Title>{props.title}</Title>
      <Text>
        Along Olu-Obansanjo road. cars are on fire avoid the area, fire fighters are at the scene. Traffic is...
      </Text>
    </ReportBody>
  );
};

export default Report;
