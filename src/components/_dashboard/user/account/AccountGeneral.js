/* eslint-disable import/no-unresolved */
import * as Yup from 'yup';
import { useSnackbar } from 'notistack5';
import { useCallback } from 'react';
import { Form, FormikProvider, useFormik } from 'formik';

import { updateProfile } from 'src/redux/slices/user';
// material
import { Box, Grid, Card, Stack, TextField, Typography, FormHelperText } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
// hooks
import useAuth from '../../../../hooks/useAuth';
import useIsMountedRef from '../../../../hooks/useIsMountedRef';
import { UploadAvatar } from '../../../upload';
import CountryCodes from './countryCodes';

// utils
import { fData } from '../../../../utils/formatNumber';
//
import countries from '../countries';

// ----------------------------------------------------------------------

export default function AccountGeneral() {
  const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar } = useSnackbar();
  const { user } = useAuth();

  const UpdateUserSchema = Yup.object().shape({
    fullName: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    countryCode: Yup.string().required('Country code is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    country: Yup.string().required('Country is required'),
    address: Yup.string().required('Address is required'),
    state: Yup.string().required('State/Region is required'),
    city: Yup.string().required('City is required'),
    zip_code: Yup.string().required('Zip/Code is required')
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      fullName: user.full_name || '',
      email: user.email || '',
      photoURL: user.photoURL || null,
      phoneNumber: user.contact || '',
      countryCode: user.country_code || '',
      country: user.country || '',
      address: user.address || '',
      state: user.state || '',
      city: user.city || '',
      zip_code: user.zip_code || '',
      about: user.fullName || '',
      isPublic: user.isPublic || false
    },

    validationSchema: UpdateUserSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      console.log('calling form');
      try {
        const response = await updateProfile({ ...values });
        if (response.status === 200) {
          enqueueSnackbar('Update success', { variant: 'success' });
        } else {
          enqueueSnackbar(response.data.error || 'Update failed', { variant: 'error' });
        }
        console.log({ response });
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

  const sortedCountryCodes = CountryCodes.sort((a, b) => a.name.localeCompare(b.name));

  const { values, errors, touched, isSubmitting, handleSubmit, getFieldProps, setFieldValue } = formik;

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
          <Grid item xs={12} md={4}>
            <Card sx={{ py: 10, px: 3, textAlign: 'center' }}>
              <UploadAvatar
                accept="image/*"
                file={values.photoURL}
                maxSize={1000000}
                onDrop={handleDrop}
                error={Boolean(touched.photoURL && errors.photoURL)}
                caption={
                  <Typography
                    variant="caption"
                    sx={{
                      mt: 2,
                      mx: 'auto',
                      display: 'block',
                      textAlign: 'center',
                      color: 'text.secondary'
                    }}
                  >
                    Allowed *.jpg, *.png,
                    <br /> max size of {fData(1000000)}
                  </Typography>
                }
              />

              <FormHelperText error sx={{ px: 2, textAlign: 'center' }}>
                {touched.photoURL && errors.photoURL}
              </FormHelperText>
            </Card>
          </Grid>

          <Grid item xs={12} md={8}>
            <Card sx={{ p: 3 }}>
              <Stack spacing={{ xs: 2, md: 3 }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                  <TextField
                    required
                    fullWidth
                    label="User Name"
                    {...getFieldProps('fullName')}
                    error={touched.fullName && !!errors.fullName}
                    helperText={touched.fullName && errors.fullName}
                  />
                  <TextField
                    required
                    fullWidth
                    disabled
                    label="Email Address"
                    {...getFieldProps('email')}
                    error={touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                  />
                </Stack>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                  <TextField
                    select
                    required
                    fullWidth
                    label="Country code"
                    placeholder="Select Country Code"
                    {...getFieldProps('countryCode')}
                    SelectProps={{ native: true }}
                    error={touched.countryCode && !!errors.countryCode}
                    helperText={touched.countryCode && errors.countryCode}
                  >
                    {sortedCountryCodes.map((country) => (
                      <option key={country.name} value={country.code}>
                        {country.name} ({country.code})
                      </option>
                    ))}
                  </TextField>
                  <TextField
                    required
                    fullWidth
                    label="Mobile Number"
                    type="number"
                    {...getFieldProps('phoneNumber')}
                    error={touched.phoneNumber && !!errors.phoneNumber}
                    helperText={touched.phoneNumber && errors.phoneNumber}
                  />
                </Stack>

                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                  <TextField
                    required
                    fullWidth
                    label="Address"
                    {...getFieldProps('address')}
                    error={touched.address && !!errors.address}
                    helperText={touched.address && errors.address}
                  />
                </Stack>

                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                  <TextField
                    select
                    required
                    fullWidth
                    label="Country"
                    placeholder="Select Country"
                    {...getFieldProps('country')}
                    SelectProps={{ native: true }}
                    error={touched.country && !!errors.country}
                    helperText={touched.country && errors.country}
                  >
                    <option value="" />
                    {countries.map((option) => (
                      <option key={option.code} value={option.label}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                  <TextField
                    required
                    fullWidth
                    label="State/Region"
                    {...getFieldProps('state')}
                    error={touched.state && !!errors.state}
                    helperText={touched.state && errors.state}
                  />
                </Stack>

                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                  <TextField
                    required
                    fullWidth
                    label="City"
                    {...getFieldProps('city')}
                    error={touched.city && !!errors.city}
                    helperText={touched.city && errors.city}
                  />
                  <TextField
                    required
                    fullWidth
                    label="Zip/Code"
                    {...getFieldProps('zip_code')}
                    error={touched.zip_code && !!errors.zip_code}
                    helperText={touched.zip_code && errors.zip_code}
                  />
                </Stack>
              </Stack>

              <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                  Save Changes
                </LoadingButton>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Form>
    </FormikProvider>
  );
}
