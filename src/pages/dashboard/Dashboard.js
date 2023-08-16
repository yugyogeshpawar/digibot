/* eslint-disable import/no-unresolved */
import { useEffect } from 'react';
import { Container, Grid, Stack } from '@material-ui/core';
// hooks
import { getIncomeDashRoute, getProfile } from 'src/redux/slices/user';
import { useDispatch, useSelector } from 'src/redux/store';
import CryptoPriceMarquee from './CryptoPriceMarquee';
import useAuth from '../../hooks/useAuth';
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import {
  AppWelcome,
  AppFeatured,
  AppAreaInstalled,
  AppTotalActiveUsers,
  MyRank,
  WithoutUSD
} from '../../components/_dashboard/general-app';
import { BankingInviteFriends } from '../../components/_dashboard/general-banking';
import { EventsPosts } from '../../components/_dashboard/general-booking';
import TimerAndMarquee from './TimerAndMarquee';
import NoLevelOpen from './NoLevelOpen';
// ----------------------------------------------------------------------

export default function Dashboard() {
  const { themeStretch } = useSettings();
  const { user } = useAuth();

  const { myProfile } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const { incomeDash } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getIncomeDashRoute());
  }, [dispatch]);
  // user?.status === 0 ? <TimerAndMarquee /> : ''
  const totalBonusData =
    incomeDash?.stake +
    incomeDash?.roi +
    incomeDash?.direct +
    incomeDash?.withdraw +
    incomeDash?.match +
    incomeDash?.business +
    incomeDash?.monthly +
    incomeDash?.bonus;
  console.log(user, '++++++++++++++++++++++++++++++++++++++++++++++++');
  console.log(incomeDash, 'KKKKK');
  return (
    <Page title="General: App | Digibot">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3} sx={{ marginTop: '-48px ' }}>
          <Grid item xs={12}>
            <CryptoPriceMarquee />
          </Grid>
          <Grid item xs={12} md={8} sx={{ pt: 0 }}>
            {user?.status === 0 ? <TimerAndMarquee /> : null}
          </Grid>
          <Grid item xs={12} md={8} sx={{ pt: 0 }}>
            <AppWelcome displayName={user?.member_name} memberUserId={user?.member_user_id} />
          </Grid>
          <Grid item xs={12} md={4}>
            <AppFeatured nft3={myProfile?.nft3} />
          </Grid>
          <Grid item xs={12} md={4}>
            <MyRank teamBusiness={user?.investment_busd} title="My Package" />
          </Grid>
          <Grid item xs={12} md={4}>
            <WithoutUSD teamBusiness={user?.team_member} title="My Downline" />
          </Grid>
          <Grid item xs={12} md={4}>
            <WithoutUSD teamBusiness={user?.left_member + user?.right_member} title="Total Active" />
          </Grid>
          <Grid item xs={12} md={4}>
            <AppTotalActiveUsers totalEarning={user?.left_member} title="Left Active" />
          </Grid>
          <Grid item xs={12} md={4}>
            <AppTotalActiveUsers totalEarning={user?.right_member} title="Right Active" />
          </Grid>
          <Grid item xs={12} md={4}>
            <MyRank teamBusiness={user?.team_business_left} title="Left business" />
          </Grid>
          <Grid item xs={12} md={4}>
            <MyRank teamBusiness={user?.team_business_right} title="Right business" />
          </Grid>
          <Grid item xs={12} md={4}>
            <WithoutUSD teamBusiness={user?.direct_member} title=" Direct Member" />
          </Grid>
          <Grid item xs={12} md={4}>
            <NoLevelOpen teamBusiness={user?.qualify_level} title=" Level Open" />
          </Grid>
          <Grid item xs={12} md={4}>
            <WithoutUSD teamBusiness={`${user?.left_pair} : ${user?.right_pair}`} title=" First Pair" />
          </Grid>
          <Grid item xs={12} md={4}>
            <MyRank teamBusiness={incomeDash?.stake} title="Trade Bonus" />
          </Grid>
          <Grid item xs={12} md={4}>
            <MyRank teamBusiness={incomeDash?.roi} title=" Trade Passive Bonus" />
          </Grid>
          <Grid item xs={12} md={4}>
            <MyRank teamBusiness={incomeDash?.direct} title="Direct Bonus" />
          </Grid>
          <Grid item xs={12} md={4}>
            <MyRank teamBusiness={incomeDash?.level} title="Level Bonus" />
          </Grid>

          <Grid item xs={12} md={4}>
            <MyRank teamBusiness={incomeDash?.bonus} title="Matching Bonus" />
          </Grid>
          <Grid item xs={12} md={4}>
            <MyRank teamBusiness={incomeDash?.business} title="Reward Bonus" />
          </Grid>
          <Grid item xs={12} md={4}>
            <MyRank teamBusiness={incomeDash?.monthly} title="Monthly Performance Bonus" />
          </Grid>
          <Grid item xs={12} md={4}>
            <MyRank teamBusiness={incomeDash?.monthly} title="Global Community Pool" />
          </Grid>
          <Grid item xs={12} md={4}>
            <MyRank teamBusiness={incomeDash?.monthly} title="Global Leadership Pool" />
          </Grid>
          <Grid item xs={12} md={4}>
            <MyRank teamBusiness={user?.daily_profit} title="Daily Trade Profit" />
          </Grid>
          <Grid item xs={12} md={4}>
            <WithoutUSD teamBusiness={totalBonusData.toFixed(2)} title="Total Bonus" />
          </Grid>
          <Grid item xs={12} md={4}>
            <WithoutUSD teamBusiness={user?.wallet_amount} title="My Wallet " />
          </Grid>
          <Grid item xs={12} md={4}>
            <WithoutUSD teamBusiness={user?.withdrawal_amt} title="Withdraw Amount" />
          </Grid>
          <Grid item xs={12}>
            <EventsPosts />
          </Grid>
          <Grid item xs={12} md={8}>
            <AppAreaInstalled />
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack>
              <BankingInviteFriends />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
