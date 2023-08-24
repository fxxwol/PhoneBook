import { FormControl, Input, InputLabel } from '@mui/material';
import { SubmitBtn } from 'components/ContactForm/ContactForm.styled';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authThunk';
import * as Yup from 'yup';
import { AuthForm, AuthFormCard, AuthHelperText, FormTitle } from './AuthForms.styled';
import { useAuth } from 'hooks/useAuth';

function RegisterForm() {
  const dispatch = useDispatch();
  const { isLogging } = useAuth();
  
  const RegisterSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required')
      .matches(/^[a-zA-Zа-яА-Я\s'-]+$/, 'Name can only contain letters'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validate: values => {
      const errors = {};
      try {
        RegisterSchema.validateSync(values, { abortEarly: false });
      } catch (validationErrors) {
        validationErrors.inner.forEach(error => {
          errors[error.path] = error.message;
        });
      }

      return errors;
    },
    onSubmit: user => {
      dispatch(register(user));
      formik.resetForm();
    },
  });

  return (
    <AuthFormCard>
      <FormTitle>Sign up to PhoneBook</FormTitle>
      <AuthForm onSubmit={formik.handleSubmit}>
        <FormControl>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input
            size="small"
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="on"
            error={formik.touched.name && Boolean(formik.errors.name)}
          />
          {formik.touched.name && formik.errors.name ? (
            <AuthHelperText>{formik.errors.name}</AuthHelperText>
          ) : null}
        </FormControl>
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
            <AuthHelperText>{formik.errors.email}</AuthHelperText>
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
            <AuthHelperText>{formik.errors.password}</AuthHelperText>
          ) : null}
        </FormControl>
          <SubmitBtn type="submit" disabled={isLogging}>
            Sign up
          </SubmitBtn>
        {/* )} */}
      </AuthForm>
    </AuthFormCard>
  );
}

export default RegisterForm;
