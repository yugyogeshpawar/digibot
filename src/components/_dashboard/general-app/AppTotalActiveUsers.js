import PropTypes from 'prop-types';
import { Box, Card, Typography } from '@material-ui/core';
// utils

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

AppTotalActiveUsers.propTypes = {
  totalEarning: PropTypes.number,
  title: PropTypes.string
};

export default function AppTotalActiveUsers({ totalEarning, title }) {
  return (
    <Card>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3 }}>
        <Box>
          <Typography variant="subtitle2">{title}</Typography>

          <Typography textAlign="center" variant="h5">
            {' '}
            {totalEarning}{' '}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
