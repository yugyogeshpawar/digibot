import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import editFill from '@iconify/icons-eva/edit-fill';
// material
import { Box, Card, Stack, Button, Divider, CardHeader, Typography, CardContent } from '@material-ui/core';
// utils
import { fCurrency } from '../../../../utils/formatNumber';
// ----------------------------------------------------------------------

export default function WithdrawSummary({ bal }) {
  return (
    <Card sx={{ mb: 3 }}>
      <CardHeader title="Withdraw" />

      <CardContent>
        <Stack spacing={2}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h5" sx={{ color: 'text.secondary' }}>
              Your Investment :
            </Typography>
            <Typography variant="h5">{fCurrency(bal)}</Typography>
          </Stack>

          {/**  <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Withdraw Amount GUSD
            </Typography>
            <Typography variant="subtitle2">{GUSD && GUSD}</Typography>
          </Stack> 
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Withdraw Amount digibotP
            </Typography>
            <Typography variant="subtitle2">{digibotP && digibotP}</Typography>
          </Stack>

          <Divider />

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="subtitle1">Total</Typography>
            <Box sx={{ textAlign: 'right' }}>
              <Typography variant="subtitle1" sx={{ color: 'error.main' }}>
                {GUSD && GUSD}
              </Typography>
              <Typography variant="caption" sx={{ fontStyle: 'italic' }}>
                (VAT included if applicable)
              </Typography>
            </Box>
          </Stack>
          */}
        </Stack>
      </CardContent>
    </Card>
  );
}
