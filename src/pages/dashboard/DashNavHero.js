import { Box, Grid, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, styled } from '@material-ui/styles'; // Import makeStyles from @material-ui/styles
import React, { useState, useEffect } from 'react';
import './style.css';
// eslint-disable-next-line import/no-unresolved
import useAuth from 'src/hooks/useAuth';

const useStyles = makeStyles((theme) => ({
  mainDasNavhero: {
    [theme.breakpoints.down('sm')]: {
      '& .hiddenOnMobile': {
        display: 'none'
      }
    }
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

const DashNavHero = () => {
  const { user } = useAuth();
  // State to hold the current time
  const [currentTime, setCurrentTime] = useState(new Date());

  const [timeRemaining, setTimeRemaining] = useState(null);
  // const registrationDateAndTime = '2023-08-04T13:12:18.345Z';
  const registrationDateAndTime = user?.registration_date;
  // Function to update the current time
  const updateCurrentTime = () => {
    setCurrentTime(new Date());
  };

  // Update the time every second
  useEffect(() => {
    const timer = setInterval(updateCurrentTime, 1000);

    // Clean up the timer on component unmount
    return () => clearInterval(timer);
  }, []);

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

          const formattedTimet = `${hours.toString().padStart(2, '0')} : ${minutes
            .toString()
            .padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
          setTimeRemaining(formattedTimet);
        } else {
          setTimeRemaining('00 : 00 : 00 ');
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

  // Format the time in HH:mm:ss format
  const formattedTime = (time) =>
    time.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

  // Format the UTC time in HH:mm:ss format
  const formattedUTCTime = (time) => time.toUTCString().slice(-12, -4);

  // Check if the screen is small
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const classes = useStyles();

  return (
    <Grid container display="flex" justifyContent="center">
      <Grid item>
        <div className={classes.mainDasNavhero}>
          <Box display="flex" p={!isSmallScreen && 2} alignItems="center">
            <Box display="flex" p={!isSmallScreen && 2}>
              <Box mr={1}>
                <Typography noWrap color="secondary">
                  Total Investment: <span> {user?.investment_busd} </span>
                </Typography>
              </Box>
            </Box>
            <Box display="flex" className="hiddenOnMobile">
              <div>
                <Box style={{ display: 'flex', color: '#3366FF' }}>
                  UTC Time :{' '}
                  <span style={{ marginLeft: '5px' }}>
                    {!isSmallScreen && (
                      <Typography color="secondary" variant="subtitle1">
                        {formattedUTCTime(currentTime)}
                      </Typography>
                    )}
                  </span>
                </Box>
              </div>
            </Box>
            {isMediumScreen || isSmallScreen ? (
              ''
            ) : (
              <Box display="flex" ml={5}>
                <div>
                  <Box>
                    <TimerContainer>
                      <TimerDigit color="white">
                        <Box style={{ color: '#3366FF' }}> {timeRemaining}</Box>
                      </TimerDigit>
                    </TimerContainer>
                  </Box>
                </div>
              </Box>
            )}
          </Box>
        </div>
      </Grid>
    </Grid>
  );
};

export default DashNavHero;
