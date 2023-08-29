/* eslint-disable import/no-unresolved */
// material
import { useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import { getProfile, getDailyIncome } from 'src/redux/slices/user';
import { useDispatch, useSelector } from 'src/redux/store';
// hooks
import useSettings from '../../hooks/useSettings';
import useAuth from '../../hooks/useAuth';
import TradingViewChart from './TradingViewChart';
// import TradingList from './TradingList';

// components
import Page from '../../components/Page';
import {
  MybotWelcome,
  EcommerceNewProducts,
  NextPositionBusiness,
  NextPosionReward,
  NextPosition
} from '../../components/_dashboard/general-ecommerce';

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
          <Grid item xs={12} md={8}>
            <MybotWelcome displayTitle={user?.assigned_bot_id} totalBusiness={user?.team_business} />
          </Grid>

          <Grid item xs={12} md={4}>
            <EcommerceNewProducts myProfile={myProfile} />
          </Grid>

          <Grid item xs={12} md={4}>
            <NextPosition myProfile={myProfile} />
          </Grid>
          <Grid item xs={12} md={4}>
            <NextPositionBusiness myProfile={dailyincomeData} />
          </Grid>
          <Grid item xs={12} md={4}>
            <NextPosionReward myProfile={myProfile} />
          </Grid>
          <Grid item xs={12}>
            <TradingViewChart theme={themeMode} />
          </Grid>
          {/* <Grid item xs={12}>
            <TradingList theme={themeMode} />
          </Grid> */}
        </Grid>
      </Container>
    </Page>
  );
}
