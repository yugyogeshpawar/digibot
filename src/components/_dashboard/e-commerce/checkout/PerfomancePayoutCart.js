/* eslint-disable import/no-unresolved */
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import * as Yup from 'yup';
import arrowIosBackFill from '@iconify/icons-eva/arrow-ios-back-fill';
import { forwardRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import BigNumber from 'bignumber.js';
// material
import {
  Grid,
  Slide,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContentText,
  DialogContent,
  Card,
  Button,
  Stack,
  TextField,
  Box
} from '@material-ui/core';
// redux
// eslint-disable-next-line import/no-unresolved
import { postWithdraw } from 'src/redux/slices/user';
import { useSnackbar } from 'notistack5';
import LoadingScreen from 'src/components/LoadingScreen';
import { PATH_DASHBOARD } from '../../../../routes/paths';
import useAuth from '../../../../hooks/useAuth';
import Scrollbar from '../../../Scrollbar';
import WithdrawSummary from './WithdrawSummary';
// ----------------------------------------------------------------------

PayoutCart.propTypes = {
  checkoutType: PropTypes.string,
  setWithdrawSummary: PropTypes.func
};

export default function PayoutCart({ setWithdrawSummary }) {
  const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  // const { cart } = checkout;

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    navigate('/dashboard/myprofile/UserKYC');
  };
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar(); // Initialize notistack

  const handleNextStep = async (values) => {
    try {
      // Assuming 'dispatch' is a function that makes an API call
      const response = await dispatch(postWithdraw(values));
      console.log('API Response:', response);
      // Log the actual API response
      const isErr = response?.status === 200 ? 'success' : 'error';
      console.log(isErr, 'isErrisErr');
      enqueueSnackbar(response.data.message, { variant: isErr });
      // Handle any other actions or success scenarios
      if (response?.status === 200) {
        setTimeout(() => {
          window.location.reload(); // Reload the page after 3 seconds (3000 milliseconds)
        }, 3000);
      }
    } catch (error) {
      console.error('API Error:', error.message);
      enqueueSnackbar('Withdrawal failed', { variant: 'error' }); // Show error notification
      // Handle any other error scenarios
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      amount: ''
    },
    validationSchema: Yup.object().shape({
      amount: Yup.number()
        .typeError('Withdrawal amount must be a number')
        .required('Withdrawal amount is required')
        .test('is-positive', 'Withdrawal amount must be greater than zero', (value) => value > 0)
        .test('is-less-than-balance', 'Withdrawal amount cannot be greater than your total earnings', (value) =>
          new BigNumber(value).isLessThanOrEqualTo(user?.total_earning || 0)
        )
    }),
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        setSubmitting(true);

        if (!formik.isValid) {
          return;
        }

        handleNextStep(values);
      } catch (error) {
        console.error(error);
        setErrors({
          amount: 'Withdrawal failed. Please try again.'
        });
      } finally {
        setSubmitting(false);
      }
    }
  });

  const { values, handleSubmit, getFieldProps, errors, touched, isSubmitting } = formik;

  useEffect(() => {
    setWithdrawSummary();
    setIsLoading(false);

    if (!isKycSuccesUser) {
      setOpen(true);
    }
    // window.location.reload();
  }, [navigate]);

  console.log('user +++++++ :', user);
  const hasWalletAddress = user?.wallet_address !== null;
  const isKycSuccesUser = user?.wallet_address !== 1234;

  return (
    <div>
      {isLoading ? (
        <LoadingScreen /> // Show the LoadingScreen component while isLoading is true
      ) : (
        <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <Card sx={{ mb: 3, pb: 2, px: 2 }}>
                  <Scrollbar sx={{ pt: 3 }}>
                    <Stack spacing={{ xs: 2, md: 3, mt: 3 }}>
                      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                        <TextField
                          fullWidth
                          disabled
                          value={user?.wallet_address}
                          aria-readonly
                          label="Wallet Address"
                        />
                      </Stack>
                      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                        <TextField
                          fullWidth
                          disabled
                          value={user?.performance_wallet}
                          aria-readonly
                          label="Wallet Balance"
                        />
                      </Stack>

                      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                        <TextField
                          fullWidth
                          type="number"
                          placeholder="Enter amount"
                          label="Withdrawal Amount"
                          {...getFieldProps('amount')}
                          error={touched.amount && !!errors.amount}
                          helperText={touched.amount && errors.amount}
                        />
                      </Stack>
                      <Box>
                        <Box display="flex" justifyContent="center" mb="5">
                          <Button
                            type="submit"
                            variant="contained"
                            disabled={
                              !hasWalletAddress ||
                              isSubmitting ||
                              new BigNumber(values.amount).isGreaterThan(user?.total_earning)
                            }
                          >
                            Withdraw
                          </Button>
                        </Box>
                      </Box>
                    </Stack>
                  </Scrollbar>
                </Card>

                <Button
                  color="inherit"
                  component={RouterLink}
                  to={PATH_DASHBOARD.general.app}
                  startIcon={<Icon icon={arrowIosBackFill} />}
                >
                  Continue Dashboard
                </Button>
              </Grid>
              <Grid item xs={12} md={4}>
                <WithdrawSummary bal={user?.investment_busd} />
              </Grid>
            </Grid>
            <Card>
              <Grid xs={12} md={8}>
                <Box m={2}>Note * :</Box>
                <Box m={4}>
                  <Box>
                    <ul>
                      <li>
                        <Box>Minimum Amount should be greater than 25 </Box>
                      </li>
                      <li>
                        <Box>Your entered amount should be less than your wallet balance</Box>
                      </li>
                      <li>
                        <Box>Please fill only Binanace Chain address (Metamask or TrustWallet Address Only)</Box>
                      </li>
                    </ul>
                  </Box>
                </Box>
              </Grid>
            </Card>
          </Form>
        </FormikProvider>
      )}
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
          <DialogContentText id="alert-dialog-slide-description">
            please add your wallet address for withdraw . without wallet address you can't withdraw
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Add your wallet address
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
