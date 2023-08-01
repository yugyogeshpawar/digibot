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
import { getRefBonus } from '../../redux/slices/user';
import Scrollbar from '../../components/Scrollbar';

// ----------------------------------------------------------------------

export default function RightDownLine() {
  const dispatch = useDispatch();
  const { refbonus } = useSelector((state) => state.user);

  useEffect(() => {
    const values = {
      incomeType: 'DIRECT BONUS'
    };
    dispatch(getRefBonus(values));
  }, [dispatch]);
  const refarr = refbonus;

  return (
    <Card>
      <CardHeader title="My Right Downline" sx={{ mb: 3 }} />
      <Scrollbar>
        <TableContainer eContainer sx={{ minWidth: 720 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ minWidth: 120 }}>No.</TableCell>
                <TableCell sx={{ minWidth: 160 }}>Associate Id </TableCell>
                <TableCell sx={{ minWidth: 160 }}>Associate Name</TableCell>
                <TableCell sx={{ minWidth: 160 }}>Promoter Id</TableCell>
                <TableCell sx={{ minWidth: 160 }}>Promoter Name</TableCell>

                <TableCell sx={{ minWidth: 200 }}>Position</TableCell>
                <TableCell sx={{ minWidth: 120 }}>Reg. Date</TableCell>
                <TableCell sx={{ minWidth: 160 }}>Package</TableCell>

                <TableCell sx={{ minWidth: 120 }}>Status</TableCell>
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
                      <TableCell sx={{ textTransform: 'capitalize' }}>{row.income_type}</TableCell>
                      <TableCell sx={{ textTransform: 'capitalize' }}>{row.income_type}</TableCell>
                      <TableCell sx={{ textTransform: 'capitalize' }}>{row.income_type}</TableCell>
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
