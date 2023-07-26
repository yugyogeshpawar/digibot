import PropTypes from 'prop-types';
import { Box, Card, Typography } from '@material-ui/core';
// utils
import { fNumber } from '../../../utils/formatNumber';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

AppTotalActiveUsers.propTypes = {
  totalEarning: PropTypes.number,
  title: PropTypes.string
};

export default function AppTotalActiveUsers({ totalEarning, title }) {
  return (
    <Card sx={{ display: 'flex', alignItems: 'center', p: 3 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="h5">{fNumber((totalEarning * 60) / 100)} DGB</Typography>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle2">-</Typography>
        <Typography variant="h5">${fNumber((totalEarning * 60) / 100)}</Typography>
      </Box>
    </Card>
  );
}
