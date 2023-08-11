import { useState, useEffect } from 'react';
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
import { getMonthlyPayrollBonus } from '../../redux/slices/user';
import Scrollbar from '../../components/Scrollbar';

export default function MonthlyPayrollBonus() {
  const dispatch = useDispatch();
  const { monthlyPayrollBonus } = useSelector((state) => state.user);

  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const values = {
      incomeType: 'MONTHLY BONUS'
    };
    dispatch(getMonthlyPayrollBonus(values));
  }, [dispatch]);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  const filteredData = monthlyPayrollBonus?.filter((row) =>
    row?.income_type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastRow = page * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData?.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <Card>
      <CardHeader title="Monthly Bonus List" sx={{ mb: 3 }} />
      <Scrollbar>
        <TableContainer>
          <Box>
            <Box width={250} m={1} display="flex" justifyContent="flex-end">
              <TextField
                label="Search by Income Type"
                variant="outlined"
                fullWidth
                margin="normal"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
              </TableRow>
            </TableHead>
            <TableBody>
              {currentRows?.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5}>
                    <Box m={4} display="flex" justifyContent="center" alignItems="center" sx={{ width: 'fit-content' }}>
                      <Typography variant="h6">No Data Found</Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              ) : (
                <>
                  {currentRows?.map((row, ind) => (
                    <TableRow key={ind}>
                      <TableCell>
                        <Typography variant="subtitle2">{ind + 1 + indexOfFirstRow}</Typography>
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
        <Box mt={2} display="flex" justifyContent="flex-end">
          <Box mr={1}>
            <Pagination
              count={Math.ceil(filteredData?.length / rowsPerPage)}
              page={page}
              onChange={handlePageChange}
              color="primary"
              showFirstButton
              showLastButton
            />
          </Box>
          <Box mb={2} mr={1}>
            <TextField
              select
              variant="outlined"
              margin="normal"
              value={rowsPerPage}
              onChange={handleRowsPerPageChange}
              label="Rows per page"
              SelectProps={{
                native: true
              }}
            >
              {[10, 25, 50, 100].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </TextField>
          </Box>
        </Box>
      </Scrollbar>
      <Divider />
    </Card>
  );
}
