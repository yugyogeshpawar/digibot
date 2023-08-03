import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import * as Yup from 'yup'; // Import Yup for validation
import arrowIosBackFill from '@iconify/icons-eva/arrow-ios-back-fill';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BigNumber from 'bignumber.js';
// material
import { Grid, Card, Button, CardHeader, Typography, Stack, TextField, Box } from '@material-ui/core';
// redux
// eslint-disable-next-line import/no-unresolved
import { getTeams, postWithdraw } from 'src/redux/slices/user';
import { useSnackbar } from 'notistack5';
import { PATH_DASHBOARD } from '../../../../routes/paths';
import useAuth from '../../../../hooks/useAuth';
import Scrollbar from '../../../Scrollbar';
import EmptyContent from '../../../EmptyContent';
import WithdrawSummary from './WithdrawSummary';
import { MLM_CONTRACT } from './WalletAddress';

// ----------------------------------------------------------------------

PayoutCart.propTypes = {
  checkoutType: PropTypes.string,
  setWithdrawSummary: PropTypes.func
};

export default function PayoutCart({ checkoutType, setWithdrawSummary }) {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { withdrawpost } = useSelector((state) => state.user);
  // const { cart } = checkout;

  const { enqueueSnackbar } = useSnackbar(); // Initialize notistack

  const handleNextStep = async (values) => {
    try {
      const response = await dispatch(postWithdraw(values));
      console.log('API Response:', response);
      dispatch(getTeams());
      // Log the actual API response
      enqueueSnackbar(withdrawpost, { variant: 'info' });
      // Handle any other actions or success scenarios
    } catch (error) {
      console.error('API Error:', error);
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
          return; // Prevent API call if there are validation errors
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
  console.log('withdrawpost =====>>>>>. : ', withdrawpost);
  const { values, handleSubmit, getFieldProps, errors, touched, isSubmitting } = formik;

  useEffect(() => {
    setWithdrawSummary();
  }, []);

  const hasWalletAddress = user?.wallet_address !== null;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card sx={{ mb: 3, pb: 2, px: 2 }}>
              <CardHeader title={<Typography variant="h6">Withdraw</Typography>} sx={{ mb: 3 }} />

              <Scrollbar sx={{ pt: 3 }}>
                <Stack spacing={{ xs: 2, md: 3, mt: 3 }}>
                  <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                    <TextField fullWidth disabled value={user?.wallet_address} aria-readonly label="Wallet Address" />
                  </Stack>
                  <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                    <TextField fullWidth disabled value={user?.total_earning} aria-readonly label="Wallet Balance" />
                  </Stack>

                  <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                    <TextField
                      fullWidth
                      type="number"
                      placeholder="GUSD Value"
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
          <Grid xs={1} md={8}>
            <Box m={2}>Note * :</Box>
            <Box m={4}>
              <Box>
                <ul>
                  <li>Minimum Amount should be greater than 25 </li>
                  <li>Your entered amount should be less than your wallet balance</li>
                </ul>
              </Box>
            </Box>
          </Grid>
        </Card>
      </Form>
    </FormikProvider>
  );
}
