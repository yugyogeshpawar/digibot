import React from 'react';
import { Card, CardContent, Box, Grid, Typography, IconButton } from '@material-ui/core';

export default function TradingList() {
  const Data = [
    {
      logo: '/logo/binance-logo.svg',
      icons: ['/logo/digibot.png', '/logo/bitcoin-btc-logo.svg', '/logo/eth.png', '/logo/dgb.png'],
      items: [
        {
          icon: '/logo/digibot.png',
          name: 'DGB',
          value: '0.5000000'
        },
        {
          icon: '/logo/digibot.png',
          name: 'DGB',
          value: '0.5000000'
        }
        // Add more items here
      ]
    },
    {
      logo: '/logo/houbi_logo.png',
      icons: ['/logo/digibot.png', '/logo/bitcoin-btc-logo.svg', '/logo/eth.png', '/logo/dgb.png'],
      items: [
        {
          icon: '/logo/digibot.png',
          name: 'DGB',
          value: '0.5000000'
        }
        // Add more items here
      ]
    }
  ];

  return (
    <Grid container spacing={2}>
      {Data.map((item, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Card>
            <CardContent>
              <Grid container xs={12}>
                <Grid item xs={12}>
                  <img src={item.logo} alt={`Icon ${index}`} style={{ height: '33px', margin: 'auto' }} />
                </Grid>

                <Grid item xs={12} padding="10px">
                  <Grid container justifyContent="center" spacing={2}>
                    {item.icons.map((icon, iconIndex) => (
                      <Grid item key={iconIndex}>
                        <img src={icon} alt={`Icon ${iconIndex}`} style={{ height: '33px' }} />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>

                {item.items.map((tradeItem, tradeIndex) => (
                  <Grid item xs={12} key={tradeIndex}>
                    <Grid container alignItems="center" spacing={2}>
                      <Grid item sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <img
                          src={tradeItem.icon}
                          alt={`Icon ${tradeIndex}`}
                          style={{ height: '33px', marginRight: 'auto' }}
                        />
                      </Grid>
                      <Grid item sx={{ paddingLeft: '5px !important', width: '20%' }}>
                        <Typography
                          variant="body1"
                          sx={{ bgcolor: 'whitesmoke', color: 'gray', p: 1, borderRadius: '5px' }}
                        >
                          {tradeItem.name}
                        </Typography>
                      </Grid>
                      <Grid item sx={{ width: '60%', paddingLeft: '5px !important' }}>
                        <Box sx={{ width: '100%', height: '100%', bgcolor: 'gray', p: 1, borderRadius: '5px' }}>
                          <Typography variant="body1">{tradeItem.value}</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                      <IconButton color="primary">
                        <img src="/logo/down-arrow.svg" alt="Down Arrow" style={{ maxWidth: '16px' }} />
                      </IconButton>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
