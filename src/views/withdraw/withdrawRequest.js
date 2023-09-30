import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { getWithdrawReqSummary } from '../../redux/admin';
import { format } from 'date-fns';
import FileCopyIcon from '@mui/icons-material/FileCopy'; // Import the copy icon

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
          wallet_address: item.wallet_address,
          wallet_address_partial: `${item.wallet_address.substring(0, 6)}...${item.wallet_address.substring(
            item.wallet_address.length - 6
          )}`,
          with_referrance: item.with_type,
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
      field: 'wallet_address_partial',
      headerName: 'Wallet Address',
      sortable: false,
      width: 200,
      renderCell: (params) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {params.value}
          <button
            onClick={() => copyToClipboard(params.row.wallet_address)}
            style={{ marginLeft: '10px', background: 'transparent', border: 'none', cursor: 'pointer' }}
          >
            <FileCopyIcon color="primary" /> {/* Use the copy icon */}
          </button>
        </div>
      )
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

  function copyToClipboard(text) {
    // Create a temporary input element to copy the text
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);

    // Select the text in the input element
    input.select();
    input.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text to the clipboard
    document.execCommand('copy');

    // Remove the temporary input element
    document.body.removeChild(input);

    // Optionally, provide some feedback to the user
    alert('Wallet Address copied to clipboard: ' + text);
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
    </div>
  );
}
