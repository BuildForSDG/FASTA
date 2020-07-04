import React from "react";
import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  from {opacity: 0; display: none;}
  to {opacity: 1; display: flex;}
`;
const Pop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

const PopInner = styled.div`
  position: absolute;
  min-width: 200px;
  max-width: 300px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  border-radius: 10px;
  background: #43A047;
  padding: 10px;
  animation-name: ${slideUp};
  animation-duration: 1s;
  animation-delay: 1s;
`;

const Popup = ({ closePopup }) => {
  return (
    <Pop className="text-white">
      <PopInner className="flex flex-col justify-center">
        <p>
          Hi there, we noticed you are trying to use <span className="font-bold">FASTA</span> on a larger screen.
          Please, we recommend to use
          <span className="font-bold"> FASTA</span> on a smaller screen as <span className="font-bold">FASTA</span> is
          designed for mobile. Thank You
        </p>
        <button type="button" className="text-green-200 hover:text-white self-end" onClick={closePopup}>
          Okay
        </button>
      </PopInner>
    </Pop>
  );
};

export default Popup;
