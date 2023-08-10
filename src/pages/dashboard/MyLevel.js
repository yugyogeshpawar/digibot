import React, { useState, useEffect } from 'react';
import {
  Card,
  Table,
  CardHeader,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  Typography,
  TableContainer,
  Divider,
  Box,
  TextField,
  Pagination
} from '@material-ui/core';

import { useDispatch, useSelector } from '../../redux/store';
import { directMember } from '../../redux/slices/user';
import Scrollbar from '../../components/Scrollbar';

export default function MyLevel() {
  const dispatch = useDispatch();
  const { directM } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(directMember());
  }, [dispatch]);

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const filteredRefArr = directM?.filter((row) => row.member_user_id.toLowerCase().includes(searchQuery.toLowerCase()));

  const totalPages = Math.ceil(filteredRefArr?.length / rowsPerPage);

  const paginatedData = filteredRefArr?.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  function formatDate(inputDate) {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    const parsedDate = new Date(inputDate);
    const day = parsedDate.getDate();
    const month = monthNames[parsedDate.getMonth()];
    const year = parsedDate.getFullYear();

    const formattedDate = `${day} ${month} ${year}`;
    return formattedDate;
  }
  return (
    <Card>
      <CardHeader title="My Level" sx={{ mb: 3 }} />

      <Box p={2} display="flex" justifyContent="flex-end">
        <TextField
          label="Search"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Box>

      <Scrollbar>
        <TableContainer eContainer sx={{ minWidth: 720 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ minWidth: 120 }}>No.</TableCell>
                <TableCell sx={{ minWidth: 160 }}>Member Id</TableCell>
                <TableCell sx={{ minWidth: 160 }}>Sponser Id </TableCell>
                <TableCell sx={{ minWidth: 160 }}>Reg. Date</TableCell>
                <TableCell sx={{ minWidth: 120 }}>Package</TableCell>

                <TableCell sx={{ minWidth: 120 }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData?.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    <Typography variant="h6">No Data Found</Typography>
                  </TableCell>
                </TableRow>
              ) : (
                <>
                  {paginatedData?.map((row, ind) => (
                    <TableRow key={ind}>
                      <TableCell>
                        <Typography variant="subtitle2">{(currentPage - 1) * rowsPerPage + ind + 1}</Typography>
                      </TableCell>
                      <TableCell>{row?.member_user_id}</TableCell>
                      <TableCell sx={{ textTransform: 'capitalize' }}>{formatDate(row?.registration_date)}</TableCell>

                      <TableCell sx={{ textTransform: 'capitalize' }}>{row?.position}</TableCell>
                      <TableCell sx={{ textTransform: 'capitalize' }}>{row?.investment_busd}</TableCell>
                      <TableCell sx={{ textTransform: 'capitalize' }}>
                        {row?.status === 1 ? <Box color="green"> Active </Box> : <Box color="red"> Inactive </Box>}
                      </TableCell>
                    </TableRow>
                  ))}
                </>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbar>

      <Box p={2} display="flex" justifyContent="center">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(event, newPage) => handlePageChange(newPage)}
          color="primary"
        />
      </Box>

      <Divider />
    </Card>
  );
}
