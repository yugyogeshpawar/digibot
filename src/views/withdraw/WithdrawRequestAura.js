import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { getAuraWithdraw, postAuraActiveIDamt } from '../../redux/admin';
import { format } from 'date-fns';
import { Alert, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar } from '@mui/material';

export default function AuraInvestment() {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarStatus, setSnackbarStatus] = useState('success');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
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
        setLoading(false);
      } catch (error) {
        setError(error.message || 'An error occurred while fetching data.');
        setLoading(false);
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
   const handleSnackbarClose = (event, reason) => {
     if (reason === 'clickaway') {
       return;
     }
     setSnackbarOpen(false);
   };

  const handleConfirm = async () => {
    console.log(`Approving user with ID ${selectedRow.with_referrance}`);
    try {
      const res = await postAuraActiveIDamt(selectedRow.with_referrance);
      console.log(res);
      if (res.status === 200) {
        setSnackbarStatus('success');
        handleClose();
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        setSnackbarStatus('error');
      }
    } catch (error) {
      setSnackbarStatus('error');
    }
    setOpen(false);
    setSnackbarOpen(true);
  };

  const columns = [
    { field: 'id', headerName: 'No.', width: 50 },
    {
      field: 'member_user_id',
      headerName: 'Member User Id',
      width: 150,
      editable: true
    },
    {
      field: 'member_name',
      headerName: 'Member Name',
      width: 150,
      editable: true
    },
    {
      field: 'with_referrance',
      headerName: 'With Reference',
      sortable: false,
      width: 160
    },
    {
      field: 'with_amt',
      headerName: 'Withdraw Amount',
      sortable: false,
      width: 160
    },
    {
      field: 'with_date',
      headerName: 'Withdraw Date',
      sortable: false,
      width: 160
    },
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

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

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
