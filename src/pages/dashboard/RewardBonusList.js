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
  Pagination
} from '@material-ui/core';
import format from 'date-fns/format';
import { useDispatch, useSelector } from '../../redux/store';
import { getCapitalBonus } from '../../redux/slices/user';
import Scrollbar from '../../components/Scrollbar';

export default function ReferralList() {
  const dispatch = useDispatch();
  const { capitalBonus } = useSelector((state) => state.user);
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const values = {
      incomeType: 'MATCHING BUSINESS'
    };
    dispatch(getCapitalBonus(values));
  }, [dispatch]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(1); // Reset the page to the first page when searching
  };
  console.log(capitalBonus, 'capitalBonuscapitalBonuscapitalBonuscapitalBonus');
  const checkDataArr = capitalBonus?.filter((row) => {
    if (!searchTerm) return true;
    return (
      row?.calculate_date.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row?.income_amt.toString().includes(searchTerm) ||
      row?.Bonus_percent.toString().includes(searchTerm) ||
      row?.income_type.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card>
      <CardHeader title="Reward Bonus List" sx={{ mb: 3 }} />
      <Box width={250} m={1} display="flex" justifyContent="flex-end" sx={{ p: 2 }}>
        <TextField label="Search" variant="outlined" fullWidth value={searchTerm} onChange={handleSearchChange} />
      </Box>
      <Scrollbar>
        <TableContainer eContainer sx={{ minWidth: 720 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ minWidth: 120 }}>No.</TableCell>
                <TableCell sx={{ minWidth: 160 }}>Date</TableCell>
                <TableCell sx={{ minWidth: 200 }}>Reward Amount</TableCell>
                <TableCell sx={{ minWidth: 200 }}>Matching Business</TableCell>

                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {checkDataArr?.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6}>
                    <Box m={4} display="flex" justifyContent="center" alignItems="center" sx={{ width: 'fit-content' }}>
                      <Typography variant="h6">No Data Found</Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              ) : (
                <>
                  {checkDataArr?.slice((page - 1) * rowsPerPage, page * rowsPerPage)?.map((row, ind) => (
                    <TableRow key={ind}>
                      <TableCell>
                        <Typography variant="subtitle2">{ind + 1 + (page - 1) * rowsPerPage}</Typography>
                      </TableCell>
                      <TableCell>{format(new Date(row?.calculate_date), 'dd MMM yyyy')}</TableCell>
                      <TableCell>{row?.income_amt} $</TableCell>

                      <TableCell sx={{ textTransform: 'capitalize' }}>{row?.investment_amt} $ </TableCell>
                    </TableRow>
                  ))}
                </>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination
          count={Math.ceil(checkDataArr?.length / rowsPerPage)}
          page={page}
          onChange={handlePageChange}
          color="primary"
          sx={{ my: 3, display: 'flex', justifyContent: 'center' }}
        />
      </Scrollbar>
      <Divider />
    </Card>
  );
}
