import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Form, FormikProvider, useFormik } from 'formik';
import { useSnackbar } from 'notistack5';
// material
import { TextField, Alert, Stack } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
// hooks
import useAuth from '../../../hooks/useAuth';
import useIsMountedRef from '../../../hooks/useIsMountedRef';

// ----------------------------------------------------------------------

ResetPasswordForm.propTypes = {
  onSent: PropTypes.func,
  onGetEmail: PropTypes.func
};

export default function ResetPasswordForm() {
  const { forgotPassword } = useAuth();
  const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar } = useSnackbar();

  const ResetPasswordSchema = Yup.object().shape({
    userid: Yup.string().required('User ID is required')
  });

  const formik = useFormik({
    initialValues: {
      userid: '' // Change 'email' to 'userid' here
    },
    validationSchema: ResetPasswordSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        // await resetPassword(values.userid);
        if (isMountedRef.current) {
          sessionStorage.setItem('userid', formik.values.userid);
          const res = await forgotPassword(formik.values.userid);
          console.log(res);
          if (res.message) {
            enqueueSnackbar(res.message, { variant: 'success' });
          } else {
            enqueueSnackbar('Invalid Credentials.', { variant: 'error' });
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
            {...getFieldProps('userid')}
            label="User ID"
            type="Number"
            error={Boolean(touched.userid && errors.userid)} // Change 'email' to 'userid' here
            helperText={touched.userid && errors.userid} // Change 'email' to 'userid' here
          />

          <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
            Send Mail
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
