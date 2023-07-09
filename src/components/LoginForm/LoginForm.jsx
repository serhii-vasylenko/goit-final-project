import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/operations';

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
  EnvelopeIconStyled,
  LockIconStyled,
  ErrorIconStyled,
  CorrectIconIconStyled,
} from './LoginForm.styled';

const getStatus = (err, touched, isVal, isSub) => {
	if (err && touched) return 'error';
	if (!isVal && !isSub && !err) return 'correct';
};


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
	 
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(3, 'Must be more than 3 characters')
        .required('Required'),
    }),

    onSubmit: values => {
      console.log('values', values);
      // console.log(JSON.stringify(values, null, 2));

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

      <LabelGroup>
		<EnvelopeIconStyled width="24" height="24" fill= 'none'>
          <use href={`${sprite}#icon-mail-01`}></use>
        </EnvelopeIconStyled>
      </LabelGroup>

      <InputGroup>
        <Input
          id="email"
          name="email"
          type="text"
          placeholder="Email"
          onChange={handleChange}
          value={values.email}
          ValidationState={getStatus(errors.email, touched.email, isValid, isSubmitting)}
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
		<LockIconStyled width="24" height="24" fill= 'none'>
          <use href={`${sprite}#icon-lock-02`}></use>
        </LockIconStyled>
      </LabelGroup>

      <InputGroup>
        <Input
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Password"
          value={values.password}
          ValidationState={getStatus(errors.password, touched.password, isValid, isSubmitting)}
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

      <BtnSubmit type="submit">Sing in</BtnSubmit>
    </Form>
  );
};
