import PropTypes from 'prop-types';

// material
import { styled } from '@material-ui/core/styles';
import { Box, Typography, Card, CardContent } from '@material-ui/core';
//
import { BotIllustration } from '../../../assets';
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
  totalBusiness: PropTypes.string
};

export default function MybotWelcome({ displayTitle, totalBusiness }) {
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
          3% to 5% permonth 3% to 5% permonth
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
