/* eslint-disable eqeqeq */
import { useEffect } from 'react';
import {
  Card,
  Table,
  CardHeader,
  Stack,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  Typography,
  TableContainer,
  Divider,
  Box
} from '@material-ui/core';

import format from 'date-fns/format';
import { useDispatch, useSelector } from '../../redux/store';
import { getRefBonus, getStoneBonus } from '../../redux/slices/user';
// routes
// hooks
// import {useSettings} from '../../hooks/useSettings';
// components

import Scrollbar from '../../components/Scrollbar';

export default function ReferralList() {
  const dispatch = useDispatch();
  const { refbonus } = useSelector((state) => state.user);
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
  useEffect(() => {
    const values = {
      incomeType: 'PASSIVE BONUS'
    };
    dispatch(getRefBonus(values));
  }, [dispatch]);
  const refarr = refbonus?.passive;
  console.log('ccccccccccc===========', refarr?.passive);
  return (
    <Card>
      <CardHeader title="Passive Bonus" sx={{ mb: 3 }} />
      <Scrollbar>
        <TableContainer sx={{ minWidth: 720 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ minWidth: 120 }}>No.</TableCell>
                <TableCell sx={{ minWidth: 120 }}>Date</TableCell>
                <TableCell sx={{ minWidth: 120 }}>Income</TableCell>
                <TableCell sx={{ minWidth: 120 }}>Bonus Per</TableCell>
                <TableCell sx={{ minWidth: 120 }}>Bot Type</TableCell>

                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {refarr?.length === 0 ? (
                <>
                  <Box m={4} display="flex" justifyContent="center" alignItems="center" sx={{ width: 'fit-content' }}>
                    <Typography variant="h6">No Data Found</Typography>
                  </Box>
                </>
              ) : (
                <>
                  {refarr?.map((row, ind) => (
                    <TableRow key={row.cnt}>
                      <TableCell>
                        <Stack direction="row" alignItems="center" spacing={2}>
                          <Typography variant="subtitle2">{ind + 1}</Typography>
                        </Stack>
                      </TableCell>

                      <TableCell>{formatDate(row?.calculate_date)}</TableCell>

                      <TableCell>{row?.income_amt}</TableCell>
                      <TableCell>{row?.Bonus_percent}</TableCell>
                      <TableCell>{row?.b_type === null ? 'Not Defined ' : row?.b_type}</TableCell>
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
