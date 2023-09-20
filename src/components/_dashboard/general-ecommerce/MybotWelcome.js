/* eslint-disable prefer-template */
/* eslint-disable import/no-unresolved */
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { getBotRate } from 'src/redux/slices/user';
// material
import { Box, Typography, Card, CardContent } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { BotIllustration } from '../../../assets';
//

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  backgroundColor: theme.palette.primary.lighter,
  [theme.breakpoints.up('md')]: {
    height: '100%',
    display: 'flex',
    textAlign: 'left',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}));

// ----------------------------------------------------------------------

MybotWelcome.propTypes = {
  displayTitle: PropTypes.string,
  totalBusiness: PropTypes.string,
  auraUser: PropTypes.bool
};

export default function MybotWelcome({ displayTitle, totalBusiness, auraUser }) {
  const [rate, setRate] = useState(0);

  const fetchRate = async () => {
    const response = await getBotRate();
    console.log(response);
    if (response?.status === 200) {
      setRate(response?.data?.result);
    }
  };

  useEffect(() => {
    if (rate === 0) {
      fetchRate();
    }
  }, []);

  return (
    <RootStyle>
      <CardContent
        sx={{
          p: { md: 0 },
          pl: { md: 5 },
          color: 'grey.800'
        }}
      >
        <Box>
          <Typography gutterBottom variant="h4">
            {displayTitle ? <>Congratulations, You Selected {displayTitle} </> : 'Please Select a Bot first'}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{
            maxWidth: 480,
            pt: '10px',
            mr: 'auto',
            ml: { xs: 'auto', md: '0' }
          }}
        >
          Yesterday's Trading Profit
        </Typography>
        {/* for aura   3% to 5% permonth 3% to 5% permonth */}
        <Typography variant="h4" underline="always" sx={{ maxWidth: 480, mx: 'auto' }}>
          {auraUser ? '3% to 5% permonth' : rate + '%'}
        </Typography>
      </CardContent>

      <BotIllustration
        sx={{
          p: 3,
          width: 360,
          margin: { xs: 'auto', md: 'inherit' }
        }}
      />
      {/* <img src="/static/mock-images/products/NanoBot.png" alt="QR Code" style={{ maxWidth: '200px' }} /> */}
    </RootStyle>
  );
}
