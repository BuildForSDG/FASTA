import React from "react";
import styled from "styled-components";
import { TextSmall } from "./Text/Body";

const MapInputStyle = styled.div`
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 10px;
  background: #ffffff;
`;

const InputFieldStyle = styled(MapInputStyle)`
  input,
  select {
    width: 100%;
    height: 100%;
    color: #43A047;
    outline: none;

    &:focus {
      border: none;
      outline: none;
    }

    option {
      border: none;
      outline: none;
    }

    ::placeholder {
      color: #7CBC7F;
    }
  }
`;

export const TypeInput = React.forwardRef((props, ref) => {
  return (
    <InputFieldStyle className="mb-4 py-2 px-4">
      <input ref={ref} type={props.type} name={props.name} placeholder={props.placeholder} />
    </InputFieldStyle>
  );
});

export const SelectInput = React.forwardRef((props, ref) => {
  return (
    <InputFieldStyle className="mb-4 py-2 px-4">
      <select ref={ref} onChange={props.onChange} name={props.name}>
        <option value="" className="capitalize">
          {props.placeholder}
        </option>
        {props.options.map((option, idx) => (
          <option key={idx} value={option} className="capitalize">
            {option}
          </option>
        ))}
      </select>
    </InputFieldStyle>
  );
});

export const LocationInput = (props) => {
  return (
    <MapInputStyle className="mb-4 py-2 px-4" onClick={props.onClick}>
      <p style={{ color: "#2699FB" }} className="text-xs capitalize">
        {props.label}
      </p>
      <TextSmall color="#43A047" className="truncate">
        {props.input}
      </TextSmall>
    </MapInputStyle>
  );
};
