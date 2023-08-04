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
  Box
} from '@material-ui/core';

import format from 'date-fns/format';

import { useDispatch, useSelector } from '../../redux/store';
import { getMonthlyPayrollBonus } from '../../redux/slices/user';
import Scrollbar from '../../components/Scrollbar';

// ----------------------------------------------------------------------

export default function MonthlyPayrollBonus() {
  const dispatch = useDispatch();
  const { monthlyPayrollBonus } = useSelector((state) => state.user);

  useEffect(() => {
    const values = {
      incomeType: 'MONTHLY BONUS'
    };
    dispatch(getMonthlyPayrollBonus(values));
  }, [dispatch]);
  const refarr = monthlyPayrollBonus;

  return (
    <Card>
      <CardHeader title="Monthly Bonus List" sx={{ mb: 3 }} />
      <Scrollbar>
        <TableContainer eContainer sx={{ minWidth: 720 }}>
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
              {refarr?.length === 0 ? (
                <>
                  <Box m={4} display="flex" justifyContent="center" alignItems="center" sx={{ width: 'fit-content' }}>
                    <Typography variant="h6">No Data Found</Typography>
                  </Box>
                </>
              ) : (
                <>
                  {refarr?.map((row, ind) => (
                    <TableRow key={ind}>
                      <TableCell>
                        <Typography variant="subtitle2">{ind + 1}</Typography>
                      </TableCell>

                      <TableCell>{format(new Date(row.calculate_date), 'dd MMM yyyy')}</TableCell>
                      <TableCell>{row.income_amt}</TableCell>
                      <TableCell>{row.Bonus_percent}</TableCell>
                      <TableCell sx={{ textTransform: 'capitalize' }}>{row.income_type}</TableCell>
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
