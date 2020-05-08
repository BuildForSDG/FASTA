import styled from 'styled-components';
import Trips from './Trip';

const Recent = styled.p`
  padding: 10px 0;
  font-size: 20px;
  margin-top: 10px;
`;

const RecentTrips = () => {
  return (
    <div className="trips">
      <Recent>Your Recent Trips</Recent>
      <Trips />
      <Trips />
    </div>
  );
};

export default RecentTrips;
