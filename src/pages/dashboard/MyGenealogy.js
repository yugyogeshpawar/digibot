import React from 'react';
import TeamBinary from '../../components/_dashboard/general-banking/TeamBinary';

import { useDispatch, useSelector } from '../../redux/store';
import { getDownline } from '../../redux/slices/user';

const MyGenealogy = () => {
  const dispatch = useDispatch();
  const { downLineData } = useSelector((state) => state.user);

  React.useEffect(() => {
    dispatch(getDownline());
  }, [dispatch]);

  // Assuming that downLineData looks like this:
  // {
  //   mainUser: { /* some data */ },
  //   users: [ /* array of user objects */ ]
  // }
  const mergedArray = { users: [] };
  if (downLineData && downLineData.mainUser && downLineData.users) {
    mergedArray.users = [downLineData.mainUser[0][0], ...downLineData.users];
  }
  // console.log(mergedArray, 'Merged Array');

  return (
    <>
      <TeamBinary data={mergedArray} />
    </>
  );
};

export default MyGenealogy;
