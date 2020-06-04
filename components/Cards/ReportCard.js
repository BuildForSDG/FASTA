import styled from "styled-components";
import Link from "next/link";

import { TextSmall } from "../Text/Body";

const ReportCardStyle = styled.div`
  background: #ffffff;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid transparent;
  border-radius: 10px;
  transition: 0.3s ease;

  &:hover {
    border: 1px solid #afdeb1;
  }

  .details {
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

const ReportCard = (props) => {
  return (
    <Link href="/reports/[id]" as={`/reports/${props.id}`}>
      <a>
        <ReportCardStyle className="mb-5 p-4 pr-5">
          <h4 className="text-base font-semibold" style={{ color: "#43A047" }}>
            {props.type}
          </h4>
          <TextSmall color="#232323">{props.location}</TextSmall>
          <p style={{ color: "#6C6C6C" }} className="text-xs">
            {props.timestamp}
          </p>

          <TextSmall color="#232323" className={`mt-4 ${props.details && "details"} text-justify`}>
            {props.description}
          </TextSmall>
        </ReportCardStyle>
      </a>
    </Link>
  );
};

export default ReportCard;
