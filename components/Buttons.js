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

export const LoaderContainer = styled.div`
  height: 48px;
  border: none;
  outline: none;
  // background: #43a047;
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

const NewReportButtonSyled = styled.div`
  height: 54px;
  width: 54px;
  background: #43a047;
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 80px;
  right: 18px;
  box-shadow: 0px 0px 7px #0000001a;
`;

export const NewReportButton = () => {
  return (
    <Link href="reports/makeReport">
      <a>
        <NewReportButtonSyled>
          <img src="/images/ic_file_new.svg" alt="make report" />
        </NewReportButtonSyled>
      </a>
    </Link>
  );
};

export const NewTripButton = () => {
  return (
    <Link href="new-trip">
      <a>
        <NewReportButtonSyled>
          <img src="/images/add-trip.svg" alt="add trip" />
        </NewReportButtonSyled>
      </a>
    </Link>
  );
};
