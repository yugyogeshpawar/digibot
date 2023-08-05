/* eslint-disable import/no-unresolved */
import PropTypes from 'prop-types';

import { Box, Card, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

WithoutUSD.propTypes = {
  teamBusiness: PropTypes.number,
  title: PropTypes.string
};

export default function WithoutUSD({ teamBusiness, title }) {
  return (
    <Box>
      <Card sx={{ display: 'flex', padding: '24px', flexDirection: 'column' }}>
        <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
          <Typography variant="subtitle2">{title}</Typography>
          <Typography variant="h4">{teamBusiness} </Typography>
        </Box>
      </Card>
    </Box>
  );
}
