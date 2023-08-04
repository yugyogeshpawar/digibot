/* eslint-disable import/no-unresolved */
// import PropTypes from 'prop-types';
// import { Icon } from '@iconify/react';
// import menu2Fill from '@iconify/icons-eva/menu-2-fill';
// // material
// import { alpha, styled } from '@material-ui/core/styles';
// import { Box, Stack, AppBar, Toolbar, IconButton } from '@material-ui/core';
// // hooks
// // eslint-disable-next-line import/no-unresolved
// import useAuth from 'src/hooks/useAuth';
// import useCollapseDrawer from '../../hooks/useCollapseDrawer';
// // components
// import { MHidden } from '../../components/@material-extend';
// import Searchbar from './Searchbar';
// import AccountPopover from './AccountPopover';
// import LanguagePopover from './LanguagePopover';
// import ContactsPopover from './ContactsPopover';
// import NotificationsPopover from './NotificationsPopover';

// // ----------------------------------------------------------------------

// const DRAWER_WIDTH = 280;
// const COLLAPSE_WIDTH = 102;

// const APPBAR_MOBILE = 64;
// const APPBAR_DESKTOP = 92;

// const RootStyle = styled(AppBar)(({ theme }) => ({
//   boxShadow: 'none',
//   backdropFilter: 'blur(6px)',
//   WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
//   backgroundColor: alpha(theme.palette.background.default, 0.72),
//   [theme.breakpoints.up('lg')]: {
//     width: `calc(100% - ${DRAWER_WIDTH}px)`
//   }
// }));

// const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
//   minHeight: APPBAR_MOBILE,
//   [theme.breakpoints.up('lg')]: {
//     minHeight: APPBAR_DESKTOP,
//     padding: theme.spacing(0, 5)
//   }
// }));

// // ----------------------------------------------------------------------

// export default function DashboardNavbar({ onOpenSidebar }) {
//   const { isCollapse } = useCollapseDrawer();
//   const { user } = useAuth();
//   const registrationDateAndTime = user?.registration_date;

//   console.log('registrationDateAndTime from SerchBar timer {{{{{{{{{{{{{{{{{{{{{===>>', registrationDateAndTime);
//   return (
//     <RootStyle
//       sx={{
//         ...(isCollapse && {
//           width: { lg: `calc(100% - ${COLLAPSE_WIDTH}px)` }
//         })
//       }}
//     >
//       <ToolbarStyle>
//         <MHidden width="lgUp">
//           <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary' }}>
//             <Icon icon={menu2Fill} />
//           </IconButton>
//         </MHidden>

//         <Searchbar />
//         <Box>
//           <Box>timer</Box>
//         </Box>
//         <Box sx={{ flexGrow: 1 }} />
//         <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
//           <LanguagePopover />
//           <NotificationsPopover />
//           {/* <ContactsPopover /> */}
//           <AccountPopover />
//         </Stack>
//       </ToolbarStyle>
//     </RootStyle>
//   );
// }

// hooks
// eslint-disable-next-line import/no-unresolved

// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import { Icon } from '@iconify/react';
// import menu2Fill from '@iconify/icons-eva/menu-2-fill';
// // material
// import { alpha, styled } from '@material-ui/core/styles';
// import { Box, Stack, AppBar, Toolbar, IconButton } from '@material-ui/core';
// // hooks
// // eslint-disable-next-line import/no-unresolved
// import useAuth from 'src/hooks/useAuth';
// import useCollapseDrawer from '../../hooks/useCollapseDrawer';
// // components
// import { MHidden } from '../../components/@material-extend';
// import Searchbar from './Searchbar';
// import AccountPopover from './AccountPopover';
// import LanguagePopover from './LanguagePopover';
// import ContactsPopover from './ContactsPopover';
// import NotificationsPopover from './NotificationsPopover';

// // ----------------------------------------------------------------------

// const DRAWER_WIDTH = 280;
// const COLLAPSE_WIDTH = 102;

// const APPBAR_MOBILE = 64;
// const APPBAR_DESKTOP = 92;

// const RootStyle = styled(AppBar)(({ theme }) => ({
//   boxShadow: 'none',
//   backdropFilter: 'blur(6px)',
//   WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
//   backgroundColor: alpha(theme.palette.background.default, 0.72),
//   [theme.breakpoints.up('lg')]: {
//     width: `calc(100% - ${DRAWER_WIDTH}px)`
//   }
// }));

// const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
//   minHeight: APPBAR_MOBILE,
//   [theme.breakpoints.up('lg')]: {
//     minHeight: APPBAR_DESKTOP,
//     padding: theme.spacing(0, 5)
//   }
// }));

