/* eslint-disable import/no-unresolved */
import { useEffect } from 'react';
// material
import { Box, Grid, Container, Typography } from '@material-ui/core';
import userFill from '@iconify/icons-ph/user-fill';
import moneyIcon from '@iconify/icons-fluent-mdl2/money';
import usersIcon from '@iconify/icons-raphael/users';
import moneyIcon2 from '@iconify/icons-grommet-icons/money';
// hooks
import { useDispatch, useSelector } from 'src/redux/store';
import useSettings from '../../hooks/useSettings';
import useAuth from '../../hooks/useAuth';
// components
import Page from '../../components/Page';
import { AnalyticsCurrentVisits, MySponser } from '../../components/_dashboard/general-analytics';
import { ActiveVsInactive2 } from '../../components/_dashboard/general-ecommerce';
import { getTeams } from '../../redux/slices/user';
import { MyTeams, TeamBinary } from '../../components/_dashboard/general-banking';
import { MyTeamList } from '../../components/_dashboard/general-booking';
// ----------------------------------------------------------------------

export default function GeneralAnalytics() {
  const { themeStretch } = useSettings();
  const { user } = useAuth();
  // const { output } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTeams());
  }, [dispatch]);
  return (
    <Page title="General: Analytics | Digibot">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <MySponser
              icon={userFill} // Pass the icon as a prop
              backgroundColor="your_desired_background_color" // Pass the background color as a prop
              title1="My Sponcers" // Pass the title1 as a prop
              title2={user.sponcer_name} // Pass the title2 as a prop
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MySponser
              icon={moneyIcon} // Pass the icon as a prop
              backgroundColor="" // Pass the background color as a prop
              title1="My Direct Business" // Pass the title1 as a prop
              title2={user.direct_business} // Pass the title2 as a prop
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MySponser
              icon={usersIcon} // Pass the icon as a prop
              backgroundColor="" // Pass the background color as a prop
              title1="My Teams" // Pass the title1 as a prop
              title2={user.direct_member} // Pass the title2 as a prop
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MySponser
              icon={moneyIcon2} // Pass the icon as a prop
              backgroundColor="" // Pass the background color as a prop
              title1="My Team Business" // Pass the title1 as a prop
              title2={user.team_business} // Pass the title2 as a prop
            />
          </Grid>

          <Grid item xs={12}>
            <TeamBinary />
          </Grid>
          <Grid item xs={12}>
            <MyTeams />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AnalyticsCurrentVisits />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ActiveVsInactive2 />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
