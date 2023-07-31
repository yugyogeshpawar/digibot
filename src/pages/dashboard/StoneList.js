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
  Divider
} from '@material-ui/core';
import format from 'date-fns/format';
import { useDispatch, useSelector } from '../../redux/store';
import { getStoneBonus } from '../../redux/slices/user';
import Scrollbar from '../../components/Scrollbar';

export default function StoneList() {
  const dispatch = useDispatch();
  const { stoneBonus } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch data from the API
      const values = {
        incomeType: 'STAKING BONUS'
      };
      dispatch(getStoneBonus(values));
    };

    fetchData();
  }, [dispatch]);

  // console.log(stoneArr);

  const stoneArr = stoneBonus;

  return (
    <Card>
      <CardHeader title="Stacking Bonus " sx={{ mb: 3 }} />
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
              {stoneArr?.length < 1 ? (
                <TableRow>
                  <TableCell colSpan={7}>
                    <Typography variant="h6">No Data Found</Typography>
                  </TableCell>
                </TableRow>
              ) : (
                <>
                  {stoneArr?.map((row, ind) => (
                    <TableRow key={ind}>
                      <TableCell>
                        <Typography variant="subtitle2">{ind + 1}</Typography>
                      </TableCell>

                      <TableCell>{format(new Date(row.calculate_date), 'dd MMM yyyy')}</TableCell>
                      <TableCell>{row.income_amt}</TableCell>
                      <TableCell>{row.Bonus_percent}</TableCell>
                      <TableCell sx={{ textTransform: 'capitalize' }}>{row.b_type}</TableCell>
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
