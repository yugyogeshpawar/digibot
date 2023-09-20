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
import MyAvatar from '../../../MyAvatar';
import CountryCodes from './countryCodes';

// utils
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
      fullName: user.full_name == null ? '' : user.full_name,
      email: user.email == null ? '' : user.email,
      photoURL: user.photoURL,
      phoneNumber: user.contact == null ? '' : user.contact,
      countryCode: user.country_code == null ? '' : user.country_code,
      country: user.country == null ? '' : user.country,
      address: user.address == null ? '' : user.address,
      state: user.state == null ? '' : user.state,
      city: user.city == null ? '' : user.city,
      zip_code: user.zip_code == null ? '' : user.zip_code,
      about: user.fullName == null ? '' : user.fullName,
      isPublic: user.isPublic
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
            <Card
              style={{ display: 'flex', justifyContent: 'center', height: '22.77rem', alignItems: 'center' }}
              sx={{ py: 10, px: 3, textAlign: 'center' }}
            >
              <MyAvatar style={{ scale: '1.5' }} />

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
                    fullWidth
                    InputProps={{
                      readOnly: true
                    }}
                    label="User Name"
                    {...getFieldProps('fullName')}
                    error={touched.fullName && !!errors.fullName}
                    helperText={touched.fullName && errors.fullName}
                  />
                  <TextField
                    fullWidth
                    InputProps={{
                      readOnly: true
                    }}
                    label="Email Address"
                    {...getFieldProps('email')}
                    error={touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                  />
                </Stack>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                  {/* <TextField fullWidth label="Country code" type="number" {...getFieldProps('countryCode')} /> */}
                  <TextField
                    select
                    InputProps={{
                      readOnly: true
                    }}
                    fullWidth
                    label="Country code"
                    placeholder="Select Country Code"
                    {...getFieldProps('countryCode')}
                    SelectProps={{ native: true }}
                    error={Boolean(touched.countryCode && errors.countryCode)}
                    helperText={touched.countryCode && errors.countryCode}
                  >
                    {sortedCountryCodes.map((country) => (
                      <option key={country.name} value={country.code} readOnly>
                        {country.name} ({country.code})
                      </option>
                    ))}
                  </TextField>
                  <TextField
                    fullWidth
                    InputProps={{
                      readOnly: true
                    }}
                    label="Mobile Number"
                    type="number"
                    {...getFieldProps('phoneNumber')}
                  />
                </Stack>

                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                  <TextField
                    fullWidth
                    InputProps={{
                      readOnly: true
                    }}
                    label="Address"
                    {...getFieldProps('address')}
                  />
                </Stack>

                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                  <TextField
                    select
                    InputProps={{
                      readOnly: true
                    }}
                    fullWidth
                    label="Country"
                    placeholder="undefined"
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
                    fullWidth
                    InputProps={{
                      readOnly: true
                    }}
                    label="State/Region"
                    {...getFieldProps('state')}
                  />
                </Stack>

                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                  <TextField
                    fullWidth
                    InputProps={{
                      readOnly: true
                    }}
                    label="City"
                    {...getFieldProps('city')}
                  />
                  <TextField
                    fullWidth
                    InputProps={{
                      readOnly: true
                    }}
                    label="Zip/Code"
                    {...getFieldProps('zip_code')}
                  />
                </Stack>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Form>
    </FormikProvider>
  );
}
