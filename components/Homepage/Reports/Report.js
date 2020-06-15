import React from "react";
import styled from "styled-components";
import { TextSmall } from "../../Text/Body";

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

  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @supports (-webkit-line-clamp: 2) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: initial;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const Report = (props) => {
  return (
    <ReportBody>
      <Title>{props.title}</Title>
      <Text>{props.description}</Text>
    </ReportBody>
  );
};

export default Report;
