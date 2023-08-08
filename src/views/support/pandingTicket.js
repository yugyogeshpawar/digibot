import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { getWithdrawConfi } from '../../redux/admin';
import { format } from 'date-fns';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';

export default function PandingTicket() {
  const [rows, setRows] = useState([]);
  const [openReplyDialog, setOpenReplyDialog] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [replyText, setReplyText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await getWithdrawConfi();
      if (Array.isArray(res?.data)) {
        const mappedData = res.data.map((item, index) => ({
          id: index + 1,
          member_user_id: item.member_user_id,
          member_name: item.member_name,
          contact: item.contact,
          wallet_address: item.wallet_address,
          with_referrance: item.with_referrance,
          with_amt: item.with_amt,
          with_date: format(new Date(item.with_date), 'dd-MM-yyyy')
        }));
        setRows(mappedData);
      }
    };

    fetchData();
  }, []);

  const handleOpenReplyDialog = (userId) => {
    setSelectedUserId(userId);
    setOpenReplyDialog(true);
  };

  const handleCloseReplyDialog = () => {
    setOpenReplyDialog(false);
    setReplyText('');
  };

  const handleReplySubmit = () => {
    // Handle reply submit logic here using selectedUserId and replyText
    // ...

    // Close the dialog
    console.log(selectedUserId);
    handleCloseReplyDialog();
  };
  const columns = [
    { field: 'id', headerName: 'No.', width: 50 },
    {
      field: 'member_user_id',
      headerName: 'Ticket type',
      width: 150,
      editable: true
    },
    {
      field: 't_member_name',
      headerName: 'Mamber name',
      width: 150,
      editable: true
    },

    {
      field: 't_discription',
      headerName: 'Discription',
      sortable: false,
      width: 160
    },

    {
      field: 't_date',
      headerName: 'Ticket Date',
      sortable: false,
      width: 160
    },
    {
      field: 'action',
      headerName: 'Reply button',
      sortable: false,
      width: 120,
      renderCell: (params) => (
        <Button variant="contained" color="primary" onClick={() => handleOpenReplyDialog(params.row.member_user_id)}>
          Reply User
        </Button>
      )
    }
  ];

  return (
    <div style={{ height: '80vh', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        components={{ Toolbar: GridToolbar }}
        autoPageSize
        showToolbar
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 }
          }
        }}
        sx={{ background: '#fff', padding: 2, borderRadius: 4 }}
      />
      <Dialog open={openReplyDialog} onClose={handleCloseReplyDialog}>
        <DialogTitle>Reply User</DialogTitle>
        <DialogContent>
          <DialogContentText>Write your reply below:</DialogContentText>
          <TextField multiline rows={5} fullWidth variant="outlined" value={replyText} onChange={(e) => setReplyText(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseReplyDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleReplySubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
