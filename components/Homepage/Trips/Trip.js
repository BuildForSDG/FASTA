import styled from 'styled-components';

const Trip = styled.div`
  background-color: #fff;
  border: 1px solid #afdeb1;
  border-radius: 10px;
  color: #6c6c6c;
  padding: 10px 20px;
  span {
    display: block;
  }
  margin-bottom: 24px;
`;
const Start = styled.span``;
const End = styled.span``;

const Trips = () => {
  return (
    <Trip className="trip">
      <Start>Start Point : Rumuokoro, Port Harcourt</Start>
      <span>to</span>
      <End>End Point : Rumuokoro, Port Harcourt</End>
    </Trip>
  )
};

export default Trips;
