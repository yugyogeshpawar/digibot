import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { getInactiveUsers } from '../../redux/admin';
import { format } from 'date-fns';

export default function InactiveUsers() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch data from the API
      const res = await getInactiveUsers(); // Replace with your API call
      if (Array.isArray(res?.data)) {
        const mappedData = res.data.map((item, index) => ({
          id: index + 1,
          member_user_id: item.member_user_id,
          member_name: item.member_name,
          Sponcer: item.sponcer_id,
          Sponcer_name: item.sponcer_name,
          contact: item.contact,
          email: item.email,
          r_date: format(new Date(item.registration_date), 'dd-MM-yyyy hh-mm-ss'),
          wallet_amount: item.wallet_amount
        }));
        setRows(mappedData);
      }
    };

    fetchData();
  }, []);

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
      field: 'contact',
      headerName: 'Contact',
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
      field: 'r_date',
      headerName: 'Registration Date',
      sortable: false,
      width: 160
    },
    {
      field: 'wallet_amount',
      headerName: 'Wallet Amount',
      sortable: false,
      width: 160
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
