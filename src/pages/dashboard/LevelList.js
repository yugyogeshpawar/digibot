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
  TextField,
  Paper,
  TablePagination,
  Box
} from '@material-ui/core';
import format from 'date-fns/format';
import { useDispatch, useSelector } from '../../redux/store';
import { getLevelBonus } from '../../redux/slices/user';
import Scrollbar from '../../components/Scrollbar';

export default function LevelList() {
  const dispatch = useDispatch();
  const { levelBonus } = useSelector((state) => state.user);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      // Fetch data from the API
      const values = {
        incomeType: 'LEVEL BONUS'
      };
      dispatch(getLevelBonus(values));
    };

    fetchData();
  }, [dispatch]);

  const handleSearch = (event) => {
    setSearchText(event.target.value);
    setPage(0);
  };
  console.log(
    levelBonus,
    'levelBonuslevelBonuslevelBonuslevelBonuslevelBonuslevelBonuslevelBonuslevelBonuslevelBonuslevelBonuslevelBonuslevelBonus'
  );
  const filteredData = levelBonus?.filter(
    (row) =>
      searchText === '' ||
      row?.income_level.toLowerCase().includes(searchText.toLowerCase()) ||
      row?.income_type.toLowerCase().includes(searchText.toLowerCase())
  );
  console.log(filteredData, 'filteredDatafilteredDatafilteredData');
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, filteredData?.length - page * rowsPerPage);

  return (
    <Card>
      <CardHeader title="My Level Bonus" sx={{ mb: 3 }} />
      <Scrollbar>
        <Box>
          <Box width={250} m={1} display="flex" justifyContent="flex-end">
            <TextField
              label="Search"
              variant="outlined"
              value={searchText}
              onChange={handleSearch}
              fullWidth
              sx={{ margin: 2 }}
            />
          </Box>
        </Box>

        <TableContainer component={Paper} sx={{ minWidth: 720 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ minWidth: 60 }}>No.</TableCell>
                <TableCell sx={{ minWidth: 160 }}>Date</TableCell>
                <TableCell sx={{ minWidth: 160 }}> Level Bonus</TableCell>
                <TableCell sx={{ minWidth: 200 }}>From User</TableCell>
                <TableCell sx={{ minWidth: 200 }}>Level</TableCell>
                <TableCell sx={{ minWidth: 120 }}>Percentage ( % )</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData?.length === 0 ? (
                <Box m={4} display="flex" justifyContent="center" alignItems="center" sx={{ width: 'fit-content' }}>
                  <Typography variant="h6">No Data Found</Typography>
                </Box>
              ) : (
                (rowsPerPage > 0
                  ? filteredData?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : filteredData
                )?.map((row, ind) => (
                  <TableRow key={ind}>
                    <TableCell>
                      <Typography variant="subtitle2">{page * rowsPerPage + ind + 1}</Typography>
                    </TableCell>
                    <TableCell>{format(new Date(row?.calculate_date), 'dd MMM yyyy')}</TableCell>
                    <TableCell>{row?.income_amt} $</TableCell>
                    <TableCell>{row?.income_member_id} </TableCell>
                    <TableCell>{row?.income_level} </TableCell>

                    <TableCell>{row?.Bonus_percent} %</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={filteredData?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(event, newPage) => setPage(newPage)}
          onRowsPerPageChange={(event) => {
            setRowsPerPage(parseInt(event.target.value, 10));
            setPage(0);
          }}
        />
      </Scrollbar>
      <Divider />
    </Card>
  );
}
