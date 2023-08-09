/* eslint-disable prefer-const */
import { useEffect, useState } from 'react';
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
  Tooltip,
  IconButton
} from '@material-ui/core';
import { FileCopyOutlined as FileCopyOutlinedIcon } from '@material-ui/icons';
import format from 'date-fns/format';
import { useSnackbar } from 'notistack5';
import { useDispatch, useSelector } from '../../redux/store';
import { withdawSummaryapi } from '../../redux/slices/user';
import Scrollbar from '../../components/Scrollbar';

export default function TractionsactionList() {
  const dispatch = useDispatch();
  const { withdawS } = useSelector((state) => state.user);
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    dispatch(withdawSummaryapi());
  }, [dispatch]);

  const walletAddressSort = (inputString) => {
    const firstFiveDigits = inputString.substring(0, 5);
    const lastFiveDigits = inputString.substring(inputString.length - 5);
    let totalString = `${firstFiveDigits}...${lastFiveDigits}`;
    return totalString;
  };

  const copyToClipboard = (address) => {
    navigator.clipboard.writeText(address);
    enqueueSnackbar('Copy to clipboard', { variant: 'success' }); // Show error notification
  };

  return (
    <Card>
      <CardHeader title="Withdaw Summary" sx={{ mb: 3 }} />
      <Scrollbar>
        <TableContainer sx={{ minWidth: 720 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ minWidth: 120 }}>No.</TableCell>
                <TableCell sx={{ minWidth: 120 }}>Withdraw Ref</TableCell>
                <TableCell sx={{ minWidth: 120 }}>Date</TableCell>
                <TableCell sx={{ minWidth: 120 }}>Withdaw Amount</TableCell>
                <TableCell sx={{ minWidth: 120 }}>Withdraw GUSD</TableCell>
                <TableCell sx={{ minWidth: 120 }}>Wallet Address</TableCell>
                <TableCell sx={{ minWidth: 200 }}>Transaction Id</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {withdawS?.length === 0 ? (
                <>
                  <Box m={4} display="flex" justifyContent="center" alignItems="center" sx={{ width: 'fit-content' }}>
                    <Typography variant="h6">No Data Found</Typography>
                  </Box>
                </>
              ) : (
                <>
                  {withdawS?.map((row, ind) => (
                    <TableRow key={row.date}>
                      <TableCell>
                        <Stack direction="row" alignItems="center" spacing={2}>
                          <Typography variant="subtitle2">{ind + 1}</Typography>
                        </Stack>
                      </TableCell>

                      <TableCell>{row.with_referrance}</TableCell>
                      <TableCell>{format(new Date(row.with_date), 'dd MMM yyyy')}</TableCell>

                      <TableCell>{row.with_amt}</TableCell>
                      <TableCell>{row.total_gusd_amt}</TableCell>
                      <TableCell>
                        <Tooltip title={row?.wallet_address} arrow placement="top">
                          <span>
                            {walletAddressSort(row?.wallet_address)}
                            <IconButton size="small" onClick={() => copyToClipboard(row?.wallet_address)}>
                              <FileCopyOutlinedIcon fontSize="inherit" />
                            </IconButton>
                          </span>
                        </Tooltip>
                      </TableCell>
                      <TableCell>
                        <a href={`https://bscscan.com/tx/${row?.transaction_id}`} target="_blank" rel="noreferrer">
                          {' '}
                          <Button variant="contained">Show Transaction</Button>{' '}
                        </a>
                      </TableCell>
                    </TableRow>
                  ))}
                </>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbar>

      <Divider />
    </Card>
  );
}
