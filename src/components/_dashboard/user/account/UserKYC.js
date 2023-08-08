import * as Yup from 'yup';
import { useSnackbar } from 'notistack5';
import { useCallback } from 'react';
import { Form, FormikProvider, useFormik } from 'formik';
// material
import { Box, Grid, Card, Stack, TextField } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
// hooks
import useAuth from '../../../../hooks/useAuth';
import useIsMountedRef from '../../../../hooks/useIsMountedRef';

// ----------------------------------------------------------------------

export default function AccountGeneral() {
  const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar } = useSnackbar();
  const { user, updateProfile } = useAuth();
  const UpdateUserSchema = Yup.object().shape({
    displayName: Yup.string().required('Name is required'),
    address: Yup.string()
      .min(30, 'Wallet address should be at least 30 characters long')
      .required('Wallet address is required')
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      address: ''
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

  const { isSubmitting, handleSubmit, getFieldProps, setFieldValue } = formik;

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        setFieldValue('photoURL', {
          ...file,
          preview: URL.createObjectURL(file)
        });
      }
    },
    [setFieldValue]
  );

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Card sx={{ p: 3 }}>
              <Stack spacing={{ xs: 2, md: 3 }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                  <TextField
                    fullWidth
                    label="Wallet Address"
                    {...getFieldProps('address')}
                    // eslint-disable-next-line no-unneeded-ternary
                    error={formik.touched.address && formik.errors.address ? true : false}
                    helperText={formik.touched.address && formik.errors.address ? formik.errors.address : null}
                  />
                </Stack>
              </Stack>

              <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                  Add Wallet Address
                </LoadingButton>
              </Box>
              <Box>
                <h1>Important </h1>
                <ol style={{ marginLeft: '16px' }}>
                  <li>Your wallet should be Metamask register</li>
                  <li>Wallet address should be at least 30 characters long.</li>
                  <li>Sending any other wallet address may result in the loss</li>
                  <li>
                    Please check your wallet carefully before add , once you add then you can't change your wallet
                    address{' '}
                  </li>
                  <li>Withdraw will automatically be processed after 3 network confirmations.</li>
                </ol>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Form>
    </FormikProvider>
  );
}
