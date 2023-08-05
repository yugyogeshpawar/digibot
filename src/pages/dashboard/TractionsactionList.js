/* eslint-disable no-plusplus */
import { useEffect } from 'react';

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
  Button
} from '@material-ui/core';

import format from 'date-fns/format';
// eslint-disable-next-line import/no-unresolved

import { useDispatch, useSelector } from '../../redux/store';
// eslint-disable-next-line import/named
import { withdawSummaryapi } from '../../redux/slices/user';

// components

import Scrollbar from '../../components/Scrollbar';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function TractionsactionList() {
  let count = 1;
  const dispatch = useDispatch();
  const { withdawS } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(withdawSummaryapi());
  }, [dispatch]);
  const withs = withdawS;
  console.log('yyyyyyyyy======> :', withs);
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
                <TableCell sx={{ minWidth: 200 }}>Transaction Id </TableCell>

                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {withs?.length === 0 ? (
                <>
                  <Box m={4} display="flex" justifyContent="center" alignItems="center" sx={{ width: 'fit-content' }}>
                    <Typography variant="h6">No Data Found</Typography>
                  </Box>
                </>
              ) : (
                <>
                  {withs?.map((row) => (
                    <TableRow key={row.date}>
                      <TableCell>
                        <Stack direction="row" alignItems="center" spacing={2}>
                          <Typography variant="subtitle2">{count++}</Typography>
                        </Stack>
                      </TableCell>

                      <TableCell>{row.with_referrance}</TableCell>
                      <TableCell>{format(new Date(row.with_date), 'dd MMM yyyy')}</TableCell>

                      <TableCell>{row.with_amt}</TableCell>
                      <TableCell>{row.total_gusd_amt}</TableCell>
                      <TableCell>{row.wallet_address}</TableCell>
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
