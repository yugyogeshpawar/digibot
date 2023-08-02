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
import { directMember } from '../../redux/slices/user';
import Scrollbar from '../../components/Scrollbar';

// ----------------------------------------------------------------------

export default function MyDirect() {
  const dispatch = useDispatch();
  const { directM } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(directMember());
  }, [dispatch]);
  const refarr = directM;

  return (
    <Card>
      <CardHeader title="My Direct" sx={{ mb: 3 }} />
      <Scrollbar>
        <TableContainer eContainer sx={{ minWidth: 720 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ minWidth: 120 }}>No.</TableCell>
                <TableCell sx={{ minWidth: 160 }}>Member Id </TableCell>
                <TableCell sx={{ minWidth: 160 }}>Associate Name</TableCell>
                <TableCell sx={{ minWidth: 160 }}>Reg. Date</TableCell>
                <TableCell sx={{ minWidth: 200 }}>Position</TableCell>
                <TableCell sx={{ minWidth: 120 }}>Package</TableCell>
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
                      <TableCell>{row.member_user_id}</TableCell>
                      <TableCell>{row.member_name}</TableCell>
                      <TableCell>{format(new Date(row.registration_date), 'dd MMM yyyy')}</TableCell>
                      <TableCell sx={{ textTransform: 'capitalize' }}>{row.position}</TableCell>
                      <TableCell sx={{ textTransform: 'capitalize' }}>{row.assigned_bot_id}</TableCell>
                      <TableCell sx={{ textTransform: 'capitalize' }}>{row.status}</TableCell>
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