// // ----------------------------------------------------------------------
// const currentDate = new Date();
// const currentISOTime = currentDate.toISOString();
// console.log(currentISOTime, 'currentISOTime ====>>>>>');
// export default function DashboardNavbar({ onOpenSidebar }) {
//   const { isCollapse } = useCollapseDrawer();
//   const { user } = useAuth();
//   // const registrationDateAndTime = user?.registration_date;
//   const registrationDateAndTime = '2023-08-03T09:42:04.338Z';
//   const [timeRemaining, setTimeRemaining] = useState(null);

//   useEffect(() => {
//     let timerInterval;

//     if (registrationDateAndTime) {
//       const targetTime = new Date(registrationDateAndTime);
//       targetTime.setHours(targetTime.getHours() + 2);

//       const updateTimer = () => {
//         const now = new Date();
//         const diff = targetTime - now;

//         if (diff > 0) {
//           const hours = Math.floor(diff / 3600000);
//           const minutes = Math.floor((diff % 3600000) / 60000);
//           const seconds = Math.floor((diff % 60000) / 1000);

//           const formattedTime = ` ${hours.toString().padStart(2, '0')} : ${minutes
//             .toString()
//             .padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
//           setTimeRemaining(formattedTime);
//         } else {
//           setTimeRemaining('Time Expired');
//           clearInterval(timerInterval);
//         }
//       };

//       updateTimer();
//       timerInterval = setInterval(updateTimer, 10);
//     }

//     return () => {
//       clearInterval(timerInterval);
//     };
//   }, [registrationDateAndTime]);

//   return (
//     <RootStyle
//       sx={{
//         ...(isCollapse && {
//           width: { lg: `calc(100% - ${COLLAPSE_WIDTH}px)` }
//         })
//       }}
//     >
//       <ToolbarStyle>
//         <MHidden width="lgUp">
//           <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary' }}>
//             <Icon icon={menu2Fill} />
//           </IconButton>
//         </MHidden>

//         <Searchbar />
//         <Box display="flex">
//           <Box>Remaining Time : </Box>
//           <Box>{timeRemaining || 'Timer'}</Box>
//         </Box>
//         <Box sx={{ flexGrow: 1 }} />
//         <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
//           <LanguagePopover />
//           <NotificationsPopover />
//           {/* <ContactsPopover /> */}
//           <AccountPopover />
//         </Stack>
//       </ToolbarStyle>
//     </RootStyle>
//   );
// }

// DashboardNavbar.propTypes = {
//   onOpenSidebar: PropTypes.func
// };
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import menu2Fill from '@iconify/icons-eva/menu-2-fill';
// material
import { alpha, styled } from '@material-ui/core/styles';
import { Box, Stack, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
// hooks
// eslint-disable-next-line import/no-unresolved
import useAuth from 'src/hooks/useAuth';
import { makeStyles } from '@mui/styles';
import DashNavHero from 'src/pages/dashboard/DashNavHero';
import useCollapseDrawer from '../../hooks/useCollapseDrawer';
// components
import { MHidden } from '../../components/@material-extend';
import Searchbar from './Searchbar';
import AccountPopover from './AccountPopover';
import LanguagePopover from './LanguagePopover';
import ContactsPopover from './ContactsPopover';
import NotificationsPopover from './NotificationsPopover';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;
const COLLAPSE_WIDTH = 102;

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const TimerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1),
  background: theme.palette.secondary.success,
  color: theme.palette.primary.contrastText,
  fontSize: 10,
  '& > *': {
    margin: theme.spacing(0, 1)
  }
}));

const TimerDigit = styled(Box)({
  opacity: 100,
  color: 'white',
  animation: '$fadeIn 1s ease-in-out forwards'
});
const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`
  }
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5)
  }
}));

// ----------------------------------------------------------------------
const currentDate = new Date();
const currentISOTime = currentDate.toISOString();
console.log(currentISOTime, 'currentISOTime ====>>>>>');
export default function DashboardNavbar({ onOpenSidebar }) {
  const { isCollapse } = useCollapseDrawer();
  const { user } = useAuth();

  return (
    <RootStyle
      sx={{
        ...(isCollapse && {
          width: { lg: `calc(100% - ${COLLAPSE_WIDTH}px)` }
        })
      }}
    >
      <ToolbarStyle>
        <MHidden width="lgUp">
          <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary' }}>
            <Icon icon={menu2Fill} />
          </IconButton>
        </MHidden>
        <Searchbar />
        {/** <Box display="flex" alignItems="center">
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
            Remaining Time:
          </Typography>
          <TimerStyle variant="body2">{timeRemaining || 'Timer'}</TimerStyle>
        </Box> */}

        <DashNavHero />
        <Box sx={{ flexGrow: 1 }} />
        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
          <LanguagePopover />
          <NotificationsPopover />
          {/* <ContactsPopover /> */}
          <AccountPopover />
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
}

DashboardNavbar.propTypes = {
  onOpenSidebar: PropTypes.func
};
