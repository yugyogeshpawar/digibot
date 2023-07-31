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
import { getLevelBonus } from '../../redux/slices/user';
import Scrollbar from '../../components/Scrollbar';

export default function LevelList() {
  const dispatch = useDispatch();
  const { levelBonus } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch data from the API
      const values = {
        incomeType: 'ROI BONUS'
      };
      dispatch(getLevelBonus(values));
    };

    fetchData();
  }, [dispatch]);

  console.log(levelBonus);

  const CheckHasData = levelBonus;

  return (
    <Card>
      <CardHeader title="My Level Bonus " sx={{ mb: 3 }} />
      <Scrollbar>
        <TableContainer sx={{ minWidth: 720 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ minWidth: 60 }}>No.</TableCell>
                <TableCell sx={{ minWidth: 160 }}>Date</TableCell>
                <TableCell sx={{ minWidth: 160 }}>Income Level</TableCell>
                <TableCell sx={{ minWidth: 200 }}>Member User Id</TableCell>
                <TableCell sx={{ minWidth: 120 }}>Investment Type</TableCell>
                <TableCell sx={{ minWidth: 120 }}>Income Member id</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {CheckHasData?.length < 1 ? (
                <TableRow>
                  <TableCell colSpan={7}>
                    <Typography variant="h6">No Data Found</Typography>
                  </TableCell>
                </TableRow>
              ) : (
                <>
                  {CheckHasData?.map((row, ind) => (
                    <TableRow key={ind}>
                      <TableCell>
                        <Typography variant="subtitle2">{ind + 1}</Typography>
                      </TableCell>

                      <TableCell>{format(new Date(row.calculate_date), 'dd MMM yyyy')}</TableCell>
                      <TableCell>{row.income_level}</TableCell>

                      <TableCell>{row.member_user_id}</TableCell>
                      <TableCell>{row.income_type}</TableCell>
                      <TableCell sx={{ textTransform: 'capitalize' }}>{row.income_member_id}</TableCell>
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
