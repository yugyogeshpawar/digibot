/* eslint-disable consistent-return */
/* eslint-disable no-useless-return */
import React, { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack5';
import { Grid, Button, Autocomplete, TextField, Box, CardContent, Card, Container } from '@material-ui/core';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
// eslint-disable-next-line import/no-unresolved
import useAuth from 'src/hooks/useAuth';
import CopyClipboard from '../../components/CopyClipboard';
import { getBotData, getTokenPrice, postStacking, postStackingAura } from '../../redux/slices/user';
import { useDispatch, useSelector } from '../../redux/store';
import { Block } from '../Block';

export default function StakingForm() {
  const [selectedBot, setSelectedBot] = useState('');
  const [investmentAura, setInvestmentAura] = useState('');
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
      setBotData(response.bots);
    } catch (error) {
      console.log(error);
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
          variant: 'error'
        });
      }
    } catch (error) {
      console.log('ERR FROM STACK ==> ', error);
      enqueueSnackbar('Form submitted Failed!', {
        variant: 'error'
      });
    }
  };

  const changeSelectedBot = (event, newValue) => {
    const newBotData = botData.find((bot) => bot.bot_name === selectedBot);
    if (newBotData) {
      setSelectedPackage(newValue);
      setSelectedBotData(newBotData);
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

  const availableOptions = selectedBotData
    ? [
        selectedBotData.first_investment,
        selectedBotData.second_investment,
        selectedBotData.third_investment,
        selectedBotData.fourth_investment
      ]
    : [];

  const initialSelectedPackage = availableOptions.find((option) => option >= user?.investment_busd) || null;
  const [selectedPackage, setSelectedPackage] = useState(initialSelectedPackage);

  const handleBotChange = (event, newValue) => {
    const selectedBotData = botData.find((bot) => bot.bot_name === newValue);
    setSelectedBotData(selectedBotData);
    setSelectedBot(newValue);
    setSelectedPackage(selectedBotData.first_investment);
  };
  const errors = {};
  const TotalTok = Number(selectedPackage) + Number(selectedBotData?.fee);
  const finalVAl = TotalTok / tokenPrice?.price;

  const handleAuraSubmit = async () => {
    if (!investmentAura || Number.isNaN(investmentAura) || Number(investmentAura) <= 0) {
      enqueueSnackbar('Investment Amount should be a positive number.', {
        variant: 'error'
      });

      return;
    }

    const res = await postStackingAura(investmentAura);
    if (res.message === "Can't invest more thn one time") {
      return enqueueSnackbar("Can't invest more thn one time", {
        variant: 'error'
      });
    }
    if (res.message === 'auraInvest successfully') {
      enqueueSnackbar('Aura investment Successful.', {
        variant: 'success'
      });
    }
    if (res.message === 'Invalid Package:Already invested in Dgb') {
      enqueueSnackbar(res.message, {
        variant: 'error'
      });
    }

    // ... rest of the code to handle 'Aura' submit ...
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (selectedBot === 'Aura') {
      // Call another function for 'Aura'
      await handleAuraSubmit();
      return;
    }

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
      // eslint-disable-next-line consistent-return
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

    setSelectedBot('');
    setHashCode('');
    setWalletAddress('');
    setSelectedBot('');
  };

  const finalVal = () => {
    // Calculate final value here
  };

  function botcharge() {
    console.log(selectedBot);
    if (selectedBot !== '' && initialSelectedPackage === null) {
      enqueueSnackbar('The package should be greater than current investment', {
        variant: 'error'
      });
      return '';
    }

    if (user?.investment_busd + selectedPackage > selectedBotData?.fourth_investment) {
      const index = botData.findIndex((bot) => bot.bot_name === selectedBot);
      if (index !== -1 && index + 1 < botData.length) {
        enqueueSnackbar('Limit exceeded. Additional Charges may apply', {
          variant: 'info'
        });
        return botData[index + 1].fee;
      }
    }
    return selectedBotData ? selectedBotData.fee : '';
  }

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Grid item xs={12} md={5} sx={{ mr: 2 }}>
          <Block title="Trading Details" sx={{ flexDirection: 'column' }}>
            <Autocomplete
              fullWidth
              value={selectedBot}
              disabled={countdownStarted}
              options={botData ? botData.map((bot) => bot.bot_name) : []}
              onChange={handleBotChange}
              renderInput={(params) => (
                <TextField {...params} label="Select Bot" inputProps={{ ...params.inputProps, readOnly: true }} />
              )}
            />
            {selectedBot !== 'Aura' && (
              <>
                <Autocomplete
                  sx={{ mt: 2 }}
                  fullWidth
                  disabled={countdownStarted}
                  value={selectedPackage}
                  options={availableOptions}
                  onChange={changeSelectedBot}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      inputProps={{ ...params.inputProps, readOnly: true }}
                      label="Select Package"
                    />
                  )}
                  getOptionDisabled={(option) => option < user?.investment_busd}
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
                <TextField fullWidth sx={{ mt: 2 }} label="Bot Charge" name="botCharge" value={botcharge()} readOnly />
                <TextField
                  fullWidth
                  sx={{ mt: 2 }}
                  label="Total Token"
                  name="totalToken"
                  value={initialSelectedPackage !== null ? finalVAl?.toFixed(3) : ''}
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
              </>
            )}
            {selectedBot === 'Aura' && (
              <TextField
                fullWidth
                sx={{ mt: 2 }}
                label="Investment Amount"
                name="investmentAmnt"
                value={investmentAura}
                disabled={countdownStarted}
                onChange={(e) => setInvestmentAura(e.target.value)}
              />
            )}
            <Button fullWidth type="submit" variant="contained" color="primary" style={{ marginTop: '16px' }}>
              Submit
            </Button>
          </Block>
        </Grid>

        {selectedBot !== 'Aura' && (
          <Grid item xs={12} md={6}>
            <Block title="QR Code" sx={{ flexDirection: 'column', marginBottom: '8px' }}>
              {/* <Box m={1}>
              <Box>
                <Box mb={1}></Box>
              </Box>
            </Box> */}
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <div>
                  <img src="/qrcode/qr-code.png" alt="qr-code" style={{ maxWidth: '200px', borderRadius: '4px' }} />
                </div>
                <Box>
                  <Box m={2}>
                    <Box mb={1}>
                      Currunt Investment : <span>{user.investment_busd}</span>
                    </Box>
                    <Box mb={1}>Selected Bot: {selectedBot}</Box>
                    <Box mb={1}>selected Package: {selectedPackage}</Box>
                    <Box>Total Token: {initialSelectedPackage !== null ? finalVAl?.toFixed(3) : ''}</Box>
                  </Box>
                </Box>
              </Box>

              <Container maxWidth="lg" style={{ padding: 0 }}>
                <Card>
                  <CardContent>
                    <CopyClipboard value="dgb1qt3nqv6g3esnjtq035hdzy36kuu7jy38zfs278z" />
                  </CardContent>
                </Card>
              </Container>

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
        )}
      </div>
    </form>
  );
}
