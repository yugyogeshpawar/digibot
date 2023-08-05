import { useEffect, useState } from 'react';
import useAdminAuth from '../../../hooks/useAdminAuth';
// material-ui
import { Grid } from '@mui/material';

// project imports

import TotalIncomeDarkCard from './DashboardCard/TotalIncomeDarkCard';
import TotalIncomeLightCard from './DashboardCard/TotalIncomeLightCard';
import ActiveCard from './DashboardCard/ActiveCard';
import InactiveCard from './DashboardCard/InactiveCard';
import PendingCard from './DashboardCard/PendingCard';
import TotalStaking from './DashboardCard/TotalStaking';
import ConfirmWithdraw from './DashboardCard/ConfirmWithdraw';
import { gridSpacing } from 'store/constant';
import NanoBot from './BotCards.js/NanoBot';
import AlphaBot from './BotCards.js/AlphaBot';
import BetaBot from './BotCards.js/BetaBot';
import DeltaBot from './BotCards.js/DeltaBot';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const { user } = useAdminAuth();
  console.log(user);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeDarkCard isLoading={isLoading} title={'Total User'} totalUser={user?.totalUser} />
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <ActiveCard isLoading={isLoading} title={'Active user '} teams={user?.totalActiveUser} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <InactiveCard isLoading={isLoading} title={'Inactive User'} inactive={user?.totalInactiveUser} />
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeLightCard isLoading={isLoading} title={'Total investment'} number={user?.totalInvestment} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <PendingCard isLoading={isLoading} title={'Pending Withdraw Request'} stackingBonus={user?.pendingWithdraw} />
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <ConfirmWithdraw isLoading={isLoading} title={'Confirm Withdraw Request'} directMember={`$${user?.confirmWithdraw}`} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeDarkCard isLoading={isLoading} title={'Blocked Users'} totalUser={`${user?.totalBlockedUser}`} />
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalStaking isLoading={isLoading} title={'Wallet amount'} refBonus={user?.walletAmount} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeDarkCard isLoading={isLoading} title={'Today Stacking'} totalUser={`${user?.todaystaking}`} />
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <PendingCard isLoading={isLoading} title={'Total Income'} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeDarkCard isLoading={isLoading} title={'Total Wallet Bal'} totalUser={`${user?.walletAmount}`} />
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <NanoBot isLoading={isLoading} title={'NANO BOT'} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={4}>
            <AlphaBot isLoading={isLoading} title={'ALPHA BOT '} />
          </Grid>
          <Grid item xs={12} md={4}>
            <BetaBot isLoading={isLoading} title={'BETA  BOT '} />
          </Grid>
          <Grid item xs={12} md={4}>
            <DeltaBot isLoading={isLoading} title={'DELTA BOT '} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
