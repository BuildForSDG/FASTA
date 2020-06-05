import styled from "styled-components";
import Link from "next/link";

export const Grid = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 20px;
  overflow-x: auto;
  padding: 10px;
`;

const BasicCardStyle = styled.div`
  background: #ffffff;
  width: 256px;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid transparent;
  border-radius: 10px;
  transition: 0.3s ease;
  position: relative;

  &:hover {
    border: 1px solid #afdeb1;
  }

  .services {
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
  }
`;

const ActionButtonStyle = styled.div`
  position: absolute;
  top: 30%;
  right: 15px;
  height: 40px;
  width: 40px;
  background: #ffffff;
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 7px #0000001a;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const TransportCompany = (props) => {
  return (
    <BasicCardStyle className="pl-4 py-3">
      <ActionButtonStyle as="button" id={props.id} onClick={props.onClick}>
        <img src="/images/success.svg" alt="make report" />
      </ActionButtonStyle>
      <h2 style={{ color: "#232323" }}>{props.business_name}</h2>
      <p style={{ color: "#7F7F7F" }} className="text-xs services">
        {props.services}
      </p>
      {props.status === true ? (
        <p style={{ color: "#43A047" }} className="text-xs">
          available
        </p>
      ) : (
        <p style={{ color: "#43A047" }} className="text-xs text-red-500">
          unavailable
        </p>
      )}

      <p style={{ color: "#6C6C6C" }} className="text-xs">
        {props.distance} from your position
      </p>
    </BasicCardStyle>
  );
};

export const TransportProvider = (props) => {
  return (
    <BasicCardStyle className="pl-4 py-3">
      <Link href={`tel:${props.phone}`}>
        <a>
          <ActionButtonStyle>
            <img src="/images/phone.svg" alt="make report" />
          </ActionButtonStyle>
        </a>
      </Link>
      <h2 style={{ color: "#232323" }}>{props.business_name}</h2>
      <p style={{ color: "#7F7F7F" }} className="text-xs">
        {props.vehicle_type}
      </p>
      {props.status === true ? (
        <p style={{ color: "#43A047" }} className="text-xs">
          available
        </p>
      ) : (
        <p className="text-xs text-red-500">unavailable</p>
      )}

      <p style={{ color: "#6C6C6C" }} className="text-xs">
        {props.distance} from your position
      </p>
    </BasicCardStyle>
  );
};
