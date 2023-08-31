import React from 'react';
import { Card, CardContent, Box, Grid, Typography, IconButton } from '@material-ui/core';

export default function TradingList() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Grid container xs={12}>
              {/* First Row - Title */}
              <Grid item xs={12}>
                <img src="/logo/binance-logo.svg" alt="Icon 1" style={{ height: '33px', margin: 'auto' }} />
              </Grid>

              <Grid item xs={12} padding="10px">
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

              <Grid item xs={12}>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <img src="/logo/digibot.png" alt="Icon 2" style={{ height: '33px', marginRight: 'auto' }} />
                  </Grid>
                  <Grid item sx={{ paddingLeft: '5px !important', width: '20%' }}>
                    <Typography
                      variant="body1"
                      sx={{ bgcolor: 'whitesmoke', color: 'gray', p: 1, borderRadius: '5px' }}
                    >
                      DGB
                    </Typography>
                  </Grid>
                  <Grid item sx={{ width: '60%', paddingLeft: '5px !important' }}>
                    <Box sx={{ width: '100%', height: '100%', bgcolor: 'gray', p: 1, borderRadius: '5px' }}>
                      <Typography variant="body1">0.5000000</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container justifyContent="center">
                  <Grid item>
                    <IconButton color="primary">
                      <img src="/logo/down-arrow.svg" alt="Down Arrow" style={{ maxWidth: '16px' }} />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Grid container xs={12}>
              {/* First Row - Title */}
              <Grid item xs={12}>
                <img src="/logo/binance-logo.svg" alt="Icon 1" style={{ height: '33px', margin: 'auto' }} />
              </Grid>

              <Grid item xs={12} padding="10px">
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

              <Grid item xs={12}>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <img src="/logo/digibot.png" alt="Icon 2" style={{ height: '33px', marginRight: 'auto' }} />
                  </Grid>
                  <Grid item sx={{ paddingLeft: '5px !important', width: '20%' }}>
                    <Typography
                      variant="body1"
                      sx={{ bgcolor: 'whitesmoke', color: 'gray', p: 1, borderRadius: '5px' }}
                    >
                      DGB
                    </Typography>
                  </Grid>
                  <Grid item sx={{ width: '60%', paddingLeft: '5px !important' }}>
                    <Box sx={{ width: '100%', height: '100%', bgcolor: 'gray', p: 1, borderRadius: '5px' }}>
                      <Typography variant="body1">0.5000000</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container justifyContent="center">
                  <Grid item>
                    <IconButton color="primary">
                      <img src="/logo/down-arrow.svg" alt="Down Arrow" style={{ maxWidth: '16px' }} />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <img src="/logo/digibot.png" alt="Icon 2" style={{ height: '33px', marginRight: 'auto' }} />
                  </Grid>
                  <Grid item sx={{ paddingLeft: '5px !important', width: '20%' }}>
                    <Typography
                      variant="body1"
                      sx={{ bgcolor: 'whitesmoke', color: 'gray', p: 1, borderRadius: '5px' }}
                    >
                      DGB
                    </Typography>
                  </Grid>
                  <Grid item sx={{ width: '60%', paddingLeft: '5px !important' }}>
                    <Box sx={{ width: '100%', height: '100%', bgcolor: 'gray', p: 1, borderRadius: '5px' }}>
                      <Typography variant="body1">0.5000000</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
