import PropTypes from 'prop-types';
import { Box, Card, Typography } from '@material-ui/core';
// utils
import { fNumber } from '../../../utils/formatNumber';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

MXL.propTypes = {
  totalEarning: PropTypes.number
};

export default function MXL({ totalEarning }) {
  return (
    <Card sx={{ display: 'flex', alignItems: 'center', p: 3 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle2">Direct Business</Typography>

        <Typography variant="h5">{fNumber((totalEarning * 40) / 100)} DGB</Typography>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle2">-</Typography>
        <Typography variant="h5">{fNumber((totalEarning * 40) / 100)} USD</Typography>
      </Box>
    </Card>
  );
}
