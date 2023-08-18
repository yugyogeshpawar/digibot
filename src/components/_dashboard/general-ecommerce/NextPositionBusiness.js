// import { merge } from 'lodash';
/* eslint-disable import/no-unresolved */
import PropTypes from 'prop-types';
import { Box, Card, Typography, Stack } from '@material-ui/core';
// utils

NextPositionBusiness.propTypes = {
  myProfile: PropTypes.object
};

export default function NextPositionBusiness({ myProfile }) {
  console.log(myProfile);
  return (
    <Card sx={{ display: 'flex', alignItems: 'center', p: 4 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle2">Today's Profit</Typography>
        <Typography variant="h3" gutterBottom>
          $ {myProfile?.result?.toFixed(2)}
        </Typography>
        <Stack direction="row" alignItems="center" flexWrap="wrap">
          {/* <IconWrapperStyle
            sx={{
              ...(PERCENT < 0 && {
                color: 'error.main',
                bgcolor: alpha(theme.palette.error.main, 0.16)
              })
            }}
          >
            <Icon width={16} height={16} icon={PERCENT >= 0 ? trendingUpFill : trendingDownFill} />
          </IconWrapperStyle>
          <Typography variant="body2" component="span" sx={{ color: 'text.secondary' }}>
            Need Min
          </Typography> */}
        </Stack>
      </Box>
    </Card>
  );
}
