import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack5';
import * as Yup from 'yup'; // Import Yup for form validation
import { Grid, Button, Typography, Autocomplete, TextField, Box } from '@material-ui/core';
import { Formik, Form, Field } from 'formik'; // Import Formik components
import closeFill from '@iconify/icons-eva/close-fill';
import { Block } from '../Block';
import { getTokenPrice } from '../../redux/slices/user';
import { MIconButton } from '../../components/@material-extend';
import { useDispatch, useSelector } from '../../redux/store';

const options = ['Nano', 'Alpha', 'Beta', 'Delta'];
const packageOptions = {
  Nano: ['10', '100', '250', '500'],
  Alpha: ['600', '1,000', '2,000', '3,000'],
  Beta: ['5,000', '10,000', '15,000', '20,000'],
  Delta: ['25,000', '35,000', '35,000', '100,000']
};

export default function StakingForm() {
  const [selectedBot, setSelectedBot] = useState(options[0]);
  const [selectedPackage, setSelectedPackage] = useState(packageOptions[options[0]][0]);
  const [inputValue, setInputValue] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [hashCode, setHashCode] = useState('');
  const [currentPrice, setCurrentPrice] = useState('');
  const [totalToken, setTotalToken] = useState('');
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const { tokenPrice } = useSelector((state) => state.user);
  console.log(tokenPrice);

  useEffect(() => {
    dispatch(getTokenPrice());
  }, [dispatch]);

  const handleBotChange = (event, newValue) => {
    setSelectedBot(newValue);
    setSelectedPackage(packageOptions[newValue][0]);
  };

  const StakingSchema = Yup.object().shape({
    walletAddress: Yup.string()
      .min(30, 'Wallet Address should be at least 30 characters long.')
      .required('Wallet Address is required.'),
    hashCode: Yup.string()
      .min(60, 'Hash Code should be at least 60 characters long.')
      .required('Hash Code is required.'),
    currentPrice: Yup.string().required('Current Price is required.'),
    botCharge: Yup.string().required('Bot Charge is required.'),
    totalToken: Yup.string().required('Total Token is required.')
  });

  const handleSubmit = (values, { setErrors }) => {
    StakingSchema.validate(values, { abortEarly: false })
      .then(() => {
        // Form submission logic here
        // For example, dispatching an action to handle the form data
        // dispatch(submitStakingForm(values.walletAddress, ...otherData));
        enqueueSnackbar('Form submitted successfully!', {
          variant: 'success',
          action: (key) => (
            <MIconButton size="small" onClick={() => closeSnackbar(key)}>
              <Icon icon={closeFill} />
            </MIconButton>
          )
        });
      })
      .catch((error) => {
        // Handle validation errors
        const validationErrors = {};
        if (error.inner) {
          error.inner.forEach((err) => {
            validationErrors[err.path] = err.message;
          });
        }
        // Set the form errors using Formik's setErrors method
        setErrors(validationErrors);
      });
  };

  return (
    <Formik
      initialValues={{
        walletAddress: '',
        hashCode: '',
        currentPrice: '',
        botCharge: '',
        totalToken: ''
      }}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form autoComplete="off">
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <Grid item xs={12} md={5} sx={{ mr: 2 }}>
              <Block title="Enter Staking Details" sx={{ flexDirection: 'column' }}>
                <Autocomplete
                  fullWidth
                  value={selectedBot}
                  options={options}
                  onChange={handleBotChange}
                  inputValue={inputValue}
                  onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
                  renderInput={(params) => <TextField {...params} label="Select Bot" />}
                />
                <Autocomplete
                  sx={{ mt: 2 }}
                  fullWidth
                  value={selectedPackage}
                  options={packageOptions[selectedBot]}
                  onChange={(event, newValue) => setSelectedPackage(newValue)}
                  renderInput={(params) => <TextField {...params} label="Select Package" />}
                />
                <Field
                  as={TextField}
                  fullWidth
                  sx={{ mt: 2 }}
                  label="Current Price"
                  focused
                  name="currentPrice"
                  value={tokenPrice?.price}
                  readonly
                  error={touched.currentPrice && Boolean(errors.currentPrice)}
                  helperText={touched.currentPrice && errors.currentPrice}
                />
                <Field
                  as={TextField}
                  fullWidth
                  sx={{ mt: 2 }}
                  label="Bot Charge"
                  name="botCharge"
                  value="$50"
                  readonly
                  error={touched.botCharge && Boolean(errors.botCharge)}
                  helperText={touched.botCharge && errors.botCharge}
                />
                <Field
                  as={TextField}
                  fullWidth
                  sx={{ mt: 2 }}
                  label="Total Token"
                  name="totalToken"
                  value={totalToken}
                  onChange={(e) => setTotalToken(e.target.value)}
                  error={touched.totalToken && Boolean(errors.totalToken)}
                  helperText={touched.totalToken && errors.totalToken}
                />
                <Field
                  as={TextField}
                  fullWidth
                  sx={{ mt: 2 }}
                  label="Wallet Address"
                  name="walletAddress"
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  error={touched.walletAddress && Boolean(errors.walletAddress)}
                  helperText={touched.walletAddress && errors.walletAddress}
                />
                <Field
                  as={TextField}
                  fullWidth
                  sx={{ mt: 2 }}
                  label="Hash Code"
                  name="hashCode"
                  value={hashCode}
                  onChange={(e) => setHashCode(e.target.value)}
                  error={touched.hashCode && Boolean(errors.hashCode)}
                  helperText={touched.hashCode && errors.hashCode}
                />
                <Button fullWidth type="submit" variant="contained" color="primary" style={{ marginTop: '16px' }}>
                  Submit
                </Button>
              </Block>
            </Grid>
            <Grid item xs={12} md={6}>
              <Block title="Qr Code" sx={{ flexDirection: 'column', marginBottom: '8px' }}>
                <img src="/qrcode/qr-code.png" alt="qr-code" style={{ maxWidth: '200px', borderRadius: '4px' }} />
                <Box>
                  <h1>Important</h1>
                  <ol style={{ marginLeft: '16px' }}>
                    <li>
                      This address is only for <b> TRC-20</b>
                    </li>
                    <li>
                      Deposit amount is fixed<b> 15 USDT </b>
                    </li>
                    <li>Sending any other coin or token to this address may result in the loss</li>
                    <li>Deposits will automatically be processed after 3 network confirmations.</li>
                  </ol>
                </Box>
              </Block>
            </Grid>
          </div>
        </Form>
      )}
    </Formik>
  );
}
