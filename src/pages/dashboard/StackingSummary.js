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
import { getStackingSummary, mintingSummaryapi } from '../../redux/slices/user';

// components

import Scrollbar from '../../components/Scrollbar';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function StackingSummary() {
  // const dispatch = useDispatch();
  // const { mintingSummary } = useSelector((state) => state.user);

  // useEffect(() => {
  //   dispatch(mintingSummaryapi());
  // }, [dispatch]);
  const dispatch = useDispatch();
  const { stackingsummary } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getStackingSummary());
  }, [dispatch]);
  console.log('=======> :', stackingsummary);
  return (
    <Card>
      <CardHeader title="Stacking Summary" sx={{ mb: 3 }} />
      <Scrollbar>
        <TableContainer sx={{ minWidth: 720 }}>
          <Table>
            <TableHead>
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
              {stackingsummary?.length === 0 ? (
                <>
                  <Box m={4} display="flex" justifyContent="center" alignItems="center" sx={{ width: 'fit-content' }}>
                    <Typography variant="h6">No Data Found</Typography>
                  </Box>
                </>
              ) : (
                <>
                  {stackingsummary?.map((row, ind) => (
                    <TableRow key={row.date}>
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
