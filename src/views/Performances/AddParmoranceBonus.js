import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Grid, Box, Typography } from '@mui/material';
import { format } from 'date-fns';
import { getSearch, Postaddparfromance } from '../../redux/admin';

const AddParmoranceBonus = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [userID, setUserID] = useState('');
  const [invA, setInva] = useState('');
  const [value, setValue] = React.useState('');
  const [searchError, setSearchError] = useState('');
  const [addPerformances, setAddParfromances] = useState('');
  //   const [error, setError] = useState({
  //     dashboardError: '',
  //     blockError: '',
  //     unBlockError: ''
  //   });
  //   const [showDetails, setShowDetails] = useState(false);
  useEffect(() => {
    console.log(value);
  }, [value]);

  const addBonus = async (botId, bonusAmount) => {
    try {
      const payload = {
        Parformance: bonusAmount
      };

      const response = await Postaddparfromance(botId, payload);

      if (response.status === 200) {
        console.log('Bonus added successfully:', response.data);
      } else {
        console.error('Failed to add bonus:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error adding bonus:', error);
    }
  };

  const handleSearch = async () => {
    if (searchQuery.trim() === '') {
      setSearchError('Please enter a search query.');
      return;
    }

    console.log('Searching for:', searchQuery);
    const res = await getSearch(searchQuery);
    console.log(res);
    setUserID(res.data[0].member_user_id);
    setWalletadd(res.data[0].wallet_address);
    console.log(new Date(res.data[0].registration_date));
    setInva(res.data[0].topup_amount);
    setValue(format(new Date(res.data[0].activation_date), 'dd-MM-yyyy'));

    setShowDetails(true);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
    setSearchError('');
  };

  const handleUserQueryChange = (event) => {
    setUserID(event.target.value);
  };
  const handleWalletQueryChange = (event) => {
    setWalletadd(event.target.value);
  };

  const handleInvQueryChange = (event) => {
    setInva(event.target.value);
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{ display: 'flex', flexDirection: 'column', background: 'white', width: '100%', p: 4, borderRadius: '20px', height: '100%' }}
    >
      <Typography variant="h2" sx={{ mb: 3 }}>
        Add User Performance
      </Typography>
      <Grid container sx={{ mb: 2 }} rowSpacing={1} columnSpacing={1}>
        <Grid item xs={12} md={6}>
          <TextField
            label="UserId"
            variant="outlined"
            value={searchQuery}
            onChange={handleSearchQueryChange}
            error={searchError !== ''}
            helperText={searchError}
            style={{ marginRight: '1rem', width: '100%' }}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Button variant="contained" onClick={handleSearch} sx={{ marginTop: '4px', px: 4, py: 1, width: '100%' }}>
            Submit
          </Button>
        </Grid>
      </Grid>

      <>
        <Typography variant="h3" sx={{ mb: 3, mt: 5 }}>
          Member Information
        </Typography>
        <Grid container sx={{ mb: 2 }} rowSpacing={1} columnSpacing={1}>
          <Grid item xs={12} md={3}>
            <TextField
              label="User ID"
              variant="outlined"
              value={userID}
              onChange={handleUserQueryChange}
              style={{ marginRight: '1rem', width: '100%' }}
              InputProps={{
                readOnly: true
              }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              label="Investment Amt  "
              variant="outlined"
              value={invA}
              onChange={handleInvQueryChange}
              sx={{ marginRight: '1rem', width: '100%' }}
              InputProps={{
                readOnly: true
              }}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              label="Registration Date"
              variant="outlined"
              value={value}
              onChange={handleWalletQueryChange}
              sx={{ marginRight: '1rem', width: '100%' }}
              InputProps={{
                readOnly: true
              }}
            />
          </Grid>
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={1}></Grid>
        <Grid container rowSpacing={1} columnSpacing={1} sx={{ mt: 2 }}>
          <Grid item xs={12} md={3} sx={{ px: 3 }}></Grid>
        </Grid>
        <Grid container sx={{ mb: 2 }} rowSpacing={1} columnSpacing={1}>
          <Grid item xs={12} md={3}>
            <TextField
              label="Add Performance Amt"
              variant="outlined"
              error={searchError !== ''}
              helperText={searchError}
              style={{ marginRight: '1rem', width: '100%' }}
              value={addPerformances}
              onChange={(e) => setAddParfromances(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Button variant="contained" onClick={addBonus} sx={{ marginTop: '4px', px: 4, py: 1, width: '100%' }}>
              Add
            </Button>
          </Grid>
        </Grid>
      </>
    </Box>
  );
};

export default AddParmoranceBonus;
