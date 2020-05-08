import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import {
  Container,
  FormContainer,
  AppTitle,
  FormTitle,
  FormGroup,
  Input,
  Text,
  FormButton,
  FormLink,
  ValidationError,
} from "./FormComponents";

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = () => {};

  return (
    <Container>
      <FormContainer style>
        <AppTitle>Fasta</AppTitle>
        <FormGroup onSubmit={handleSubmit(onSubmit)}>
          <FormTitle>Login</FormTitle>
          <Input
            type="text"
            ref={register({
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "invalid email address",
              },
            })}
            name="email"
            placeholder="Email"
          />
          {errors.email && (
            <ValidationError>{errors.email.message}</ValidationError>
          )}
          <Input
            type="text"
            ref={register({ required: "Password is required" })}
            name="password"
            placeholder="Password"
          />
          {errors.password && (
            <ValidationError>{errors.password.message}</ValidationError>
          )}
          <Text>Forgot Password</Text>
          <FormButton>LOGIN</FormButton>
          <Text>Don&apos;t have an Account? </Text>
        </FormGroup>
        <Link to="/signup">
          <FormLink>REGISTER</FormLink>
        </Link>
      </FormContainer>
    </Container>
  );
};

export default Login;
