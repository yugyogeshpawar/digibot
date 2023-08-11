/* eslint-disable import/no-unresolved */
import PropTypes from 'prop-types';
import { Box, Card, Typography, Stack } from '@material-ui/core';
// ----------------------------------------------------------------------

NextPosition.propTypes = {
  myProfile: PropTypes.object
};

export default function NextPosition({ myProfile }) {
  const myProfileData = myProfile?.user;
  return (
    <Card sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle2">Deposit Amount</Typography>
            <Typography variant="h3" gutterBottom>
              {myProfileData?.topup_amount} $
            </Typography>
          </Box>
        </Box>
        <Stack direction="row" alignItems="center" flexWrap="wrap" sx={{ mt: 2 }}>
          <Box>
            <Typography variant="subtitle2" component="span" sx={{ marginLeft: '4px', color: 'primary.main' }}>
              {myProfile?.nextRank?.nextStone}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Card>
  );
}
