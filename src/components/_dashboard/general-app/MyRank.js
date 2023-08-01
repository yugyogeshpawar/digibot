/* eslint-disable import/no-unresolved */
import PropTypes from 'prop-types';
import { Box, Card, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

MyRank.propTypes = {
  teamBusiness: PropTypes.number,
  title: PropTypes.string
};

export default function MyRank({ teamBusiness, title }) {
  return (
    <Box>
      <Card sx={{ display: 'flex', padding: '24px', flexDirection: 'column' }}>
        <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
          <Typography variant="subtitle2">{title}</Typography>
          <Typography variant="h5">${teamBusiness} </Typography>
        </Box>
      </Card>
    </Box>
  );
}
