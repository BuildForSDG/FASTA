/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";

import styled from "styled-components";
import Link from "next/link";

import { TextSmall } from "../Text/Body";
import { SubmitButton } from "../../components/Buttons";


const TripCardStyle = styled.div`
  background: #ffffff;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid transparent;
  border-radius: 10px;
  transition: 0.3s ease;
  position: relative;

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

const AlertCardStyle = styled.div`
  border-radius: 10px;
  padding: 60px 26px 46px;
`;

const DeleteButtonStyle = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
`;

const DeleteButton = (props) => {
  const [toDelete, setToDelete] = useState(false);
  const [hasDeleted, setHasDeleted] = useState(false);
  toDelete || hasDeleted && (document.body.style.overflow = "hidden");

  const cancelDelete = () => {
    setToDelete(false);
    setHasDeleted(false);
  };

  const confirmTripDelete = () => {
    alert(`Trip ${props.id} deleted`);
    setToDelete(false);
    setHasDeleted(true);
  };

  const deleteTrip = (e) => {
    setToDelete(true);
  };

  return (
    <DeleteButtonStyle id={props.id}>
      <img src="/images/delete.svg" alt="delete trip" onClick={deleteTrip} />

      {toDelete && (
        <div
          className="h-screen w-screen fixed top-0 left-0 z-40 flex justify-center items-center pb-16"
          style={{ backgroundColor: "#DEB1AF99" }}
        >
          <AlertCardStyle className="w-10/12 bg-white">
            <img src="/images/Icon feather-alert-circle.svg" alt="" className="mx-auto mb-12" />
            <TextSmall className="text-center mb-6" style={{ color: "#A04743" }}>
              Are you sure you want to delete this trip?
            </TextSmall>

            <div className="flex justify-around items-center">
              <SubmitButton className="w-5/12 " style={{ backgroundColor: "#A04743" }} onClick={confirmTripDelete}>
                delete
              </SubmitButton>

              <SubmitButton className="w-5/12" onClick={cancelDelete}>
                cancel
              </SubmitButton>
            </div>
          </AlertCardStyle>
        </div>
      )}

      {hasDeleted && (
        <div
          className="h-screen w-screen fixed top-0 left-0 z-40 flex justify-center items-center pb-16"
          style={{ backgroundColor: "#AFDEB199" }}
        >
          <AlertCardStyle className="w-10/12 bg-white">
            <img src="/images/success.svg" alt="" className="mx-auto mb-12" />
            <TextSmall className="text-center mb-6" style={{ color: "#43A047" }}>
              Your Scheduled trip has been deleted.
            </TextSmall>

            <SubmitButton className="w-full" onClick={cancelDelete}>
              close
            </SubmitButton>
          </AlertCardStyle>
        </div>
      )}
    </DeleteButtonStyle>
  );
};

const TripCard = (props) => {
  return (
    <TripCardStyle className="mb-5 p-4 pr-5">
      <DeleteButton id={props.id} />

      <p style={{ color: "#2699FB" }} className="text-xs">
        Start Position
      </p>
      <TextSmall color="#6C6C6C">{props.origin}</TextSmall>

      <p style={{ color: "#2699FB" }} className="text-xs mt-4">
        End Position
      </p>
      <TextSmall color="#6C6C6C">{props.destination}</TextSmall>

      <p style={{ color: "#2699FB" }} className="text-xs mt-4">
        Scheduled For:
      </p>
      <TextSmall color="#6C6C6C">{props.time}</TextSmall>

      <div style={{ color: "#43A047" }} className="text-center uppercase font-bold text-xs mt-3">
        <Link href="/trips/[id]" as={`/trips/${props.id}`}>
          <a>Start trip now</a>
        </Link>
      </div>
    </TripCardStyle>
  );
};

export default TripCard;
