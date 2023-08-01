import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { useSnackbar } from 'notistack5';
import { Grid, Button, Autocomplete, TextField, Box, Select, MenuItem } from '@material-ui/core';
import { closeFill } from '@iconify/icons-eva/close-fill';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
// eslint-disable-next-line import/no-unresolved
import useAuth from 'src/hooks/useAuth';
import { getBotData, getTokenPrice, postStacking } from '../../redux/slices/user';
import { useDispatch, useSelector } from '../../redux/store';
import { Block } from '../Block';

// import { MIconButton } from '../../components/@material-extend';

export default function StakingForm() {
  const [selectedBot, setSelectedBot] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [hashCode, setHashCode] = useState('');
  const [countdownStarted, setCountdownStarted] = useState(false);
  const [remainingTime, setRemainingTime] = useState(120); // Initial countdown duration in seconds
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const { tokenPrice } = useSelector((state) => state.user);
  const { user } = useAuth();

  const [botData, setBotData] = useState(null);
  const [selectedBotData, setSelectedBotData] = useState(null);

  useEffect(() => {
    dispatch(getTokenPrice());
    getApisBotData();
  }, [dispatch]);

  const getApisBotData = async () => {
    try {
      const response = await getBotData();
      console.log('RESPONSE FROM St ==> :', response.bots);
      setBotData(response.bots);
    } catch (error) {
      console.log('ERR FROM  ==> ', error);
      enqueueSnackbar('Form submitted Failed!', {
        variant: 'error'
      });
    }
  };

  const postStackingData = async (formData) => {
    try {
      const accessToken = localStorage.getItem('accessToken'); // Replace 'access_token' with the key used to store the access token

      if (!accessToken) {
        throw new Error('Access token not found');
      }

      const response = await postStacking(formData, accessToken);
      console.log('RESPONSE FROM STACK ==> :', response);

      if (response) {
        const snakCheck = response?.message;

        enqueueSnackbar(snakCheck, {
          variant: 'info'
        });
      }
    } catch (error) {
      console.log('ERR FROM STACK ==> ', error);
      enqueueSnackbar('Form submitted Failed!', {
        variant: 'error'
      });
    }
  };

  useEffect(() => {
    let interval;
    if (countdownStarted && remainingTime > 0) {
      interval = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (remainingTime === 0) {
      setCountdownStarted(false);
    }

    return () => clearInterval(interval);
  }, [countdownStarted, remainingTime]);

  const handleBotChange = (event, newValue) => {
    const selectedBotData = botData.find((bot) => bot.bot_name === newValue);
    setSelectedBotData(selectedBotData);
    setSelectedBot(newValue);
    setSelectedPackage(selectedBotData.first_investment);
  };
  const errors = {};
  const TotalTok = Number(selectedPackage) + Number(selectedBotData?.fee);
  const finalVAl = TotalTok / tokenPrice?.price;
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!walletAddress || walletAddress.trim().length < 30) {
      errors.walletAddress = 'Wallet Address should be at least 30 characters long.';
    }

    if (!hashCode || hashCode.trim().length < 60) {
      errors.hashCode = 'Hash Code should be at least 60 characters long.';
    }

    if (!tokenPrice?.price) {
      errors.currentPrice = 'Current Price is required.';
    }

    if (!selectedBotData?.fee) {
      errors.botCharge = 'Bot Charge is required.';
    }

    if (!finalVAl) {
      errors.totalToken = 'Total Token is required.';
    }

    if (Object.keys(errors).length > 0) {
      return enqueueSnackbar('Form contains validation errors. Please check the fields.', {
        variant: 'error'
      });
    }

    const formData = {
      package: selectedBot,
      planAmt: selectedPackage,
      walletAddress,
      hashcode: hashCode,
      currentPrice: tokenPrice?.price,
      GusdQty: TotalTok,
      tokenQty: finalVAl.toFixed(3)
    };

    await postStackingData(formData);
  };
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Grid item xs={12} md={5} sx={{ mr: 2 }}>
          <Block title="Enter Staking Details" sx={{ flexDirection: 'column' }}>
            <Autocomplete
              fullWidth
              value={selectedBot}
              disabled={countdownStarted}
              options={botData ? botData.map((bot) => bot.bot_name) : []}
              onChange={(event, newValue) => handleBotChange(event, newValue)}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
              renderInput={(params) => <TextField {...params} label="Select Bot" />}
            />

            <Autocomplete
              sx={{ mt: 2 }}
              fullWidth
              disabled={countdownStarted}
              value={selectedPackage}
              options={
                selectedBotData
                  ? [
                      selectedBotData.first_investment,
                      selectedBotData.second_investment,
                      selectedBotData.third_investment,
                      selectedBotData.fourth_investment
                    ]
                  : []
              }
              onChange={(event, newValue) => setSelectedPackage(newValue)}
              renderInput={(params) => <TextField {...params} label="Select Package" />}
            />
            <TextField
              fullWidth
              sx={{ mt: 2 }}
              label="Current Price"
              focused
              name="currentPrice"
              value={tokenPrice?.price}
              readOnly
              disabled={countdownStarted}
            />
            {/* Updated Bot Charge field */}
            <TextField
              fullWidth
              sx={{ mt: 2 }}
              label="Bot Charge"
              name="botCharge"
              value={selectedBotData ? selectedBotData.fee : ''}
              readOnly
            />
            {/* Updated Total Token field */}
            <TextField
              fullWidth
              sx={{ mt: 2 }}
              label="Total Token"
              name="totalToken"
              value={finalVAl ? finalVAl.toFixed(3) : ''}
              readOnly
              disabled={countdownStarted}
            />
            <TextField
              fullWidth
              sx={{ mt: 2 }}
              label="Wallet Address"
              name="walletAddress"
              value={walletAddress}
              disabled={countdownStarted}
              onChange={(e) => setWalletAddress(e.target.value)}
            />
            <TextField
              fullWidth
              sx={{ mt: 2 }}
              label="Hash Code"
              name="hashCode"
              value={hashCode}
              disabled={countdownStarted}
              onChange={(e) => setHashCode(e.target.value)}
            />
            <Button fullWidth type="submit" variant="contained" color="primary" style={{ marginTop: '16px' }}>
              Submit
            </Button>
          </Block>
        </Grid>
        <Grid item xs={12} md={6}>
          <Block title="Qr Code" sx={{ flexDirection: 'column', marginBottom: '8px' }}>
            <Box m={1}>
              <Box>
                <Box mb={1}>
                  Currunt Investment : <span>{user.investment_busd}</span>
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              <img src="/qrcode/qr-code.png" alt="qr-code" style={{ maxWidth: '200px', borderRadius: '4px' }} />
              <Box m={2} ml={3}>
                <Box m={2}>
                  <Box mb={1}>Your Selected Bot: {selectedBot}</Box>
                  <Box mb={1}>Your selected Package: {selectedPackage}</Box>
                  <Box>Total Token: {finalVAl ? finalVAl.toFixed(3) : ''}</Box>
                </Box>
              </Box>
            </Box>
            <Box>
              <h1>Important *</h1>
              <ol style={{ marginLeft: '16px' }}>
                <li>Your Investement should be greater then your currunt investment </li>
                <li>Hash Code should be at least 60 characters long.</li>
                <li>Sending any other coin or token to this address may result in the loss</li>
                <li>Deposits will automatically be processed after 3 network confirmations.</li>
              </ol>
            </Box>
            <Box mt={2} mb={1} display="flex">
              {countdownStarted ? (
                <>
                  <svg width="30%">
                    <defs>
                      <linearGradient id="your-unique-id" x1="1" y1="0" x2="0" y2="0">
                        <stop offset="5%" stopColor="gold" />
                        <stop offset="95%" stopColor="red" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <CountdownCircleTimer
                    isPlaying
                    duration={Math.ceil(remainingTime)}
                    colors="url(#your-unique-id)"
                    onComplete={() => setCountdownStarted(false)}
                  >
                    {({ remainingTime }) => (
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center'
                        }}
                      >
                        <div style={{ textAlign: 'center' }}>
                          {Math.floor(remainingTime / 60)
                            .toString()
                            .padStart(2, '0')}
                          :
                          {Math.floor(remainingTime % 60)
                            .toString()
                            .padStart(2, '0')}
                        </div>
                        <div style={{ textAlign: 'center' }}>Remaining</div>
                      </div>
                    )}
                  </CountdownCircleTimer>
                </>
              ) : null}
            </Box>
          </Block>
        </Grid>
      </div>
    </form>
  );
}
