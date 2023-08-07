// material
import { useState } from 'react';
import {
  Button,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Stack,
  InputLabel,
  TextField,
  Grid
} from '@material-ui/core';
import { varFadeInUp, MotionInView } from '../../components/animate';

// options for the dropdown menu
const options = [
  { value: 'technical', label: 'Technical' },
  { value: 'support', label: 'Support' },
  { value: 'joining', label: 'Member Joining' },
  { value: 'wallet', label: 'Wallet' },
  { value: 'payout', label: 'Payout' },
  { value: 'investment', label: 'Investment' },
  { value: 'other', label: 'Other' }
  // add more options as needed
];

// ----------------------------------------------------------------------

export default function ContactForm() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Grid>
      <Grid item xs={12} md={6}>
        <Stack spacing={5}>
          <MotionInView variants={varFadeInUp}>
            <Typography variant="h3">
              Need help? Create a ticket. <br />
              We're here to support you.
            </Typography>
          </MotionInView>

          <Stack spacing={3}>
            <MotionInView variants={varFadeInUp}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Select a category</InputLabel>
                <Select value={selectedOption} onChange={handleChange} label="Select a category">
                  {options.map((option, index) => (
                    <MenuItem key={index} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </MotionInView>

            <MotionInView variants={varFadeInUp}>
              <TextField fullWidth label="Describe your issue or question." multiline rows={4} />
            </MotionInView>
          </Stack>

          <MotionInView variants={varFadeInUp}>
            <Button size="large" variant="contained">
              Create Ticket
            </Button>
          </MotionInView>
        </Stack>
      </Grid>
    </Grid>
  );
}
