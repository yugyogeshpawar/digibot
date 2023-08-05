import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { getmonthlyBonus } from '../../redux/admin';

export default function Monthly() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch data from the API
      const res = await getmonthlyBonus(); // Replace with your API call
      if (Array.isArray(res?.results)) {
        const mappedData = res.results.map((item, index) => ({
          id: index + 1,
          member_user_id: item.member_user_id,
          walletAddress: item.walletAddress,
          invest_type: item.income_type,
          topup_amount: item.income_amt
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
      width: 150,
      editable: true
    },
    {
      field: 'invest_type',
      headerName: 'Income Type',
      sortable: false,
      width: 160
    },

    {
      field: 'topup_amount',
      headerName: 'Monthly Income',
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
