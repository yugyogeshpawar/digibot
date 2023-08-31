import React, { useState, useEffect } from 'react';
import { Card, CardContent, Grid, Typography, IconButton, Button, TextField, InputAdornment } from '@material-ui/core';

export default function TradingList() {
  // Example balance values
  const [fromCoinBalance, setFromCoinBalance] = useState(0);
  const [toCoinBalance, setToCoinBalance] = useState(0);
  const [fromCoinAmount, setFromCoinAmount] = useState('');
  const [toCoinAmount, setToCoinAmount] = useState('');

  // Simulate fetching balance data from an API
  useEffect(() => {
    const delay = setTimeout(() => {
      setFromCoinBalance(100.0); // Example value
      setToCoinBalance(250.0); // Example value
    }, 1000); // Delay for 1 second

    return () => clearTimeout(delay);
  }, []);

  // Simulate the swapping API call
  const handleSwap = () => {
    const tempFromBalance = fromCoinBalance;
    const tempToBalance = toCoinBalance;

    setFromCoinBalance(tempToBalance);
    setToCoinBalance(tempFromBalance);

    // Reset input values
    setFromCoinAmount('');
    setToCoinAmount('');
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Grid container xs={12} sx={{ textAlign: 'center' }}>
              {/* Swap Title */}
              <Grid item xs={12} sx={{ marginBottom: '20px' }}>
                <Typography variant="h4">Coin Swap</Typography>
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
                        <img src="/logo/digibot.png" alt="Icon 2" style={{ height: '24px' }} />
                      </InputAdornment>
                    )
                  }}
                />
                <Typography variant="body2" sx={{ color: 'gray', textAlign: 'left', mt: 1 }}>
                  Balance: {fromCoinBalance.toFixed(2)}
                </Typography>
              </Grid>

              {/* Arrow Icon */}
              <Grid item xs={12}>
                <IconButton color="primary" sx={{ fontSize: '24px' }}>
                  <img src="/logo/down-arrow.svg" alt="Down Arrow" style={{ maxWidth: '16px' }} />
                </IconButton>
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
                  Balance: {toCoinBalance.toFixed(2)}
                </Typography>
              </Grid>

              {/* Swap Button */}
              <Grid item xs={12} sx={{ marginTop: '20px' }}>
                <Button variant="contained" size="large" fullWidth onClick={handleSwap}>
                  Swap
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
