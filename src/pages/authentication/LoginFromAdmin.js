/* eslint-disable new-cap */
import { useEffect } from 'react';
// material
import { styled } from '@material-ui/core/styles';
import queryString from 'query-string';
import { Box } from '@material-ui/core';
import Page from '../../components/Page';
import LoadingScreen from '../../components/LoadingScreen';
import { setSession } from '../../utils/jwt';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

// ----------------------------------------------------------------------

export default function DashLogin() {
  const queryParams = new queryString.parse(window.location.search);

  useEffect(() => {
    console.log(queryParams);
    if (queryParams.token) {
      setSession(queryParams.token);
      // Wait for one second before redirecting
      setTimeout(() => {
        window.location.href = '/dashboard/app';
      }, 1000);
    }
  }, []);

  return (
    <RootStyle title="Register | Digibot">
      <Box sx={{ position: 'absolute', top: '45%', left: '40', width: '100vw' }}>
        <LoadingScreen />
      </Box>
    </RootStyle>
  );
}
