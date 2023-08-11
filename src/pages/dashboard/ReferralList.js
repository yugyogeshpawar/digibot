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
import format from 'date-fns/format';
import { useDispatch, useSelector } from '../../redux/store';
import { getRefBonus } from '../../redux/slices/user';
import Scrollbar from '../../components/Scrollbar';

export default function ReferralList() {
  const dispatch = useDispatch();
  const { refbonus } = useSelector((state) => state.user);

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const values = {
      incomeType: 'DIRECT BONUS'
    };
    dispatch(getRefBonus(values));
  }, [dispatch]);

  const refarr = refbonus?.results || [];

  const filteredData = refarr.filter((row) => row?.income_type.toLowerCase().includes(searchText.toLowerCase()));

  const totalPageCount = Math.ceil(filteredData?.length / rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Card>
      <CardHeader title="Direct Bonus List" sx={{ mb: 3 }} />
      <Scrollbar>
        <TableContainer>
          <Box>
            <Box width={250} m={1} display="flex" justifyContent="flex-end">
              <TextField
                fullWidth
                label="Search by Income Type"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                sx={{ mb: 2, ml: 2 }}
              />
            </Box>
          </Box>

          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ minWidth: 120 }}>No.</TableCell>
                <TableCell sx={{ minWidth: 160 }}>Date</TableCell>
                <TableCell sx={{ minWidth: 200 }}>Income Amount</TableCell>
                <TableCell sx={{ minWidth: 120 }}>Bonus Per</TableCell>
                <TableCell sx={{ minWidth: 120 }}>Income Type</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData?.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5}>
                    <Box m={4} display="flex" justifyContent="center" alignItems="center">
                      <Typography variant="h6">No Data Found</Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              ) : (
                <>
                  {filteredData
                    ?.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
                    ?.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <Typography variant="subtitle2">{(currentPage - 1) * rowsPerPage + index + 1}</Typography>
                        </TableCell>
                        <TableCell>{format(new Date(row?.calculate_date), 'dd MMM yyyy')}</TableCell>
                        <TableCell>{row?.income_amt}</TableCell>
                        <TableCell>{row?.Bonus_percent}</TableCell>
                        <TableCell sx={{ textTransform: 'capitalize' }}>{row?.income_type}</TableCell>
                      </TableRow>
                    ))}
                </>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination
          count={totalPageCount}
          page={currentPage}
          onChange={handleChangePage}
          sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}
        />
      </Scrollbar>
      <Divider />
    </Card>
  );
}
