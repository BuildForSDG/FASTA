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

const Signup = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = () => {};

  return (
    <Container>
      <FormContainer>
        <AppTitle>Fasta</AppTitle>
        <FormGroup onSubmit={handleSubmit(onSubmit)}>
          <FormTitle>Create an Account</FormTitle>
          <Input
            type="text"
            ref={register({ required: "Full name is required" })}
            name="fullname"
            placeholder="Full name"
          />
          {errors.fullname && (
            <ValidationError>{errors.fullname.message}</ValidationError>
          )}
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
            ref={register({
              required: "Phone number is required",
            })}
            name="phone_number"
            placeholder="Phone number"
          />
          {errors.phone_number && (
            <ValidationError>{errors.phone_number.message}</ValidationError>
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
          <Input
            type="text"
            ref={register({ required: "Confirm Password is required" })}
            name="confirm_password"
            placeholder="Confirm Password"
          />
          {errors.confirm_password && (
            <ValidationError>{errors.confirm_password.message}</ValidationError>
          )}
          <Text>
            By creating an account you agree to our <br /> Terms of Service and
            Privacy Policy.
          </Text>
          <FormButton>CONTINUE</FormButton>
          <Text>Already have an Account? </Text>
        </FormGroup>
        <Link to="/login">
          <FormLink>LOGIN</FormLink>
        </Link>
      </FormContainer>
    </Container>
  );
};

export default Signup;
