import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Card,
  CardHeader,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider,
  TextField,
  MenuItem,
  Pagination,
  Box
} from '@material-ui/core';
import format from 'date-fns/format';
import { getStoneBonus } from '../../redux/slices/user';
import Scrollbar from '../../components/Scrollbar';

export default function StoneList() {
  const dispatch = useDispatch();
  const { stoneBonus } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getStoneBonus({ incomeType: 'STAKING BONUS' }));
  }, [dispatch]);

  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const stoneArr = stoneBonus || [];

  const filteredData = stoneArr.filter((row) => row.calculate_date.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  return (
    <Card>
      <CardHeader title="Stacking Bonus" sx={{ mb: 3 }} />
      <Box>
        <Box width={250} m={1} display="flex" justifyContent="flex-end">
          <TextField
            label="Search Date"
            variant="outlined"
            size="small"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ marginBottom: 2, marginRight: 2 }}
          />
        </Box>
      </Box>

      <Scrollbar>
        <TableContainer sx={{ minWidth: 720 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ minWidth: 120 }}>No.</TableCell>
                <TableCell sx={{ minWidth: 160 }}>Date</TableCell>
                <TableCell sx={{ minWidth: 200 }}>Income Amount</TableCell>
                <TableCell sx={{ minWidth: 120 }}>Bonus Per</TableCell>
                <TableCell sx={{ minWidth: 120 }}>Bot Type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData?.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5}>
                    <Typography variant="h6">No Data Found</Typography>
                  </TableCell>
                </TableRow>
              ) : (
                <>
                  {filteredData?.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Typography variant="subtitle2">{index + 1}</Typography>
                      </TableCell>
                      <TableCell>{format(new Date(row?.calculate_date), 'dd MMM yyyy')}</TableCell>
                      <TableCell>{row?.income_amt}</TableCell>
                      <TableCell>{row?.Bonus_percent}</TableCell>
                      <TableCell sx={{ textTransform: 'capitalize' }}>{row?.b_type}</TableCell>
                    </TableRow>
                  ))}
                </>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbar>
      <Divider />
      <Pagination
        count={Math.ceil(filteredData?.length / rowsPerPage)}
        page={page}
        onChange={handleChangePage}
        rowsPerPageOptions={[5, 10, 25]}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        labelRowsPerPage="Rows per page"
        component="div"
        sx={{ margin: '10px auto', display: 'flex', justifyContent: 'center' }}
      />
    </Card>
  );
}
