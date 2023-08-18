/* eslint-disable import/no-unresolved */
import PropTypes from 'prop-types';
import { Box, Card, Typography } from '@material-ui/core';
// ----------------------------------------------------------------------

NextPosition.propTypes = {
  myProfile: PropTypes.object
};

export default function NextPosition({ myProfile }) {
  const myProfileData = myProfile?.user;
  return (
    <Card sx={{ display: 'flex', alignItems: 'center', p: 4, height: '100%' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle2">Deposit Amount</Typography>
            <Typography variant="h3" gutterBottom>
              $ {myProfileData?.topup_amount?.toFixed(2)}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
