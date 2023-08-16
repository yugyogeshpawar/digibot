import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card,
  Table,
  CardHeader,
  Stack,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  Typography,
  TableContainer,
  Divider,
  Box,
  TablePagination,
  TextField
} from '@material-ui/core';

import format from 'date-fns/format';
import { getRefBonus } from '../../redux/slices/user';
import Scrollbar from '../../components/Scrollbar';

export default function ReferralList() {
  const dispatch = useDispatch();
  const { refbonus } = useSelector((state) => state.user);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const values = {
      incomeType: 'PASSIVE BONUS'
    };
    dispatch(getRefBonus(values));
  }, [dispatch]);

  const refarr = refbonus?.passive || [];

  const filteredRefarr = refarr?.filter(
    (row) =>
      row?.calculate_date.includes(searchTerm) ||
      row?.income_amt.includes(searchTerm) ||
      row?.Bonus_percent.includes(searchTerm)
  );

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, filteredRefarr?.length - page * rowsPerPage);

  const handlePageChange = (_, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
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
      <CardHeader title="Passive Bonus" sx={{ mb: 3 }} />
      <Box>
        <Box width={250} m={1} display="flex" justifyContent="flex-end">
          <TextField
            label="Search"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ m: 2 }}
          />
        </Box>
      </Box>

      <Scrollbar>
        <TableContainer sx={{ minWidth: 720 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ minWidth: 120 }}>No.</TableCell>
                <TableCell sx={{ minWidth: 120 }}>Date</TableCell>
                <TableCell sx={{ minWidth: 120 }}>Passive Bonus</TableCell>
                <TableCell sx={{ minWidth: 120 }}>From User</TableCell>
                <TableCell sx={{ minWidth: 120 }}>Level</TableCell>
                <TableCell sx={{ minWidth: 120 }}>Percentage ( % ) </TableCell>
              </TableRow>
            </TableHead>
            {filteredRefarr?.length === 0 ? (
              <Box m={4} display="flex" justifyContent="center" alignItems="center" sx={{ width: 'fit-content' }}>
                <Typography variant="h6">No Data Found</Typography>
              </Box>
            ) : (
              <TableBody>
                {(rowsPerPage > 0
                  ? filteredRefarr?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : filteredRefarr
                )?.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Typography variant="subtitle2">{index + 1}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>{formatDate(row?.calculate_date)}</TableCell>
                    <TableCell>{row?.income_amt} $</TableCell>
                    <TableCell>{row?.income_member_id} </TableCell>
                    <TableCell>{row?.income_level} </TableCell>
                    <TableCell>{row?.Bonus_percent} % </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )}
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
          component="div"
          count={filteredRefarr?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      </Scrollbar>

      <Divider />
    </Card>
  );
}
