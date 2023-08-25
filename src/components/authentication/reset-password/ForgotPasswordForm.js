import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { Form, FormikProvider, useFormik } from 'formik';
import { useSnackbar } from 'notistack5';
// material
import { TextField, Alert, Stack } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
import axios from 'axios';
// routes
import { PATH_AUTH } from '../../../routes/paths';
// hooks
import useAuth from '../../../hooks/useAuth';
import useIsMountedRef from '../../../hooks/useIsMountedRef';

// ----------------------------------------------------------------------

ResetPasswordForm.propTypes = {
  onSent: PropTypes.func,
  onGetEmail: PropTypes.func
};

export default function ResetPasswordForm({ onSent, onGetEmail }) {
  const { forgotPassword } = useAuth();
  const isMountedRef = useIsMountedRef();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required')
  });

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: ResetPasswordSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        // await resetPassword(values.email);
        if (isMountedRef.current) {
          sessionStorage.setItem('email', formik.values.email);
          const res = await forgotPassword(formik.values.email);
          console.log(res);
          if (res.error === 'User Not Found') {
            enqueueSnackbar('User Not Found', { variant: 'error' });
          } else {
            enqueueSnackbar('OTP Sent', { variant: 'success' });
          }
        }
      } catch (error) {
        console.error(error);
        enqueueSnackbar(error.data.message, { variant: 'error' });
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
            {...getFieldProps('email')}
            type="email"
            label="Email address"
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
            Send OTP
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
