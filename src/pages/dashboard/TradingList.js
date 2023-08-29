import React from 'react';
import { Card, CardContent, Box, Grid, Typography, IconButton } from '@material-ui/core';

export default function TradingList() {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2} xs={12} md={6}>
          {/* First Row - Title */}
          <Grid item xs={12}>
            <img src="/logo/binance-logo.svg" alt="Icon 1" style={{ height: '33px', margin: 'auto' }} />
          </Grid>

          {/* Second Row - Four Icons */}
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item>
                <img src="/logo/digibot.png" alt="Icon 2" style={{ height: '33px' }} />
              </Grid>
              <Grid item>
                <img src="/logo/bitcoin-btc-logo.svg" alt="Icon 1" style={{ height: '33px' }} />
              </Grid>
              <Grid item>
                <Box>
                  <img src="/logo/eth.png" alt="Icon 3" style={{ height: '33px' }} />
                </Box>
              </Grid>
              <Grid item>
                <img src="/logo/dgb.png" alt="Icon 4" style={{ height: '33px' }} />
              </Grid>
            </Grid>
          </Grid>

          {/* Third Row - Icon, Label, and Price */}
          <Grid item xs={12}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                {/* Replace with your SVG icon */}
                <img src="path_to_your_svg_icon" alt="Icon" />
              </Grid>
              <Grid item>
                <Typography variant="body1">Label</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">$100</Typography>
              </Grid>
            </Grid>
          </Grid>

          {/* Fourth Row - Down Arrow */}
          <Grid item xs={12}>
            <Grid container justifyContent="center">
              <Grid item>
                <IconButton color="primary">
                  {/* Replace with your SVG icon */}
                  <img src="path_to_your_down_arrow_svg_icon" alt="Down Arrow Icon" />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
