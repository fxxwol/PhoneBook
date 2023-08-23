import React from 'react';
import { FormControl, Input, InputLabel } from '@mui/material';
import { SubmitBtn } from 'components/ContactForm/ContactForm.styled';
import { useFormik } from 'formik';
import { Form } from './ContactForm/ContactForm.styled';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authThunk';

function LoginForm() {
  const dispatch = useDispatch();

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: values => {
      const errors = {};
      try {
        LoginSchema.validateSync(values, { abortEarly: false });
      } catch (validationErrors) {
        validationErrors.inner.forEach(error => {
          errors[error.path] = error.message;
        });
      }

      return errors;
    },
    onSubmit: user => {
      dispatch(login(user))
      formik.resetForm();
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormControl>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input
          size="small"
          type="text"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="on"
          error={formik.touched.email && Boolean(formik.errors.email)}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          id="password"
          type="password"
          name="password"
          value={formik.values.password}
          error={formik.touched.password && Boolean(formik.errors.password)}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="on"
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
      </FormControl>
      <SubmitBtn type="submit">Add contact</SubmitBtn>
    </Form>
  );
}

export default LoginForm;
