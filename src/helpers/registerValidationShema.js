import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*\p{Lu})(?=.*\p{Ll}).{8,}$/u;
// min 8 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const registrationSchema = yup.object().shape({
  name: yup.string().required('name is required'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('email is required'),
  password: yup
    .string()
    .min(6, 'Must be more than 6 characters')
    .required('password is required'),
});

export const checkPasswordSecure = (password = '') => {
  const match = password.match(passwordRules);
  if (match !== null) return true;
  return false;
};

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email address')
    .required('email is required'),
  password: yup
    .string()
    .min(3, 'Must be more than 3 characters')
    .required('password is required'),
});

export const subscribeSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email address')
    .required('email is required'),
});
