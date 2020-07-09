/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Map from "../Map";

const MapCardStyle = styled.div`
  min-height: 50vh;
  width: 100vw;
  margin-top: 70px;
  // background: #AFDEB1;
  margin-bottom: 15px;
`;

// const MapCard = ({location}) => {
const MapCard = () => {
  // return <MapCardStyle />;
  const location = {lat: 6.33, lng: 3.33};
  return (
        // <MapCardStyle>
          <Map lat={location.lat} lng={location.lng} />
        // </MapCardStyle>
  );
};

export default MapCard;
