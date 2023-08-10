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
  Pagination
  // eslint-disable-next-line import/no-unresolved
} from '@material-ui/core';
import format from 'date-fns/format';
import { useDispatch, useSelector } from '../../redux/store';
import { directMember } from '../../redux/slices/user';
import Scrollbar from '../../components/Scrollbar';

export default function MyDirect() {
  const dispatch = useDispatch();
  const { directM } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(directMember());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchMemberId, setSearchMemberId] = useState('');

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const filteredData = directM?.filter((row) => row?.member_user_id.includes(searchMemberId));

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData?.slice(indexOfFirstItem, indexOfLastItem);

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
      <CardHeader title="My Direct" sx={{ mb: 3 }} />
      <Scrollbar>
        <Box m={1}>
          <TextField
            label="Search by Member ID"
            variant="outlined"
            margin="normal"
            value={searchMemberId}
            onChange={(e) => setSearchMemberId(e.target.value)}
          />
        </Box>
        <TableContainer eContainer sx={{ minWidth: 720 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ minWidth: 120 }}>No.</TableCell>
                <TableCell sx={{ minWidth: 160 }}>Member Id</TableCell>
                <TableCell sx={{ minWidth: 160 }}>Reg. Date</TableCell>
                <TableCell sx={{ minWidth: 200 }}>Position</TableCell>
                <TableCell sx={{ minWidth: 120 }}>Package</TableCell>
                <TableCell sx={{ minWidth: 120 }}>Status</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {currentItems?.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7}>
                    <Box m={4} display="flex" justifyContent="center" alignItems="center" sx={{ width: 'fit-content' }}>
                      <Typography variant="h6">No Data Found</Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              ) : (
                <>
                  {currentItems?.map((row, ind) => (
                    <TableRow key={ind}>
                      <TableCell>
                        <Typography variant="subtitle2">{ind + 1}</Typography>
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
        <Box mt={2} display="flex" justifyContent="center">
          <Pagination
            count={Math.ceil(filteredData?.length / itemsPerPage)}
            page={currentPage}
            onChange={handleChangePage}
          />
        </Box>
      </Scrollbar>
      <Divider />
    </Card>
  );
}
