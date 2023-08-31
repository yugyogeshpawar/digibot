/* eslint-disable import/no-unresolved */
import { Box, Card, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function NoLevelOpen({ teamBusiness, title }) {
  return (
    <Box>
      <Card sx={{ display: 'flex', padding: '24px', flexDirection: 'column' }}>
        <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
          <Typography variant="subtitle2">{title}</Typography>
          <Typography variant="h4" color={teamBusiness === 1 ? 'green' : 'red'}>
            {teamBusiness === 1 ? 'Level open' : 'No open Level'}{' '}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}
