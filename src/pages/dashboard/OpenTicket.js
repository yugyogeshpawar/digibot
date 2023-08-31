/* eslint-disable react/jsx-key */
import { useState } from 'react';
import { Button, Typography, TextField, Grid, Card, CardContent, CardHeader } from '@material-ui/core';

// ----------------------------------------------------------------------

export default function OpenTicket() {
  const [userReply, setUserReply] = useState('');

  const handleReplyChange = (event) => {
    setUserReply(event.target.value);
  };

  const handleReplySubmit = () => {
    // Add the user's reply to the ticket's replies and clear the reply field
    console.log(userReply);
    setTicket((prevTicket) => ({
      ...prevTicket,
      replies: [
        ...prevTicket.replies,
        {
          message: userReply,
          timestamp: new Date().toISOString(), // Use the current date and time as the timestamp
          userType: 'user'
        }
      ]
    }));
    setUserReply('');
  };

  // Dummy data for the ticket and replies
  const [ticket, setTicket] = useState({
    category: 'Technical',
    issue: 'I am having trouble logging in.',
    timestamp: '2023-08-07 12:34:56',
    replies: [
      {
        message: 'Yes, I have tried resetting my password, but I am still unable to log in.',
        timestamp: '2023-08-07 13:00',
        userType: 'user'
      },
      {
        message:
          'Have you tried resetting your password? <a href="https://www.example.com/reset-password">Reset Password</a>',
        timestamp: '2023-08-07 13:45',
        userType: 'support'
      },
      {
        message: "I tried resetting my password again, but it still didn't work.",
        timestamp: '2023-08-07 14:00',
        userType: 'user'
      },
      {
        message:
          'If you\'re still having trouble, you can contact our support team directly at <a href="mailto:support@example.com">support@example.com</a>.',
        timestamp: '2023-08-07 14:56',
        userType: 'support'
      }
    ]
  });

  if (!ticket) {
    return <Typography variant="h4">You haven't raised any tickets yet.</Typography>;
  }

  return (
    <Grid container spacing={2} p={1}>
      <Grid item xs={12}>
        <Typography variant="h3">Your Ticket</Typography>
      </Grid>
      <Grid item xs={12} sx={{ mb: 1 }} md={8}>
        <Card sx={{ pb: 2 }}>
          <CardHeader
            title={
              <Typography variant="h6" component="div">
                {ticket.issue}
              </Typography>
            }
            subheader={
              <Typography variant="body2" color="text.secondary">
                Category: {ticket.category}
              </Typography>
            }
          />
          <Typography variant="body2" style={{ position: 'absolute', top: 10, right: 10, fontSize: '0.8rem' }}>
            {ticket.timestamp}
          </Typography>
        </Card>
      </Grid>

      {ticket.replies.map((reply) => (
        <Grid
          container
          justifyContent={reply.userType === 'user' ? 'flex-end' : 'flex-start'}
          sx={{ mt: 1 }}
          xs={12}
          md={8}
          pl={2}
        >
          <Grid item xs={6}>
            <Card>
              <CardHeader
                sx={{ pl: { xs: '10px', sm: '14px' } }}
                title={reply.userType === 'user' ? 'User' : 'Support Team'}
              />
              <CardContent sx={{ px: { xs: '10px', sm: '14px' }, py: { xs: '6px', sm: '14px' } }}>
                <Typography variant="caption2" dangerouslySetInnerHTML={{ __html: reply.message }} />
                <Typography variant="body2" style={{ position: 'absolute', top: 10, right: 10, fontSize: '0.8rem' }}>
                  {reply.timestamp}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ))}

      <Grid item xs={12} md={6} mdOffset={6} sx={{ px: { xs: 1, sm: 2 } }}>
        <TextField fullWidth label="Your Reply" multiline rows={4} value={userReply} onChange={handleReplyChange} />
      </Grid>

      <Grid item xs={12} mdOffset={6} sx={{ px: { xs: 1, sm: 2 } }}>
        <Button size="large" variant="contained" onClick={handleReplySubmit}>
          Submit Reply
        </Button>
      </Grid>
    </Grid>
  );
}
