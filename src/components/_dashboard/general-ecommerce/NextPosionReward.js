import PropTypes from 'prop-types';
// material
import { Box, Card, Typography, Stack } from '@material-ui/core';
// utils
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// eslint-disable-next-line import/no-unresolved
import { getIncomeDashRoute } from 'src/redux/slices/user';

// ----------------------------------------------------------------------

NextPosionReward.propTypes = {
  myProfile: PropTypes.object
};

export default function NextPosionReward({ myProfile }) {
  const dispatch = useDispatch();
  console.log(myProfile);

  useEffect(() => {
    dispatch(getIncomeDashRoute());
  }, [dispatch]);
  return (
    <Card sx={{ display: 'flex', alignItems: 'center', p: 4 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle2">Total Profit</Typography>
        <Typography variant="h3" gutterBottom>
          $ {myProfile?.user?.total_earning?.toFixed(2)}
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
          </IconWrapperStyle> */}

          <Typography variant="subtitle2" component="span" sx={{ color: 'primary.main' }}>
            {myProfile?.nextRank?.stoneIncome}
          </Typography>
          {/* <Typography variant="body2" component="span" sx={{ color: 'text.secondary', ml: '3px' }}>
            Stone Income
          </Typography> */}
        </Stack>
      </Box>
    </Card>
  );
}
