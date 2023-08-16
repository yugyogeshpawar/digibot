/* eslint-disable import/no-unresolved */
import { useEffect } from 'react';
import { Container, Grid, Stack } from '@material-ui/core';
// hooks
import { getIncomeDashRoute, getProfile } from 'src/redux/slices/user';
import { useDispatch, useSelector } from 'src/redux/store';
import ActiveVsInactive from 'src/components/_dashboard/general-ecommerce/ActiveVsInactive2';
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
    // incomeDash?.stake +
    // incomeDash?.roi +
    // incomeDash?.direct +
    // incomeDash?.withdraw +
    // incomeDash?.business +
    // incomeDash?.level +
    // incomeDash?.monthly +
    // incomeDash?.stake +
    incomeDash?.trade_Bonus +
    incomeDash?.passive_Bonus +
    incomeDash?.direct_Bonus +
    incomeDash?.withdraw_Level_Bonus +
    incomeDash?.reward_Bonus +
    incomeDash?.monthly_Bonus +
    incomeDash?.binary_Bonus +
    incomeDash?.level_Bonus +
    incomeDash?.pool_Bonus;

  const dd = incomeDash?.bonus;
  console.log(totalBonusData, 'KKKKK');
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
            <WithoutUSD teamBusiness={0} title="Currunt Pool " />
          </Grid>
          <Grid item xs={12} md={4}>
            <WithoutUSD teamBusiness={`${user?.left_pair} : ${user?.right_pair}`} title=" First Pair" />
          </Grid>
          <Grid item xs={12} md={4}>
            <MyRank teamBusiness={incomeDash?.trade_Bonus} title="Trade Bonus" />
          </Grid>
          <Grid item xs={12} md={4}>
            <MyRank teamBusiness={incomeDash?.passive_Bonus} title=" Trade Passive Bonus" />
          </Grid>
          <Grid item xs={12} md={4}>
            <MyRank teamBusiness={incomeDash?.direct_Bonus} title="Direct Bonus" />
          </Grid>
          <Grid item xs={12} md={4}>
            <MyRank teamBusiness={incomeDash?.level_Bonus} title="Level Bonus" />
          </Grid>
          <Grid item xs={12} md={4}>
            <MyRank teamBusiness={incomeDash?.withdraw_Level_Bonus} title="Withdraw Level Bonus" />
          </Grid>
          <Grid item xs={12} md={4}>
            <MyRank teamBusiness={incomeDash?.binary_Bonus} title="Matching Bonus" />
          </Grid>
          <Grid item xs={12} md={4}>
            <MyRank teamBusiness={incomeDash?.reward_Bonus} title="Reward Bonus" />
          </Grid>
          <Grid item xs={12} md={4}>
            <MyRank teamBusiness={incomeDash?.monthly_Bonus} title="Monthly Performance Bonus" />
          </Grid>
          <Grid item xs={12} md={4}>
            <MyRank teamBusiness={incomeDash?.monthly} title="Global Community Pool" />
          </Grid>
          <Grid item xs={12} md={4}>
            <MyRank teamBusiness={incomeDash?.pool_Bonus} title="Global Leadership Pool" />
          </Grid>
          <Grid item xs={12} md={4}>
            <MyRank teamBusiness={user?.daily_profit} title="Daily Trade Profit" />
          </Grid>
          <Grid item xs={12} md={4}>
            <WithoutUSD teamBusiness={totalBonusData?.toFixed(2)} title="Total Bonus" />
          </Grid>
          <Grid item xs={12} md={4}>
            <WithoutUSD teamBusiness={user?.wallet_amount} title="My Wallet " />
          </Grid>
          <Grid item xs={12} md={4}>
            <WithoutUSD teamBusiness={user?.withdrawal_amt} title="Withdraw Amount" />
          </Grid>
          <Grid item xs={12} md={4}>
            <MyRank teamBusiness={user?.daily_profit} title="Pool Wallet" />
          </Grid>

          <Grid item xs={12}>
            <EventsPosts />
          </Grid>
          <Grid item xs={12} md={8}>
            <AppAreaInstalled />
          </Grid>
          <Grid item xs={12} md={4}>
            {/**
           <Stack>
              <BankingInviteFriends />
            </Stack>
          */}

            <Stack>
              <ActiveVsInactive />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
