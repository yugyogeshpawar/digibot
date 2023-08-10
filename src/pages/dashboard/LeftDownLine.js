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
  Button,
  TablePagination
} from '@material-ui/core';

import format from 'date-fns/format';

import { useDispatch, useSelector } from '../../redux/store';
import { getMyDownLineData, getRefBonus } from '../../redux/slices/user';
import Scrollbar from '../../components/Scrollbar';

export default function LeftDownLine() {
  const dispatch = useDispatch();
  const { myDownLineData } = useSelector((state) => state.user);
  const [searchMemberId, setSearchMemberId] = useState('');

  useEffect(() => {
    dispatch(getMyDownLineData());
  }, [dispatch]);

  const downlineApisData = myDownLineData?.left || [];
  console.log(downlineApisData);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredData = downlineApisData?.filter((row) => row?.member_user_id.includes(searchMemberId));
  console.log(filteredData);
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
      <CardHeader title="My Left Downline" sx={{ mb: 3 }} />
      <Scrollbar>
        <Box sx={{ p: 2 }}>
          <Box width={250} m={1} display="flex" justifyContent="flex-end">
            <TextField
              label="Search by Member Id"
              value={searchMemberId}
              onChange={(e) => setSearchMemberId(e.target.value)}
              fullWidth
              margin="normal"
            />
          </Box>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ minWidth: 120 }}>No.</TableCell>
                  <TableCell sx={{ minWidth: 160 }}>Associate Id</TableCell>
                  <TableCell sx={{ minWidth: 160 }}>Promoter Id</TableCell>
                  <TableCell sx={{ minWidth: 200 }}>Position</TableCell>
                  <TableCell sx={{ minWidth: 120 }}>Reg. Date</TableCell>
                  <TableCell sx={{ minWidth: 160 }}>Package</TableCell>
                  <TableCell sx={{ minWidth: 120 }}>Status</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData.length === 0 ? (
                  <Box m={4} display="flex" justifyContent="center" alignItems="center" sx={{ width: 'fit-content' }}>
                    <Typography variant="h6">No Data Found</Typography>
                  </Box>
                ) : (
                  filteredData?.slice(startIndex, endIndex).map((row, ind) => (
                    <TableRow key={ind}>
                      <TableCell>
                        <Typography variant="subtitle2">{startIndex + ind + 1}</Typography>
                      </TableCell>
                      <TableCell>{row?.member_user_id}</TableCell>
                      <TableCell>{row?.position_parent}</TableCell>
                      <TableCell sx={{ textTransform: 'capitalize' }}>{row?.position}</TableCell>
                      <TableCell sx={{ textTransform: 'capitalize' }}>{formatDate(row?.registration_date)}</TableCell>
                      <TableCell sx={{ textTransform: 'capitalize' }}>{row?.investment_busd}</TableCell>
                      <TableCell sx={{ textTransform: 'capitalize' }}>
                        {row?.status === 1 ? (
                          <Box color="green" fontWeight={500}>
                            Active
                          </Box>
                        ) : (
                          <Box color="red">Inactive</Box>
                        )}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Divider />
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={filteredData?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Scrollbar>
    </Card>
  );
}
