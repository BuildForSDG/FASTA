import styled from "styled-components";
import Link from "next/link";

export const SubmitButton = styled.button`
  height: 48px;
  border: none;
  outline: none;
  background: #43a047;
  border-radius: 4px;
  padding-top: 16px;
  padding-bottom: 16px;
  text-transform: uppercase;
  text-align: center;
  color: #ffffff;
  font-size: 10px;
  font-weight: bold;

  &:focus {
    outline: none;
  }
`;

const LinkButtonStyle = styled.div`
  height: 48px;
  border: none;
  outline: none;
  background: #43a047;
  border-radius: 4px;
  padding-top: 16px;
  padding-bottom: 16px;
  text-transform: uppercase;
  text-align: center;
  color: #ffffff;
  font-size: 10px;
  font-weight: bold;

  &:focus {
    outline: none;
  }
`;

export const LinkButton = (props) => {
  return (
    <Link href={props.href}>
      <a>
        <LinkButtonStyle>{props.children}</LinkButtonStyle>
      </a>
    </Link>
  );
};
