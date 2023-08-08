import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

export default function ReplyTicket() {
  const [rows, setRows] = useState([]); // Initialize state for your rows

  // Example useEffect usage
  useEffect(() => {
    // Fetch your data and update the state using setRows
    // For example:
    fetch('your_api_endpoint_here')
      .then((response) => response.json())
      .then((data) => setRows(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  const columns = [
    { field: 'id', headerName: 'No.', width: 50 },
    {
      field: 't_type',
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
      headerName: 'Response',
      sortable: false,
      width: 160
    },

    {
      field: 't_date',
      headerName: 'Response Date',
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
