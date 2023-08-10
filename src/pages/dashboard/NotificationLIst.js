import styled from '@emotion/styled';
import { Box, Stack, Tab, Tabs } from '@material-ui/core';
import { Block, PersonPinCircleOutlined, PhonelinkLockOutlined } from '@material-ui/icons';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import FavoriteIcon from '@material-ui/icons/Favorite';

import React, { useState } from 'react';

const RootStyle = styled('div')(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(8, 2)
}));

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  '& > *': { mx: '8px !important' }
};
const SIMPLE_TAB = [
  { value: '1', icon: <PhonelinkLockOutlined />, label: 'Item One', disabled: false },
  { value: '2', icon: <FavoriteIcon />, label: 'Item Two', disabled: false },
  { value: '3', icon: <PersonPinCircleOutlined />, label: 'Item Three', disabled: true }
];

function NotificationLIst() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <RootStyle>
      <div>
        <div>Notification List</div>
        <div>Notification List</div>
      </div>
      <Stack spacing={3} direction={{ xs: 'column', md: 'row' }}>
        <Block title="Text" sx={style}>
          <TabContext value={value}>
            <TabList onChange={handleChange}>
              {SIMPLE_TAB.map((tab, index) => (
                <Tab key={tab.value} label={tab.label} value={String(index + 1)} />
              ))}
            </TabList>
            <Box
              sx={{
                p: 2,
                mt: 2,
                height: 80,
                width: '100%',
                borderRadius: 1,
                bgcolor: 'grey.50012'
              }}
            >
              {SIMPLE_TAB.map((panel, index) => (
                <TabPanel key={panel.value} value={String(index + 1)}>
                  {panel.label}
                </TabPanel>
              ))}
            </Box>
          </TabContext>
        </Block>

        <Block title="Icon" sx={style}>
          <Tabs value={value} onChange={handleChange}>
            {SIMPLE_TAB.map((tab) => (
              <Tab key={tab.value} icon={tab.icon} value={tab.value} />
            ))}
          </Tabs>
        </Block>
      </Stack>
    </RootStyle>
  );
}

export default NotificationLIst;
