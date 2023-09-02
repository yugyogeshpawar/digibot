import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Card, CardContent, Grid, Typography, IconButton, Button, TextField, InputAdornment } from '@material-ui/core';

export default function Swap({ dgbBalance, usdtBalance, web3, fromWalletAddress, toWalletAddress, submitSwap }) {
  const [fromCoinBalance, setFromCoinBalance] = useState(0);
  const [toCoinBalance, setToCoinBalance] = useState(0);
  const [fromCoinAmount, setFromCoinAmount] = useState('');
  const [toCoinAmount, setToCoinAmount] = useState('');

  // Simulate fetching balance data from an API
  useEffect(() => {
    const delay = setTimeout(() => {
      console.log(dgbBalance);
      setFromCoinBalance(Number(dgbBalance));
      setToCoinBalance(Number(usdtBalance));
    }, 1000); // Delay for 1 second

    return () => clearTimeout(delay);
  }, [dgbBalance, usdtBalance]);

  const handleSwap = () => {
    submitSwap(fromCoinAmount);
  };

  return (
    <Card>
      <CardContent>
        <Grid container xs={12} sx={{ textAlign: 'center' }}>
          {/* Swap Title */}
          <Grid item xs={12} sx={{ marginBottom: '20px' }}>
            <Typography variant="h4">Coin Swap</Typography>
          </Grid>

          {/* Wallet Addresses */}
          <Grid item xs={12} sx={{ marginBottom: '10px' }}>
            <Typography variant="body2" sx={{ color: 'gray', textAlign: 'left', mt: 1 }}>
              From Wallet: {fromWalletAddress}
            </Typography>
          </Grid>

          {/* From Coin */}
          <Grid item xs={12} sx={{ marginBottom: '10px' }}>
            <TextField
              id="from-coin"
              variant="filled"
              fullWidth
              value={fromCoinAmount}
              onChange={(e) => setFromCoinAmount(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src="/logo/digibot.png" alt="Icon 2" style={{ width: '24px' }} />
                  </InputAdornment>
                )
              }}
            />
            <Typography variant="body2" sx={{ color: 'gray', textAlign: 'left', mt: 1 }}>
              Balance: {fromCoinBalance.toFixed(3)} DGBT
            </Typography>
          </Grid>

          {/* Arrow Icon */}
          <Grid item xs={12}>
            <IconButton color="primary" sx={{ fontSize: '24px' }}>
              <img src="/logo/down-arrow.svg" alt="Down Arrow" style={{ maxWidth: '16px' }} />
            </IconButton>
          </Grid>

          <Grid item xs={12} sx={{ marginBottom: '10px' }}>
            <Typography variant="body2" sx={{ color: 'gray', textAlign: 'left', mt: 1 }}>
              To Wallet: {toWalletAddress}
            </Typography>
          </Grid>

          {/* To Coin */}
          <Grid item xs={12} sx={{ marginBottom: '10px' }}>
            <TextField
              id="to-coin"
              variant="filled"
              fullWidth
              value={toCoinAmount}
              onChange={(e) => setToCoinAmount(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src="/logo/tether.svg" alt="Icon 2" style={{ height: '24px' }} />
                  </InputAdornment>
                )
              }}
            />
            <Typography variant="body2" sx={{ color: 'gray', textAlign: 'left', mt: 1 }}>
              Balance: {toCoinBalance.toFixed(3)} USDT
            </Typography>
          </Grid>

          {/* Swap Button */}
          <Grid item xs={12} sx={{ marginTop: '20px' }}>
            <Button variant="contained" size="large" fullWidth onClick={handleSwap} disabled={!web3}>
              Swap
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

// Define PropTypes for the component
Swap.propTypes = {
  dgbBalance: PropTypes.number.isRequired,
  usdtBalance: PropTypes.number.isRequired,
  web3: PropTypes.object,
  fromWalletAddress: PropTypes.string.isRequired,
  toWalletAddress: PropTypes.string.isRequired,
  submitSwap: PropTypes.func
};
