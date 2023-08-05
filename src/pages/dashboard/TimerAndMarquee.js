/* eslint-disable jsx-a11y/no-distracting-elements */
// /* eslint-disable jsx-a11y/no-distracting-elements */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import { Box, Typography, Button, Card, CardContent } from '@material-ui/core';
import { useSnackbar } from 'notistack5';

import closeFill from '@iconify/icons-eva/close-fill';
import { Icon } from '@iconify/react';

// eslint-disable-next-line import/no-unresolved
import useAuth from 'src/hooks/useAuth';
import './style.css';

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

const TimerDigit = styled(Box)({
  color: 'grey.800',
  fontWeight: 500,
  animation: '$fadeIn 1s ease-in-out forwards'
});

export default function AppWelcome() {
  const { user } = useAuth();
  const { enqueueSnackbar } = useSnackbar(); // Initialize the notistack

  const [timerSecond, setTimerSecond] = useState(null);
  const [timerMinutes, setTimerMinutes] = useState(null);
  const [timerHour, setTimerHour] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(null);
  // const registrationDateAndTime = '2023-08-04T05:29:12.548Z';
  const [sawNotification, setSawNotification] = useState(false);
  const registrationDateAndTime = user?.registration_date;
  useEffect(() => {
    let timerInterval;
    let notificationInterval;

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

          // Show popup every 30 seconds
          if (diff % 30000 === 0) {
            setSawNotification(true);
          }
        } else {
          setTimeRemaining('Time Expired');
          clearInterval(timerInterval);
          clearInterval(notificationInterval);
        }
      };

      updateTimer();
      timerInterval = setInterval(updateTimer, 10);

      // Show initial notification when component mounts
      setSawNotification(true);

      // Show notification every 30 seconds
      notificationInterval = setInterval(() => {
        setSawNotification(true);
      }, 30000);
    }

    return () => {
      clearInterval(timerInterval);
      clearInterval(notificationInterval);
    };
  }, [registrationDateAndTime]);

  const formatedHour = timerHour < 10 ? `0${timerHour}` : timerHour;
  const formatedMinutes = timerMinutes < 10 ? `0${timerMinutes}` : timerMinutes;
  const formatedSecond = timerSecond < 10 ? `0${timerSecond}` : timerSecond;

  // Show the notification if sawNotification is true
  useEffect(() => {
    if (sawNotification) {
      enqueueSnackbar('Please Activate Your Id before countdown expires!', {
        variant: 'warning' // You can change the variant to 'success', 'error', 'warning', etc.
      });
      setSawNotification(false);
    }
  }, [sawNotification, enqueueSnackbar]);

  return (
    <RootStyle>
      <CardContent sx={{ color: 'red' }}>
        <Box className="mediaForTimerAndMarquee" justifyContent="center" display="flex">
          <Box width={565}>
            <Box justifyContent="center" display="flex" alignItems="center" mt={1}>
              <marquee behavior="scroll" direction="left" scrollamount="10">
                <Link to="/dashboard/stake">
                  <Typography color="red" variant="h5">
                    Please Activate Your Id before countdown expired!{' '}
                  </Typography>
                </Link>
              </marquee>
            </Box>
          </Box>
          <Box>
            <Box>
              {formatedHour === null ? (
                'Timer Expired'
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
