import React from 'react';
import {
  CorrectIconIconStyled,
  ErrorIconStyled,
  Form,
  Icon,
  Input,
  Label,
  Subscribe,
  Text,
  Title,
} from './SubscribeForm.styled';
import sprite from '../../images/sprite.svg';
import MainButton from 'components/ReusableComponents/MainButton/MainButton';
import { useFormik } from 'formik';
import { subscribeSchema } from 'helpers/registerValidationShema';
import { getStatus } from 'helpers/utils';

const SubscribeForm = () => {
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
    },
    validationSchema: subscribeSchema,
    onSubmit: values => {
      console.log('values', values);
      resetForm();
    },
  });
  return (
    <Subscribe onSubmit={handleSubmit}>
      <Title>Subscribe to our Newsletter</Title>
      <Text>
        Subscribe up to our newsletter. Be in touch with latest news and special
        offers, etc.
      </Text>
      <Form>
        <Label
          ValidationState={getStatus(
            errors.email,
            touched.email,
            isValid,
            isSubmitting
          )}
        >
          <Icon
            fill="none"
            ValidationState={getStatus(
              errors.email,
              touched.email,
              isValid,
              isSubmitting
            )}
          >
            <use href={`${sprite}#icon-mail-01`}></use>
          </Icon>
          <Input
            id="email"
            type="text"
            name="email"
            placeholder="Enter your email address"
            onChange={handleChange}
            value={values.email}
            ValidationState={getStatus(
              errors.email,
              touched.email,
              isValid,
              isSubmitting
            )}
          />
          {errors.email && touched.email ? <ErrorIconStyled /> : null}
          {!isValid && !isSubmitting && !errors.email ? (
            <CorrectIconIconStyled />
          ) : null}
        </Label>
        <MainButton
          type="submit"
          nameButton="Subscribe"
          padding={{
            paddingTop: '11px',
            paddingBottom: '11px',
            paddingLeft: '67px',
            paddingRight: '67px',
          }}
          fontSize="14px"
          borderRadius="6px"
          bgColor="#8BAA36"
          hoverParams={{ paramFirst: '#6b8328' }}
          cofByMedia768={{
            font: 1.125,
            padX: 1.45,
            padY: 0.75,
          }}
          cofByMedia1280={{
            font: 1.125,
            padX: 1.5,
            padY: 1.88,
          }}
        />
      </Form>
    </Subscribe>
  );
};

export default SubscribeForm;
