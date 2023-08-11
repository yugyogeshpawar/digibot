/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable react/jsx-no-comment-textnodes */
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
  Stack,
  Button,
  TextField,
  Pagination
} from '@material-ui/core';

import format from 'date-fns/format';
import { useDispatch, useSelector } from '../../redux/store';
import { getStackingSummary, mintingSummaryapi } from '../../redux/slices/user';
import Scrollbar from '../../components/Scrollbar';

export default function StackingSummary() {
  const dispatch = useDispatch();
  const { stackingsummary } = useSelector((state) => state.user);

  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(getStackingSummary());
  }, [dispatch]);

  const filteredData = stackingsummary?.filter((row) =>
    row.investType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, filteredData?.length - (page - 1) * rowsPerPage);

  return (
    <Card>
      <CardHeader title="Trading Summary" sx={{ mb: 3 }} />
      <TextField
        label="Search by Type"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ m: 2 }}
      />
      <Scrollbar>
        <TableContainer sx={{ minWidth: 720 }}>
          <Table>
            <TableHead>
              {' '}
              <TableRow>
                <TableCell sx={{ minWidth: 120 }}>No.</TableCell>
                <TableCell sx={{ minWidth: 120 }}>Date</TableCell>
                <TableCell sx={{ minWidth: 120 }}>Type</TableCell>
                <TableCell sx={{ minWidth: 120 }}>Minting USDT</TableCell>
                <TableCell sx={{ minWidth: 120 }}>Minting digibot</TableCell>
                <TableCell sx={{ minWidth: 120 }}>Transaction Hash</TableCell>
                <TableCell sx={{ minWidth: 120 }}>Status</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {' '}
              {filteredData?.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} align="center">
                    <Typography variant="subtitle1">No Data Found</Typography>
                  </TableCell>
                </TableRow>
              ) : (
                (rowsPerPage > 0
                  ? filteredData?.slice((page - 1) * rowsPerPage, page * rowsPerPage)
                  : filteredData
                )?.map((row, ind) => (
                  <TableRow key={ind}>
                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Typography variant="subtitle2">{ind + 1}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>{format(new Date(row?.date * 1000), 'dd MMM yyyy')}</TableCell>
                    <TableCell>{row?.investType}</TableCell>
                    <TableCell>{row?.mintingGUSD}</TableCell>
                    <TableCell>{Number(row?.mintingDGB).toFixed(2)}</TableCell>
                    <TableCell>
                      <a href={`https://digiexplorer.info/tx/${row?.hash}`} target="_blank" rel="noreferrer">
                        {' '}
                        <Button variant="contained">Show Transaction</Button>{' '}
                      </a>
                    </TableCell>
                    <TableCell>
                      {row?.status === 1 ? <Box color="green"> Active </Box> : <Box color="red"> Inactive </Box>}
                    </TableCell>
                  </TableRow>
                ))
              )}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={8} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbar>
      <Divider />
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <Pagination
          count={Math.ceil(filteredData?.length / rowsPerPage)}
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
        />
        <Box sx={{ marginLeft: 2 }}>
          <Typography variant="body2">
            Rows per page:
            <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
