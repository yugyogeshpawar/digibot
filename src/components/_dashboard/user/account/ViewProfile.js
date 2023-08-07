import * as Yup from 'yup';
import { useSnackbar } from 'notistack5';
import { Form, FormikProvider, useFormik } from 'formik';
// material
import { Grid, Card, Stack, TextField } from '@material-ui/core';
// hooks
import useAuth from '../../../../hooks/useAuth';
import useIsMountedRef from '../../../../hooks/useIsMountedRef';

// ----------------------------------------------------------------------

export default function ViewProfile() {
  const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar } = useSnackbar();
  const { user, updateProfile } = useAuth();
  const UpdateUserSchema = Yup.object().shape({
    displayName: Yup.string().required('Name is required')
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      displayName: user.member_name == null ? '' : user.member_name,
      email: user.email == null ? '' : user.email,
      photoURL: user.photoURL,
      phoneNumber: user.phoneNumber == null ? '' : user.phoneNumber,
      country: user.country == null ? '' : user.country,
      address: user.address == null ? '' : user.address,
      state: user.state == null ? '' : user.state,
      city: user.city == null ? '' : user.city,
      zipCode: user.zipCode == null ? '' : user.zipCode,
      about: user.displayName == null ? '' : user.displayName,
      isPublic: user.isPublic
    },

    validationSchema: UpdateUserSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        await updateProfile({ ...values });
        enqueueSnackbar('Update success', { variant: 'success' });
        if (isMountedRef.current) {
          setSubmitting(false);
        }
      } catch (error) {
        if (isMountedRef.current) {
          setErrors({ afterSubmit: error.code });
          setSubmitting(false);
        }
      }
    }
  });

  const { handleSubmit, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card sx={{ p: 3 }}>
              <Stack spacing={{ xs: 2, md: 3 }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                  <TextField fullWidth label="User Name" disabled {...getFieldProps('displayName')} />
                  <TextField fullWidth disabled label="Email Address" {...getFieldProps('email')} />
                </Stack>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                  <TextField fullWidth label="Full Name" disabled />
                  <TextField fullWidth label="Country code" disabled />
                </Stack>

                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                  <TextField fullWidth label="Mobile Number" disabled {...getFieldProps('phoneNumber')} />
                  <TextField fullWidth label="Address" disabled {...getFieldProps('address')} />
                </Stack>

                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                  <TextField fullWidth label="State/Region" disabled {...getFieldProps('state')} />
                </Stack>

                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                  <TextField fullWidth label="City" disabled {...getFieldProps('city')} />
                  <TextField fullWidth label="Zip/Code" disabled {...getFieldProps('zipCode')} />
                </Stack>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Form>
    </FormikProvider>
  );
}
