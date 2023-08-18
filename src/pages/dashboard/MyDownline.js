import React, { useEffect, useState } from 'react';
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
  Paper,
  Pagination
} from '@material-ui/core';

import { useDispatch, useSelector } from '../../redux/store';
import { getDownline, getRefBonus } from '../../redux/slices/user';
import Scrollbar from '../../components/Scrollbar';

export default function MyDownLine() {
  const dispatch = useDispatch();
  const { downLineData } = useSelector((state) => state.user);

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [searchMemberId, setSearchMemberId] = useState('');

  useEffect(() => {
    const values = {
      incomeType: 'DIRECT BONUS'
    };
    dispatch(getRefBonus(values));
    dispatch(getDownline());
  }, [dispatch]);

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
  const downlineApisData = downLineData;

  const filteredData = downlineApisData?.filter((row) =>
    row?.member_user_id.toLowerCase().includes(searchMemberId.toLowerCase())
  );

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  console.log(filteredData, 'ertyuiodfghjkl;');
  return (
    <Card>
      <CardHeader title="My Downline" sx={{ mb: 3 }} />
      <Scrollbar>
        <Box sx={{ m: 2 }}>
          <Box width={250} m={1} display="flex" justifyContent="flex-end">
            <TextField
              label="Search by Member ID"
              fullWidth
              value={searchMemberId}
              onChange={(e) => setSearchMemberId(e.target.value)}
            />
          </Box>
        </Box>
        <TableContainer component={Paper} sx={{ minWidth: 720 }}>
          <Table>
            <TableHead>
              {' '}
              <TableRow>
                <TableCell sx={{ minWidth: 120 }}>No.</TableCell>
                <TableCell sx={{ minWidth: 160 }}>Associate Id </TableCell>

                <TableCell sx={{ minWidth: 160 }}>Promoter Id</TableCell>

                <TableCell sx={{ minWidth: 200 }}>Position</TableCell>
                <TableCell sx={{ minWidth: 120 }}>Reg. Date</TableCell>
                <TableCell sx={{ minWidth: 160 }}>Package</TableCell>

                <TableCell sx={{ minWidth: 120 }}>Status</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData?.slice(startIndex, endIndex).map((row, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Typography variant="subtitle2">{index + 1}</Typography>
                  </TableCell>

                  <TableCell> {row?.member_user_id} </TableCell>

                  <TableCell>{row?.promoter_id}</TableCell>

                  <TableCell sx={{ textTransform: 'capitalize' }}>{row?.position}</TableCell>
                  <TableCell sx={{ textTransform: 'capitalize' }}>{formatDate(row?.registration_date)}</TableCell>
                  <TableCell sx={{ textTransform: 'capitalize' }}>{row?.investment_busd}</TableCell>
                  <TableCell sx={{ textTransform: 'capitalize' }}>
                    {row?.status === 1 ? (
                      <Box color="green" fontWeight={500}>
                        {' '}
                        Active{' '}
                      </Box>
                    ) : (
                      <Box color="red"> Inactive </Box>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ my: 2, display: 'flex', justifyContent: 'center' }}>
          <Pagination
            count={Math.ceil(filteredData?.length / rowsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
          />
        </Box>
      </Scrollbar>
      <Divider />
    </Card>
  );
}
