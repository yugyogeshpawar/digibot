import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Grid, Box, Typography, MenuItem } from '@mui/material';
import Select from '@mui/material/Select';
// import axios from 'axios';
import { putSetDailyIncome } from '../../redux/admin';

const SetDailyIncome = () => {
  const [value, setValue] = useState('');
  const [botType, setBotType] = useState('');

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
    if (botType === 'flexibleBot') return 0.1;
    if (botType === 'flexibleProBot') return 0.2;
    if (botType === 'mediumBot') return 0.3;
    if (botType === 'premiumBot') return 0.4;
    return 0;
  };

  const getMaxValue = () => {
    if (botType === 'flexibleBot') return 0.5;
    if (botType === 'flexibleProBot') return 0.7;
    if (botType === 'mediumBot') return 0.8;
    if (botType === 'premiumBot') return 0.9;
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
    } catch (error) {
      // Handle errors here
      console.error('Error updating data:', error);
    }
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{ display: 'flex', flexDirection: 'column', background: 'white', width: '100%', p: 4, borderRadius: '20px', height: '100%' }}
    >
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
    </Box>
  );
};

export default SetDailyIncome;
