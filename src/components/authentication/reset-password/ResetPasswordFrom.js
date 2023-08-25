import * as Yup from 'yup';
import * as React from 'react';
import { useLocation, useNavigate, Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Form, FormikProvider, useFormik } from 'formik';
import { useSnackbar } from 'notistack5';
// material
import { TextField, Alert, Stack } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
import axios from 'axios';
// hooks
import useAuth from '../../../hooks/useAuth';
import useIsMountedRef from '../../../hooks/useIsMountedRef';

// ----------------------------------------------------------------------

ChangePasswordForm.propTypes = {
  onSent: PropTypes.func,
  onGetPassword: PropTypes.func,
  onGetConfirmPassword: PropTypes.func
};

export default function ChangePasswordForm() {
  const { resetPassword } = useAuth();
  const isMountedRef = useIsMountedRef();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');

  const getCharacterValidationError = (str) => `Your password must have at least 1 ${str} character`;

  const ChangePasswordSchema = Yup.object().shape({
    password: Yup.string()
      .required('No password provided.')
      .min(8, 'Password must have at least 8 characters')
      .matches(/[0-9]/, getCharacterValidationError('digit'))
      .matches(/[a-z]/, getCharacterValidationError('lowercase'))
      .matches(/[A-Z]/, getCharacterValidationError('uppercase')),
    confirmPassword: Yup.string()
      .required('Please re-type your password')
      .oneOf([Yup.ref('password')], 'Passwords does not match')
  });

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: ''
    },
    validationSchema: ChangePasswordSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        if (isMountedRef.current) {
          console.log('called onsubmit');
          setSubmitting(false);
          const res = await resetPassword(formik.values.password, formik.values.confirmPassword, token);
          if (res.message === 'Invalid token') {
            enqueueSnackbar(res.message, { variant: 'error' });
          }
          if (res.message === 'Password updated successfully') {
            enqueueSnackbar('Password updated successfully', { variant: 'success' });
            navigate('/dashboard/app');
          }
        }
      } catch (error) {
        console.error(error);
        if (isMountedRef.current) {
          setErrors({ afterSubmit: error.message });
          setSubmitting(false);
        }
      }
    }
  });

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          {errors.afterSubmit && <Alert severity="error">{errors.afterSubmit}</Alert>}

          <TextField
            fullWidth
            {...getFieldProps('password')}
            type="password"
            label="New Password"
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
          <TextField
            fullWidth
            {...getFieldProps('confirmPassword')}
            type="password"
            label="Confirm New Password"
            error={Boolean(touched.confirmPassword && errors.confirmPassword)}
            helperText={touched.confirmPassword && errors.confirmPassword}
          />

          <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
            Change Password
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
