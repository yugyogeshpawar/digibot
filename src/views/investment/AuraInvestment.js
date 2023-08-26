import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { getAuraWithdraw, postAuraActiveID } from '../../redux/admin';
import { format } from 'date-fns';
import { Button } from '@mui/material'; // Import Button component

export default function AuraInvestment() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch data from the API
      const res = await getAuraWithdraw(); // Replace with your API call
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

  const columns = [
    { field: 'id', headerName: 'No.', width: 50 },
    {
      field: 'member_user_id',
      headerName: 'Member User Id',
      width: 120,
      editable: true
    },
    {
      field: 'with_referrance',
      headerName: 'With Reference',
      sortable: false,
      width: 130
    },
    {
      field: 'with_amt',
      headerName: 'Invest Amount',
      sortable: false,
      width: 120
    },
    {
      field: 'with_date',
      headerName: 'Invest Date',
      sortable: false,
      width: 130
    },
    {
      field: 'approve',
      headerName: 'Approve button',
      sortable: false,
      width: 120,
      renderCell: (params) => (
        <Button variant="contained" color="primary" onClick={() => handleApprove(params.row.with_referrance)}>
          Approve User
        </Button>
      )
    }
  ];

  const handleApprove = async (ref) => {
    console.log(`Approving user with ID ${ref}`);
    await postAuraActiveID(ref);
  };

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
