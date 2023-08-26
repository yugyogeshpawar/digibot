import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { getWithdrawReqSummary } from '../../redux/admin';
import { format } from 'date-fns';
export default function InvestmentSummary() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch data from the API
      const res = await getWithdrawReqSummary(); // Replace with your API call
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
      field: 'wallet_address',
      headerName: 'Wallet Address',
      sortable: false,
      width: 250
    },
    {
      field: 'with_referrance',
      headerName: 'With Referrance',
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
