import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/auth/operations';

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
  WarnIconIconStyled,
  LabelIcon,
  WarnMessage,
} from './AuthForm.styled';
import {
  checkPasswordSecure,
  registrationSchema,
} from 'helpers/registerValidationShema';
import { getStatus } from 'helpers/utils';

export const AuthForm = () => {
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
      name: '',
      email: '',
      password: '',
    },

    validationSchema: registrationSchema,

    onSubmit: values => {
      dispatch(
        registerUser({
          name: values.name,
          email: values.email,
          password: values.password,
        })
      );
      resetForm();
    },
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Registration</Title>

      <InputGroup>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          autocomplete="off"
          onChange={handleChange}
          value={values.name}
          ValidationState={getStatus(
            errors.name,
            touched.name,
            isValid,
            isSubmitting
          )}
        />
        <LabelIcon
          ValidationState={getStatus(
            errors.name,
            touched.name,
            isValid,
            isSubmitting
          )}
        >
          <use href={`${sprite}#icon-user-01`}></use>
        </LabelIcon>

        <ErrMessage>
          {errors.name && touched.name ? <span>{errors.name}</span> : null}
        </ErrMessage>

        {errors.name && touched.name ? <ErrorIconStyled /> : null}

        {!isValid && !isSubmitting && !errors.name ? (
          <CorrectIconIconStyled />
        ) : null}
      </InputGroup>

      <InputGroup>
        <Input
          id="email"
          name="email"
          type="text"
          placeholder="Email"
          autocomplete="off"
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
          autocomplete="off"
          value={values.password}
          ValidationState={getStatus(
            errors.password,
            touched.password,
            isValid,
            isSubmitting,
            checkPasswordSecure(values.password)
          )}
        />

        <LabelIcon
          ValidationState={getStatus(
            errors.password,
            touched.password,
            isValid,
            isSubmitting,
            checkPasswordSecure(values.password)
          )}
        >
          <use href={`${sprite}#icon-lock-02`}></use>
        </LabelIcon>

        {values.password.length > 3 && checkPasswordSecure(values.password) && (
          <div>
            <CorrectIconIconStyled />
            <WarnMessage style={{ color: '#3CBC81' }}>
              password is secure
            </WarnMessage>
          </div>
        )}

        {values.password.length > 0 &&
          !errors.password &&
          //!touched.password &&
          !checkPasswordSecure(values.password) && (
            <div>
              <WarnIconIconStyled />
              <WarnMessage>You password is little secure</WarnMessage>
            </div>
          )}

        {!isValid &&
        !isSubmitting &&
        !errors.password &&
        checkPasswordSecure(values.password) ? (
          <CorrectIconIconStyled />
        ) : null}

        <ErrMessage>
          {errors.password && touched.password ? (
            <span>{errors.password}</span>
          ) : null}
        </ErrMessage>

        {errors.password && touched.password ? <ErrorIconStyled /> : null}
      </InputGroup>

      <BtnSubmit type="submit">Sing up</BtnSubmit>
    </Form>
  );
};
