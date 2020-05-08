import styled from "styled-components";

export const Container = styled.div`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  margin: 0 auto;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  @media only screen and (min-width: 600px) {
    width: 23.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const FormContainer = styled.div`
  height: 100vh;
  margin: 0 auto;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (min-width: 600px) {
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #afdeb1;
  }
`;

export const AppTitle = styled.p`
  display: block;
  padding: 1.2rem 0;
  width: 23.4rem;
  text-align: center;
  font: Bold 14px/16px Arial;
  letter-spacing: 0px;
  color: #43a047;
  text-transform: uppercase;
`;

export const FormTitle = styled.h1`
  margin: 1.5rem 0;
  height: 22px;
  text-align: center;
  font: Bold 20px/30px Arial;
  letter-spacing: 0px;
  color: #43a047;
`;

export const FormGroup = styled.form`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 600px) {
    width: 23.4rem;
    min-height: 60vh;
  }
`;

export const Input = styled.input`
  margin: 0 auto;
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  width: 20rem;
  height: 2.5rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #afdeb1;
`;

export const Text = styled.p`
  width: 20rem;
  height: 3rem;
  width: 100%;
  font-size: 0.7rem;
  text-align: center;
  font: Regular 10px/20px Arial;
  letter-spacing: 0px;
  color: #43a047;
`;

export const FormButton = styled.button`
  margin: 0 auto;
  margin-bottom: 1rem;
  width: 20rem;
  height: 3rem;
  color: white;
  background: #43a047 0% 0% no-repeat padding-box;
  border-radius: 4px;
`;

export const FormLink = styled.div`
  width: 23.4rem;
  margin: 0 auto;
  padding: 1rem 0;
  padding-top: -5rem;
  color: white;
  text-align: center;
  background: #7ac77d 0% 0% no-repeat padding-box;
  position: relative;
  bottom: 0;
  left: 0;
`;

export const ValidationError = styled.div`
  font-size: 0.8rem;
  color: red;
  text-align: left;
  margin-bottom: 0.3rem;
`;
