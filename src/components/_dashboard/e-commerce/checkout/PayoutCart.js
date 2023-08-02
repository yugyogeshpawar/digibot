import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import arrowIosBackFill from '@iconify/icons-eva/arrow-ios-back-fill';
import { useEffect, useState } from 'react';
import BigNumber from 'bignumber.js';
// material
import { Grid, Card, Button, CardHeader, Typography, Stack, TextField, Box } from '@material-ui/core';
// redux
import { useDispatch, useSelector } from '../../../../redux/store';
import { onNextStep, applyDiscount } from '../../../../redux/slices/product';
// routes
import { PATH_DASHBOARD } from '../../../../routes/paths';
import useAuth from '../../../../hooks/useAuth';
//
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
  const { checkout } = useSelector((state) => state.product);
  const { cart } = checkout;
  // const isEmptyCart = cart.length === 0;
  const isEmptyCart = false;
  const handleNextStep = () => {
    dispatch(onNextStep());
  };

  const handleApplyDiscount = (value) => {
    dispatch(applyDiscount(value));
  };
  let checkoutTypeWallet = 0;
  if (checkoutType === 'reload') {
    checkoutTypeWallet = Number(user[checkoutType.concat('Wallet')]);
  } else {
    checkoutTypeWallet = user[checkoutType.concat('_wallet')];
  }
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      products: cart,
      address: user.address,
      state: user.state,
      walletAddress: user.wallet_address,
      [checkoutType]: checkoutTypeWallet,
      stone: user.stone_wallet
    },
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        setSubmitting(true);
        handleNextStep();
      } catch (error) {
        console.error(error);
        setErrors(error.message);
      }
    }
  });

  const { values, handleSubmit, getFieldProps } = formik;

  const [GUSD, setGUSD] = useState(0);
  const [XPICP, setXPICP] = useState(0);
  const [total, setTotal] = useState(0);
  const [wallet, setSubtotal] = useState({ ...getFieldProps(checkoutType) }.value);
  const [XPICPrice, setXPICPPrice] = useState(0);

  // const fetchXpicPrice = async () => {
  //   // const xpicBalance = await XPIC_CONTRACT.methods.balanceOf('0xb0DBDDE3C4c790514c77B84Dd272501d4962F1B4').call();
  //   const XpicPlusPrice = await MLM_CONTRACT.methods.XpicPlusPrice().call();
  //   const x = new BigNumber(XpicPlusPrice);
  //   const y = BigNumber(1000000000000000000);
  //   setXPICPPrice(Number(x.dividedBy(y).toString()));
  //   return Number(x.dividedBy(y).toString());
  // };

  useEffect(() => {
    // fetchXpicPrice();
    setWithdrawSummary();
  }, []);

  const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card sx={{ mb: 3, pb: 2, px: 2 }}>
              <CardHeader title={<Typography variant="h6">Withdraw </Typography>} sx={{ mb: 3 }} />

              <Scrollbar sx={{ pt: 3 }}>
                <Stack spacing={{ xs: 2, md: 3, mt: 3 }}>
                  <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                    <TextField
                      fullWidth
                      disabled
                      aria-readonly
                      label=" Wallet Balance"
                      {...getFieldProps(checkoutType)}
                    />
                  </Stack>

                  <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                    <TextField fullWidth type="number" placeholder="GUSD Value" label=" Withdrawal Amount" />
                  </Stack>
                  <Box>
                    <Box display="flex" justifyContent="center" mb="5">
                      <Button variant="contained">Withdaw</Button>
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
            <WithdrawSummary
              GUSD={GUSD}
              XPICP={XPICP}
              bal={wallet}
              total={total}
              subtotal={wallet}
              onApplyDiscount={handleApplyDiscount}
              setSubtotal={setSubtotal}
              payoutType={checkoutType}
            />
            <Button fullWidth size="large" type="submit" variant="contained" disabled={GUSD <= 0 || GUSD > wallet}>
              Check Out
            </Button>
          </Grid>
        </Grid>
      </Form>
    </FormikProvider>
  );
}
