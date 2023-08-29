import React, { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';
import { getAuraWithdraw, postAuraActiveID } from '../../redux/admin';
import { format } from 'date-fns';

export default function AuraInvestment() {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarStatus, setSnackbarStatus] = useState('success');

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAuraWithdraw();
      if (Array.isArray(res)) {
        const mappedData = res.map((item, index) => ({
          id: index + 1,
          member_user_id: item.member_user_id,
          member_name: item.member_name,
          with_referrance: item.hash_code,
          with_amt: item.gusdAmt,
          with_date: format(new Date(item.tr_date), 'dd-MM-yyyy')
        }));

        setRows(mappedData);
      }
    };

    fetchData();
  }, []);

  const handleOpen = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = async () => {
    console.log(`Approving user with ID ${selectedRow.with_referrance}`);
    try {
      const res = await postAuraActiveID(selectedRow.with_referrance);
      console.log(res);
      if (res.status === 200) {
        setSnackbarStatus('success');
      } else {
        setSnackbarStatus('error');
      }
    } catch (error) {
      setSnackbarStatus('error');
    }
    setOpen(false);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const columns = [
    { field: 'id', headerName: 'No.', width: 50 },
    { field: 'member_user_id', headerName: 'Member User Id', width: 120, editable: true },
    { field: 'with_referrance', headerName: 'With Reference', sortable: false, width: 130 },
    { field: 'with_amt', headerName: 'Invest Amount', sortable: false, width: 120 },
    { field: 'with_date', headerName: 'Invest Date', sortable: false, width: 130 },
    {
      field: 'approve',
      headerName: 'Approve button',
      sortable: false,
      width: 120,
      renderCell: (params) => (
        <Button variant="contained" color="primary" onClick={() => handleOpen(params.row)}>
          Approve User
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
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure you want to approve the user with reference {selectedRow?.with_referrance}?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirm} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={snackbarStatus} elevation={6} variant="filled">
          {snackbarStatus === 'success' ? 'User approved successfully' : 'Failed to approve user'}
        </Alert>
      </Snackbar>
    </div>
  );
}
