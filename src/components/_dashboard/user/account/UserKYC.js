/* eslint-disable no-unneeded-ternary */
// Frontend Component: AccountGeneral.js
import React, { forwardRef, useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useSnackbar } from 'notistack5';
import { Form, FormikProvider, useFormik } from 'formik';
import {
  Box,
  Grid,
  Card,
  Stack,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Slide,
  Button
} from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
// eslint-disable-next-line import/no-unresolved
// Import your API function
// eslint-disable-next-line import/no-unresolved
import { patchUpdateWalletAddress } from 'src/redux/slices/user';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import useAuth from '../../../../hooks/useAuth';
import useIsMountedRef from '../../../../hooks/useIsMountedRef';

export default function AccountGeneral() {
  const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar } = useSnackbar();
  const [resMsg, setResMsg] = useState(null);
  // const { user, updateProfile } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleCloseGotoDashboard = () => {
    setOpen(false);
    navigate('/dashboard/aap');
  };
  const handleClose = () => {
    setOpen(false);
    navigate('/dashboard/payout/minting');
  };
  const dispatch = useDispatch(); // Add dispatch here
  const { updateWalletAddressRes } = useSelector((state) => state.user);
  const UpdateUserSchema = Yup.object().shape({
    walletAddress: Yup.string()
      .min(30, 'Wallet address should be at least 30 characters long')
      .required('Wallet address is required')
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      walletAddress: ''
    },
    validationSchema: UpdateUserSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        // Make the API call here
        const response = await dispatch(patchUpdateWalletAddress(values.walletAddress));
        console.log(response);
        // Handle the response as needed
        if (response.error) {
          // Handle error
          enqueueSnackbar('Error updating wallet address', { variant: 'error' });
        } else {
          // Handle success
          const statusRes = response.status === 200 ? 'success' : 'info';
          enqueueSnackbar(response.data.message, { variant: statusRes });
          // You can update your Redux store or take any other action here
          // redirect to withdraw
          setResMsg(response.data.message);
          setOpen(true);
        }
      } catch (error) {
        // Handle API call error
        console.error('Error updating wallet address:', error);
        enqueueSnackbar('An error occurred while updating wallet address', { variant: 'error' });
      }
    }
  });
  const { isSubmitting, handleSubmit, getFieldProps, setFieldValue } = formik;
  // console.log('updateWalletAddressRes ::::::::++++>>>> ', updateWalletAddressRes);
  const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

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
                    {...getFieldProps('walletAddress')}
                    error={formik.touched.walletAddress && formik.errors.walletAddress ? true : false}
                    helperText={
                      formik.touched.walletAddress && formik.errors.walletAddress ? formik.errors.walletAddress : null
                    }
                  />
                </Stack>
              </Stack>

              <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                  Add Wallet Address
                </LoadingButton>
              </Box>
              <Box>
                <Box>
                  <h1>Important </h1>
                  <ol style={{ marginLeft: '16px' }}>
                    <li>Your wallet should be Metamask register</li>
                    <li>Wallet address should be at least 30 characters long.</li>
                    <li>Sending any other wallet address may result in the loss</li>{' '}
                    <li>
                      Please check your wallet carefully before add , once you add then you can't change your wallet //
                      address{' '}
                    </li>
                    <li>Withdraw will automatically be processed after 3 network confirmations.</li>
                  </ol>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Form>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Add Wallet Address</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">{resMsg}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Go to Withdraw
          </Button>
          <Button variant="contained" onClick={handleCloseGotoDashboard}>
            Go to dashboard
          </Button>
        </DialogActions>
      </Dialog>
    </FormikProvider>
  );
}
