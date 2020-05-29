/* eslint-disable prettier/prettier */
import styled from "styled-components";
import React from "react";

const InputStyle = styled.div`

  input {
    height: 48px;
    width: 100%;
    background: #ffffff;
    border: 1px solid #afdeb1;
    padding: 16px 0 16px 16px;
    color: #43a047;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #afdeb1;
    }
  }

  
  textarea {
    width: 100%;
    border: 1px solid #AFDEB1;
    outline: none;
    color: #43a047;
    font-size: 16px;
    padding: 16px 0 16px 16px;
    transition: all 0.3s ease-out;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #afdeb1;
    }
  }

`;

const Input = React.forwardRef((props, ref) => {
  return (
    <InputStyle className={props.className}>
      <input
        ref={ref}
        id={props.name}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        required={props.required && true}
      />
    </InputStyle>
  );
});

export default Input;

export const TextArea = React.forwardRef((props, ref) => {
  return (
    <InputStyle className={props.className}>
      <textarea
        rows="10"
        ref={ref}
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        required={props.required && true}
       />
    </InputStyle>
  );
});
