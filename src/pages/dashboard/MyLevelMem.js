import { Icon } from '@iconify/react';
import { capitalCase } from 'change-case';
import { useState, useEffect } from 'react';
import roundVpnKey from '@iconify/icons-ic/round-vpn-key';
import roundAccountBox from '@iconify/icons-ic/round-account-box';
// material
import { Container, Tab, Box, Tabs, Stack } from '@material-ui/core';
// redux
import { useDispatch } from '../../redux/store';
import { getCards, getProfile, getInvoices, getAddressBook, getNotifications, getTeams } from '../../redux/slices/user';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import { AccountGeneral } from '../../components/_dashboard/user/account';
import AccountGeneral2 from '../../components/_dashboard/user/account/AccountGeneral2';
import MyLevelC from './MyLevelC';

// ----------------------------------------------------------------------

export default function UserAccount() {
  const { themeStretch } = useSettings();
  const [currentTab, setCurrentTab] = useState('Level 1');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCards());
    dispatch(getAddressBook());
    dispatch(getInvoices());
    dispatch(getNotifications());
    dispatch(getProfile());
    dispatch(getTeams());
  }, [dispatch]);

  const ACCOUNT_TABS = [
    {
      value: 'Level 1',
      icon: <Icon icon={roundVpnKey} width={20} height={20} />,
      component: <MyLevelC level={1} />
    },
    {
      value: 'Level 2',
      icon: <Icon icon={roundAccountBox} width={20} height={20} />,
      component: <MyLevelC level={2} />
    },
    {
      value: 'Level 3',
      icon: <Icon icon={roundAccountBox} width={20} height={20} />,
      component: <MyLevelC level={3} />
    },
    {
      value: 'Level 4',
      icon: <Icon icon={roundAccountBox} width={20} height={20} />,
      component: <MyLevelC level={4} />
    },
    {
      value: 'Level 5',
      icon: <Icon icon={roundAccountBox} width={20} height={20} />,
      component: <MyLevelC level={5} />
    },
    {
      value: 'Level 6',
      icon: <Icon icon={roundAccountBox} width={20} height={20} />,
      component: <MyLevelC level={6} />
    },
    {
      value: 'Level 7',
      icon: <Icon icon={roundAccountBox} width={20} height={20} />,
      component: <MyLevelC level={7} />
    },
    {
      value: 'Level 8',
      icon: <Icon icon={roundAccountBox} width={20} height={20} />,
      component: <MyLevelC level={8} />
    },
    {
      value: 'Level 9',
      icon: <Icon icon={roundAccountBox} width={20} height={20} />,
      component: <MyLevelC level={9} />
    },
    {
      value: 'Level 10',
      icon: <Icon icon={roundAccountBox} width={20} height={20} />,
      component: <MyLevelC level={10} />
    }
  ];

  const handleChangeTab = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Page title="User: Account Settings | Digibot">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="My Level"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Teams', href: PATH_DASHBOARD.user.root },
            { name: 'My Levels' }
          ]}
        />

        <Stack spacing={5}>
          <Tabs
            value={currentTab}
            scrollButtons="auto"
            variant="scrollable"
            allowScrollButtonsMobile
            onChange={handleChangeTab}
          >
            {ACCOUNT_TABS.map((tab) => (
              <Tab disableRipple key={tab.value} label={capitalCase(tab.value)} icon={tab.icon} value={tab.value} />
            ))}
          </Tabs>

          {ACCOUNT_TABS.map((tab) => {
            const isMatched = tab.value === currentTab;
            return isMatched && <Box key={tab.value}>{tab.component}</Box>;
          })}
        </Stack>
      </Container>
    </Page>
  );
}
