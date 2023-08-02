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
import { getDownline, getRefBonus } from '../../redux/slices/user';
import Scrollbar from '../../components/Scrollbar';

// ----------------------------------------------------------------------

export default function MyDownLine() {
  const dispatch = useDispatch();
  const { refbonus } = useSelector((state) => state.user);

  useEffect(() => {
    const values = {
      incomeType: 'DIRECT BONUS'
    };
    dispatch(getRefBonus(values));
  }, [dispatch]);
  const refarr = refbonus;

  // const dispatch = useDispatch();
  const { downLineData } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getDownline());
  }, [dispatch]);
  const downlineApisData = downLineData;
  console.log(downlineApisData, downlineApisData?.length, 'downlineApis ======<');

  return (
    <Card>
      <CardHeader title="My Downline" sx={{ mb: 3 }} />
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
              {downlineApisData?.length === 0 ? (
                <>
                  <Box m={4} display="flex" justifyContent="center" alignItems="center" sx={{ width: 'fit-content' }}>
                    <Typography variant="h6">No Data Found</Typography>
                  </Box>
                </>
              ) : (
                <>
                  {downlineApisData?.map((row, ind) => (
                    <TableRow key={ind}>
                      <TableCell>
                        <Typography variant="subtitle2">{ind + 1}</Typography>
                      </TableCell>

                      <TableCell> {row?.member_user_id} </TableCell>
                      <TableCell>{row?.member_name}</TableCell>
                      <TableCell>{row?.position_parent}</TableCell>
                      <TableCell sx={{ textTransform: 'capitalize' }}>{row?.promoter_name}</TableCell>
                      <TableCell sx={{ textTransform: 'capitalize' }}>{row?.position}</TableCell>
                      <TableCell sx={{ textTransform: 'capitalize' }}>
                        {format(new Date(row?.registration_date), 'dd MMM yyyy')}
                      </TableCell>
                      <TableCell sx={{ textTransform: 'capitalize' }}>{row?.investment_busd}</TableCell>
                      <TableCell sx={{ textTransform: 'capitalize' }}>
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
