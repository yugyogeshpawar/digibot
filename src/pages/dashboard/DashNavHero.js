import { Box, Grid, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'; // Import makeStyles from @material-ui/styles
import React, { useState, useEffect } from 'react';
import './style.css';

const useStyles = makeStyles((theme) => ({
  mainDasNavhero: {
    [theme.breakpoints.down('sm')]: {
      '& .hiddenOnMobile': {
        display: 'none'
      }
    }
  }
}));

const DashNavHero = () => {
  // State to hold the current time
  const [currentTime, setCurrentTime] = useState(new Date());

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

  const classes = useStyles();

  return (
    <Grid container>
      <Grid item>
        <div className={classes.mainDasNavhero}>
          <Box display="flex" p={2} alignItems="center">
            <Box display="flex" p={2}>
              <Box mr={1}>
                <Typography noWrap>
                  Coin Balance: <span> 0 </span>
                </Typography>
              </Box>
            </Box>
            <Box className="hiddenOnMobile">
              <Box ml={1} display="flex" p={2}>
                <div style={{ display: 'flex' }}>
                  <Typography variant="subtitle1" mr={1}>
                    {isSmallScreen ? 'Timer' : 'Local Time'}:{' '}
                  </Typography>
                  <Typography variant="subtitle1">{formattedTime(currentTime)}</Typography>
                </div>
              </Box>
            </Box>
            <Box display="flex" className="hiddenOnMobile">
              <div>
                <Box style={{ display: 'flex' }}>
                  UTC Time :{' '}
                  <span style={{ marginLeft: '5px' }}>
                    {!isSmallScreen && <Typography variant="subtitle1">{formattedUTCTime(currentTime)}</Typography>}
                  </span>
                </Box>
              </div>
            </Box>
          </Box>
        </div>
      </Grid>
    </Grid>
  );
};

export default DashNavHero;
