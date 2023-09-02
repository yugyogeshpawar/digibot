/* eslint-disable import/no-unresolved */
// material
import { useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import { getProfile, getDailyIncome } from 'src/redux/slices/user';
import { useDispatch, useSelector } from 'src/redux/store';
// hooks
import useSettings from '../../hooks/useSettings';
import useAuth from '../../hooks/useAuth';
import Swap from './Swap/index';

// components
import Page from '../../components/Page';
// ----------------------------------------------------------------------

export default function MyStone() {
  const { themeStretch, themeMode } = useSettings();
  const { user } = useAuth();
  const { myProfile } = useSelector((state) => state.user);
  const { dailyincomeData } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
    dispatch(getDailyIncome());
  }, [dispatch]);

  return (
    <Page title="General: E-commerce | Digibot">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3} sx={{ marginTop: '-48px ' }}>
          <Grid item xs={12}>
            <Swap theme={themeMode} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
