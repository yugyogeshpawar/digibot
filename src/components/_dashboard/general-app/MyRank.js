/* eslint-disable import/no-unresolved */
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Box, Card, Typography } from '@material-ui/core';
import { getProfile } from 'src/redux/slices/user';
import { useDispatch, useSelector } from 'src/redux/store';
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

MyRank.propTypes = {
  teamBusiness: PropTypes.number,
  title: PropTypes.string
};

export default function MyRank({ teamBusiness, title }) {
  const { myProfile } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
  return (
    <Box>
      <Card sx={{ display: 'flex', padding: '24px', flexDirection: 'column' }}>
        <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
          <Typography variant="subtitle2">{title}</Typography>
          <Typography variant="h5">$ {teamBusiness} </Typography>
        </Box>
      </Card>
    </Box>
  );
}
