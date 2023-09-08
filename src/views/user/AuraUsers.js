// import * as React from 'react';
// import { useEffect, useState } from 'react';
// import { DataGrid, GridToolbar } from '@mui/x-data-grid';
// import { getAuraUsers } from '../../redux/admin';
// import { format } from 'date-fns';

// export default function ActiveUsers() {
//   const [rows, setRows] = useState([]);

//   const fetchData = async () => {
//     try {
//       // Fetch data from the API
//       const res = await getAuraUsers(); // Replace with your API call
//       // console.log(res);
//       if (Array.isArray(res)) {
//         const mappedData = res.map((item, index) => ({
//           id: index + 1,
//           member_user_id: item.member_user_id,
//           member_name: item.member_name,
//           Sponcer: item.sponcer_id,
//           Sponcer_name: item.sponcer_name,
//           position: item.position,
//           r_date: format(new Date(item.registration_date), 'dd-MM-yyyy hh-mm-ss'),
//           topup_amount: item.topup_amount,
//           email: item.email,
//           contact: item.contact
//         }));
//         setRows(mappedData);
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };
//   useEffect(() => {
//     // This code runs when the component is mounted
//     fetchData();
//   }, []);

//   useEffect(() => {
//     // Set up an event listener to detect when the page becomes visible
//     const handleVisibilityChange = () => {
//       if (!document.hidden) {
//         // Page is visible, fetch data and refresh
//         fetchData();
//         window.location.reload();
//       }
//     };

//     document.addEventListener('visibilitychange', handleVisibilityChange);

//     // Cleanup the event listener when the component unmounts
//     // return () => {
//     //   document.removeEventListener('visibilitychange', handleVisibilityChange);
//     // };
//   }, []);

//   const columns = [
//     { field: 'id', headerName: 'No.', width: 90 },

//     {
//       field: 'member_user_id',
//       headerName: 'Member User Id',
//       width: 150,
//       editable: false
//     },
//     {
//       field: 'member_name',
//       headerName: 'Member Name',
//       sortable: false,
//       width: 160
//     },
//     {
//       field: 'Sponcer',
//       headerName: 'Sponcer ID',
//       sortable: false,
//       width: 160
//     },
//     {
//       field: 'Sponcer_name',
//       headerName: 'Sponcer Name',
//       sortable: false,
//       width: 160
//     },

//     {
//       field: 'r_date',
//       headerName: 'Registration Date',
//       sortable: false,
//       width: 160
//     },
//     {
//       field: 'topup_amount',
//       headerName: 'Topup Amount',
//       sortable: false,
//       width: 160
//     },
//     {
//       field: 'email',
//       headerName: 'Email',
//       sortable: false,
//       width: 160
//     },
//     {
//       field: 'contact',
//       headerName: 'Contact',
//       sortable: false,
//       width: 160
//     }
//   ];

//   return (
//     <div style={{ height: '80vh', width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         components={{ Toolbar: GridToolbar }}
//         autoPageSize
//         showToolbar
//         slotProps={{
//           toolbar: {
//             showQuickFilter: true,
//             quickFilterProps: { debounceMs: 500 }
//           }
//         }}
//         sx={{ background: '#fff', padding: 2, borderRadius: 4 }}
//       />
//     </div>
//   );
// }

import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { getAuraUsers } from '../../redux/admin';
import { format } from 'date-fns';

export default function ActiveUsers() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      // Fetch data from the API
      const res = await getAuraUsers();
      console.log(res, 'res');
      if (Array.isArray(res)) {
        const mappedData = res.map((item, index) => ({
          id: index + 1,
          member_user_id: item.member_user_id,
          member_name: item.member_name,
          Sponcer: item.sponcer_id,
          Sponcer_name: item.sponcer_name,
          position: item.position,
          r_date: format(new Date(item.registration_date), 'dd-MM-yyyy hh-mm-ss'),
          topup_amount: item.topup_amount,
          email: item.email,
          contact: item.contact
        }));
        setRows(mappedData);
        setLoading(false); // Set loading to false when data is loaded
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false); // Set loading to false in case of an error
    }
  };

  useEffect(() => {
    // This code runs when the component is mounted
    fetchData();
  }, []);

  useEffect(() => {
    // Set up an event listener to detect when the page becomes visible
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        // Page is visible, fetch data and refresh only if not already loading
        if (!loading) {
          fetchData();
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [loading]); // Add loading as a dependency

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
    }
  ];

  if (loading) {
    return <div>Loading...</div>;
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
