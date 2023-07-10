import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/auth/operations';

import sprite from '../../images/sprite.svg';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  BtnSubmit,
  ErrMessage,
  Form,
  Input,
  Title,
  LabelGroup,
  InputGroup,
  ErrorIconStyled,
  CorrectIconIconStyled,
  LabelIcon,
} from './AuthForm.styled';

const getStatus = (err, touched, isVal, isSub) => {
  if (err && touched) return 'error';
  if (!isVal && !isSub && !err) return 'correct';
};

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
	 
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(3, 'Must be more than 3 characters')
        .required('Required'),
    }),

    onSubmit: values => {
      console.log('values', values);

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

      <LabelGroup>
        <LabelIcon>
          <use href={`${sprite}#icon-user-01`}></use>
        </LabelIcon>
      </LabelGroup>

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
        <ErrMessage>
          {errors.name && touched.name ? <span>{errors.name}</span> : null}
        </ErrMessage>

        {errors.name && touched.name ? <ErrorIconStyled /> : null}
        {!isValid && !isSubmitting && !errors.name ? (
          <CorrectIconIconStyled />
        ) : null}
      </InputGroup>

      <LabelGroup>
		<LabelIcon>
          <use href={`${sprite}#icon-mail-01`}></use>
        </LabelIcon>
      </LabelGroup>

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
        <ErrMessage>
          {errors.email && touched.email ? <span>{errors.email}</span> : null}
        </ErrMessage>

        {errors.email && touched.email ? <ErrorIconStyled /> : null}
        {!isValid && !isSubmitting && !errors.email ? (
          <CorrectIconIconStyled />
        ) : null}
      </InputGroup>

      <LabelGroup>
		<LabelIcon>
          <use href={`${sprite}#icon-lock-02`}></use>
        </LabelIcon>
      </LabelGroup>

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
            isSubmitting
          )}
        />
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

      <BtnSubmit type="submit">Sing up</BtnSubmit>
    </Form>
  );
};
