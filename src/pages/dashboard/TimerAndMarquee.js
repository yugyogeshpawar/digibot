/* eslint-disable jsx-a11y/no-distracting-elements */
import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import QRCodeStyling from 'qr-code-styling';
import { useSnackbar } from 'notistack5';
import { Link, Link as RouterLink } from 'react-router-dom';

// material
import closeFill from '@iconify/icons-eva/close-fill';
import { Icon } from '@iconify/react';
import { styled } from '@material-ui/core/styles';
import { Box, Typography, Button, Card, CardContent } from '@material-ui/core';
// eslint-disable-next-line import/no-unresolved
import useAuth from 'src/hooks/useAuth';
// eslint-disable-next-line import/no-unresolved
import './style.css';

// import CopyClipboard from '../../../components/CopyClipboard';
// eslint-disable-next-line import/no-unresolved

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  backgroundColor: theme.palette.primary.lighter,
  [theme.breakpoints.up('md')]: {
    height: '100%',
    display: 'flex',
    textAlign: 'left',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}));
const TimerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1),
  background: theme.palette.secondary.success,
  color: theme.palette.primary.contrastText,
  fontSize: 20,
  '& > *': {
    margin: theme.spacing(0, 1)
  }
}));
const currentDate = new Date();
const currentISOTime = currentDate.toISOString();
console.log(currentISOTime);

const TimerDigit = styled(Box)({
  color: 'grey.800',
  fontWeight: 500,
  animation: '$fadeIn 1s ease-in-out forwards'
});

// ----------------------------------------------------------------------

export default function AppWelcome() {
  const { user } = useAuth();
  const [timerSecond, setTimerSecond] = useState(null);
  const [timerMinutes, setTimerMinutes] = useState(null);
  const [timerHour, setTimerHour] = useState(null);
  const registrationDateAndTime = user?.registration_date;
  // const registrationDateAndTime = '2023-08-03T11:45:30.120Z';
  const [timeRemaining, setTimeRemaining] = useState(null);

  useEffect(() => {
    let timerInterval;

    if (registrationDateAndTime) {
      const targetTime = new Date(registrationDateAndTime);
      targetTime.setHours(targetTime.getHours() + 2);

      const updateTimer = () => {
        const now = new Date();
        const diff = targetTime - now;

        if (diff > 0) {
          const hours = Math.floor(diff / 3600000);
          const minutes = Math.floor((diff % 3600000) / 60000);
          const seconds = Math.floor((diff % 60000) / 1000);
          setTimerSecond(seconds);
          setTimerHour(hours);
          setTimerMinutes(minutes);
          const formattedTime = `${hours.toString().padStart(2, '0')} : ${minutes
            .toString()
            .padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
          setTimeRemaining(formattedTime);
        } else {
          setTimeRemaining('Time Expired');
          clearInterval(timerInterval);
        }
      };

      updateTimer();
      timerInterval = setInterval(updateTimer, 10);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [registrationDateAndTime]);

  const formatedHour = timerHour < 10 ? `0${timerHour}` : timerHour;
  const formatedMinutes = timerMinutes < 10 ? `0${timerMinutes}` : timerMinutes;
  const formatedSecond = timerSecond < 10 ? `0${timerSecond}` : timerSecond;

  return (
    <RootStyle>
      <CardContent
        sx={{
          color: 'red'
        }}
      >
        <Box className="mediaForTimerAndMarquee" justifyContent="center" display="flex">
          <Box width={565}>
            <Box justifyContent="center" display="flex" alignItems="center" mt={1}>
              <marquee behavior="scroll" direction="left" scrollamount="10">
                <Link to="/dashboard/stake">
                  <Typography color="red" variant="h5">
                    Please Activate Your Id before countdown expired !{' '}
                  </Typography>
                </Link>
              </marquee>
            </Box>
          </Box>
          <Box>
            <Box>
              {formatedHour === null ? (
                'Timer Expired '
              ) : (
                <TimerContainer>
                  <TimerDigit color="grey.800">
                    <Box> {formatedHour}</Box>
                  </TimerDigit>
                  <TimerDigit color="grey.800">
                    <Box> {formatedMinutes}</Box>
                  </TimerDigit>
                  <TimerDigit color="grey.800">
                    <Box> {formatedSecond}</Box>
                  </TimerDigit>
                </TimerContainer>
              )}
            </Box>
          </Box>
        </Box>
      </CardContent>
    </RootStyle>
  );
}
