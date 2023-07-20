import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/operations';

import { useFormik } from 'formik';

import sprite from '../../images/sprite.svg';

import {
  BtnSubmit,
  ErrMessage,
  Form,
  Input,
  Title,
  InputGroup,
  ErrorIconStyled,
  CorrectIconIconStyled,
  LabelIcon,
} from './LoginForm.styled';
import { signInSchema } from 'helpers/registerValidationShema';
import { getStatus } from 'helpers/utils';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    isSubmitting,
    resetForm,
    isValid,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: signInSchema,

    onSubmit: values => {
      dispatch(
        loginUser({
          email: values.email,
          password: values.password,
        })
      );
      resetForm();
    },
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Sign In</Title>

      <InputGroup>
        <Input
          id="email"
          name="email"
          type="text"
          placeholder="Email"
          onChange={handleChange}
          value={values.email}
          ValidationState={getStatus(
            errors.email,
            touched.email,
            isValid,
            isSubmitting
          )}
        />
        <LabelIcon
          ValidationState={getStatus(
            errors.email,
            touched.email,
            isValid,
            isSubmitting
          )}
        >
          <use href={`${sprite}#icon-mail-01`}></use>
        </LabelIcon>

        <ErrMessage>
          {errors.email && touched.email ? <span>{errors.email}</span> : null}
        </ErrMessage>

        {errors.email && touched.email ? <ErrorIconStyled /> : null}
        {!isValid && !isSubmitting && !errors.email ? (
          <CorrectIconIconStyled />
        ) : null}
      </InputGroup>

      <InputGroup>
        <Input
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Password"
          value={values.password}
          ValidationState={getStatus(
            errors.password,
            touched.password,
            isValid,
            isSubmitting
          )}
        />

        <LabelIcon
          ValidationState={getStatus(
            errors.password,
            touched.password,
            isValid,
            isSubmitting
          )}
        >
          <use href={`${sprite}#icon-lock-02`}></use>
        </LabelIcon>

        <ErrMessage>
          {errors.password && touched.password ? (
            <span>{errors.password}</span>
          ) : null}
        </ErrMessage>

        {errors.password && touched.password ? <ErrorIconStyled /> : null}

        {!isValid && !isSubmitting && !errors.password ? (
          <CorrectIconIconStyled />
        ) : null}
      </InputGroup>

      <BtnSubmit type="submit">Sing in</BtnSubmit>
    </Form>
  );
};
