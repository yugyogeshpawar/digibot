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

export default function MyLevel() {
  const dispatch = useDispatch();
  const { directM } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(directMember());
  }, [dispatch]);

  const refarr = directM;
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
  return (
    <Card>
      <CardHeader title="My Level" sx={{ mb: 3 }} />
      <Scrollbar>
        <TableContainer eContainer sx={{ minWidth: 720 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ minWidth: 120 }}>No.</TableCell>
                <TableCell sx={{ minWidth: 160 }}>Member Id </TableCell>
                <TableCell sx={{ minWidth: 160 }}>Sponser Id </TableCell>
                <TableCell sx={{ minWidth: 160 }}>Reg. Date</TableCell>
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
                      <TableCell>{row?.member_user_id}</TableCell>

                      <TableCell sx={{ textTransform: 'capitalize' }}>{formatDate(row?.registration_date)}</TableCell>

                      <TableCell sx={{ textTransform: 'capitalize' }}>{row?.position}</TableCell>
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
