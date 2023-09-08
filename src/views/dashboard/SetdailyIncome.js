import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Grid, Box, Typography, MenuItem } from '@mui/material';
import Select from '@mui/material/Select';
// import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { putSetDailyIncome } from '../../redux/admin';
import { useEffect } from 'react';

const SetDailyIncome = () => {
  const [value, setValue] = useState('');
  const [botType, setBotType] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success'); // You can use 'error' for error messages

  const [botData, setBotData] = useState({
    flexibleBot: null,
    flexibleProBot: null,
    mediumBot: null,
    premiumBot: null
  });

  const fetchDailyIncome = async (botId, botType) => {
    try {
      const response = await fetch(`https://backend.digibot.trade/api/bots/${botId}`);
      const data = await response.json();

      // Access the daily_profit value from the data and set it in the state based on botType
      setBotData((prevData) => ({
        ...prevData,
        [botType]: data.bot.daily_profit
      }));
      // console.log(data);

      return data.bot.daily_profit;
    } catch (error) {
      console.error(`Error fetching data for bot ${botId}:`, error);
    }
  };

  useEffect(() => {
    // Fetch daily income data for all bot types when the component mounts
    fetchDailyIncome(6195448, 'flexibleBot'); // flexibleBot
    fetchDailyIncome(2089372, 'flexibleProBot'); // flexibleProBot
    fetchDailyIncome(9818273, 'mediumBot'); // mediumBot
    fetchDailyIncome(6026937, 'premiumBot'); // premiumBot
  }, []);

  // console.log(botData);

  const handleSnackbarOpen = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setOpenSnackbar(true);
  };

  const handleIncomeChange = (e) => {
    const inputValue = parseFloat(e.target.value);

    if (inputValue <= getMaxValue()) {
      setValue(inputValue);
    } else {
      setValue(getMaxValue());
    }
  };

  const handleBotTypeChange = (e) => {
    setBotType(e.target.value);
    setValue('');
  };

  const getMinValue = () => {
    if (botType === 'flexibleBot') return 0.05;
    if (botType === 'flexibleProBot') return 0.05;
    if (botType === 'mediumBot') return 0.05;
    if (botType === 'premiumBot') return 0.05;
    return 0;
  };

  const getMaxValue = () => {
    if (botType === 'flexibleBot') return 0.4;
    if (botType === 'flexibleProBot') return 0.5;
    if (botType === 'mediumBot') return 0.6;
    if (botType === 'premiumBot') return 0.75;
    return 0;
  };
  const getBotIdFromType = (botType) => {
    switch (botType) {
      case 'flexibleBot':
        return 6195448;
      case 'flexibleProBot':
        return 2089372;
      case 'mediumBot':
        return 9818273;
      case 'premiumBot':
        return 6026937;
      default:
        return null;
    }
  };

  const handleSubmit = async () => {
    // Perform submit logic here using the selected bot type and income value
    console.log('Bot Type:', botType);
    console.log('Income Value:', value);

    // Get the bot ID based on the selected bot type
    const botId = getBotIdFromType(botType);

    try {
      // Call the handleUpdate function to make the PUT request
      const response = await putSetDailyIncome(botId, value);

      // Handle the successful response here if needed
      console.log('Data updated successfully:', response);
      handleSnackbarOpen('Data updated successfully', 'success');
    } catch (error) {
      // Handle errors here
      console.error('Error updating data:', error);
      handleSnackbarOpen('Error updating data', 'error');
    }
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{ display: 'flex', flexDirection: 'column', background: 'white', width: '100%', p: 4, borderRadius: '20px', height: '100%' }}
    >
      <Typography variant="h4" sx={{ mt: 5 }}>
        Current Daily Income for Each Bot:
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Nano Bot : {botData.flexibleBot !== null ? `$${botData.flexibleBot}` : 'Loading...'}
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        Alpha Bot : {botData?.flexibleProBot !== null ? `$${botData.flexibleProBot}` : 'Loading...'}
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        Beta Bot : {botData.mediumBot !== null ? `$${botData.mediumBot}` : 'Loading...'}
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        Delta Bot : {botData.premiumBot !== null ? `$${botData.premiumBot}` : 'Loading...'}
      </Typography>
      <Typography variant="h3" sx={{ mb: 3, mt: 5 }}>
        Daily Income Set
      </Typography>
      <Grid container sx={{ mb: 2 }} rowSpacing={1} columnSpacing={1}>
        <Grid item xs={12} md={4}>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={botType}
            label="Bot Type *"
            onChange={handleBotTypeChange}
            sx={{ width: '100%' }}
          >
            <MenuItem value="flexibleBot">Nano Bot</MenuItem>
            <MenuItem value="flexibleProBot">Alpha Bot</MenuItem>
            <MenuItem value="mediumBot">Beta Bot</MenuItem>
            <MenuItem value="premiumBot">Delta Bot</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Enter Income"
            type="number"
            value={value}
            sx={{ marginRight: '1rem', width: '90%' }}
            onChange={handleIncomeChange}
            inputProps={{
              min: getMinValue(),
              max: getMaxValue()
            }}
            helperText={`Min: ${getMinValue()} - Max: ${getMaxValue()}`}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Button variant="contained" onClick={handleSubmit} sx={{ marginTop: '4px', px: 4, py: 1, width: '100%' }}>
            Submit
          </Button>
        </Grid>
      </Grid>
      <Grid container rowSpacing={1} columnSpacing={1} sx={{ mt: 2 }}></Grid>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000} // Adjust as needed
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{
          vertical: 'top', // Place Snackbar at the top
          horizontal: 'center' // Center horizontally
        }}
      >
        <MuiAlert elevation={6} variant="filled" onClose={() => setOpenSnackbar(false)} severity={snackbarSeverity}>
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </Box>
  );
};

export default SetDailyIncome;
