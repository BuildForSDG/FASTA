import React from 'react';
import styled from 'styled-components';

const GPSbody = styled.div`
  background-color: #deb1af;
  border-radius: 5px;
  color: #a03743;
  font-size: 14px;
  height: 83px;
`;

const Details = styled.p`
  color: #a04743;
  width: 70%;
  text-align: left;
  white-space: pre-wrap;
  span {
    display: block;
  }
`;

const GPS = () => {
  return (
    <GPSbody className="flex justify-evenly items-center">
      <span>Icon</span>
      <Details>
        Your GPS location is off!<span>Please turn it on to use FASTA</span>
      </Details>
    </GPSbody>
  );
};

export default GPS;
