import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { getActiveUsers } from '../../redux/admin';
import { getSearchDashboard } from '../../redux/admin';
import { setSession } from '../../utils/jwt';

export default function ActiveUsers() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch data from the API
      const res = await getActiveUsers(); // Replace with your API call
      if (Array.isArray(res?.data)) {
        const mappedData = res.data.map((item, index) => ({
          id: index + 1,
          member_user_id: item.member_user_id,
          member_name: item.member_name,
          Sponcer: item.sponcer_id,
          Sponcer_name: item.sponcer_name,
          email: item.email,
          contact: item.contact,
          r_date: item.registration_date,
          topup_amount: item.topup_amount
        }));
        setRows(mappedData);
      }
    };

    fetchData();
  }, []);

  const handleDashboard = async (userID) => {
    if (!userID) {
      console.error('User ID is empty or undefined.');
      return;
    }
    const res = await getSearchDashboard(userID);
    setSession(res.token);
    window.open(`http://app.digibot.trade/digibotuapp/adminlogin?token=${res.token}`);
  };

  const columns = [
    { field: 'id', headerName: 'No.', width: 90 },

    {
      field: 'member_user_id',
      headerName: 'Member User Id',
      width: 150,
      editable: false
    },
    {
      field: 'member_name',
      headerName: 'Member Name',
      sortable: false,
      width: 160
    },
    {
      field: 'Sponcer',
      headerName: 'Sponcer ID',
      sortable: false,
      width: 160
    },
    {
      field: 'Sponcer_name',
      headerName: 'Sponcer Name',
      sortable: false,
      width: 160
    },
    {
      field: 'email',
      headerName: 'Email',
      sortable: false,
      width: 160
    },
    {
      field: 'contact',
      headerName: 'Contact',
      sortable: false,
      width: 160
    },
    {
      field: 'r_date',
      headerName: 'Registration Date',
      sortable: false,
      width: 160
    },
    {
      field: 'topup_amount',
      headerName: 'Topup Amount',
      sortable: false,
      width: 160
    },
    {
      field: 'action',
      headerName: 'Action',
      sortable: false,
      width: 120,
      renderCell: (params) => (
        <Button variant="contained" color="primary" onClick={() => handleDashboard(params.row.member_user_id)}>
          Show ID
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
    </div>
  );
}
