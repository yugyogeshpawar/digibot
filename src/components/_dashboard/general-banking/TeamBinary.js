/* eslint-disable eqeqeq */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
import PropTypes from 'prop-types';
import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Button, Box, Grid, Card, CircularProgress, Alert, Snackbar, Fade, Modal, Backdrop } from '@material-ui/core';

const TreeCard = ({ binaryTree, onChildClick }) => {
  const { root, children, childrenOfChildren } = binaryTree;
  const makeNode = (user, index) => {
    if (user !== null && user !== undefined) {
      return (
        <Grid item xs={6} sm={6} md={6} key={index}>
          <Box className="img" style={styleObject} onClick={() => onChildClick(user.member_user_id)}>
            <img src="/bot/NanoBot2.png" className="App-logo" alt="logo" style={{ maxWidth: '100px' }} />
            <h6 className="text-center" style={{ textAlign: 'center' }}>
              {user.member_name}
              <br />
              {user.member_user_id}
            </h6>
          </Box>
        </Grid>
      );
    }
    return null;
  };

  const make4Node = (users, index) => {
    const userNodes = users.map((user, userIndex) =>
      user ? (
        <Grid item xs={6} sm={6} md={6} key={`${index}-${userIndex}`}>
          <Box className="img" style={styleObject} onClick={() => onChildClick(user.member_user_id)}>
            <img src="/bot/NanoBot2.png" className="App-logo" alt="logo" style={{ maxWidth: '100px' }} />
            <h6 className="text-center" style={{ textAlign: 'center' }}>
              {user.member_name} <br />
              {user.member_user_id}
            </h6>
          </Box>
        </Grid>
      ) : (
        <Grid item xs={6} sm={6} md={6} key={`${index}-${userIndex}`}>
          <Box className="img" style={styleObject}>
            <img src="/bot/NanoBot2.png" className="App-logo" alt="logo" style={{ maxWidth: '100px', opacity: 0 }} />
            <h6 className="text-center" style={{ textAlign: 'center' }}>
              No User
            </h6>
          </Box>
        </Grid>
      )
    );

    return <>{userNodes}</>;
  };

  // Sort children and grandchildren based on their positions and their parent's position
  const sortedChildren = [...children].sort((a, b) => a.position.localeCompare(b.position));

  // Map sortedChildren to their respective children, and sort the grandchildren
  const sortedChildrenOfChildren = sortedChildren.map((child) =>
    [...childrenOfChildren]
      .filter((grandchild) => grandchild.promoter_id == child.member_user_id)
      .sort((a, b) => a.position.localeCompare(b.position))
  );

  // Create fourNodeGroups from sortedChildrenOfChildren
  const fourNodeGroups = [];

  for (const grandchildren of sortedChildrenOfChildren) {
    console.log(grandchildren);
    for (let i = 0; i < grandchildren.length; i += 2) {
      const group = grandchildren.slice(i, i + 2);
      while (group.length < 2) {
        group.push(null);
      }
      fourNodeGroups.push(group);
    }
  }

  return (
    <Box className="container" sx={{ p: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-around' }}>
          {makeNode(root)}
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-around' }}>
          {sortedChildren.map(makeNode)}
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-around' }}>
          {fourNodeGroups.map(make4Node)}
        </Grid>
      </Grid>
    </Box>
  );
};

const styleObject = {
  maxWidth: '100px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  margin: 'auto'
};

TreeCard.propTypes = {
  binaryTree: PropTypes.object,
  onChildClick: PropTypes.func
};

const LoadingModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

function convertToBinaryTree(Data, rootUserId) {
  // Ensure that Data and Data.users are defined
  if (!Data || !Data.users) {
    return { root: null, children: [], childrenOfChildren: [] };
  }
  // Find the root node
  const rootNode = Data.users.find((user) => user.member_user_id == rootUserId);

  // Check if rootNode exists
  if (!rootNode) {
    return { root: null, children: [], childrenOfChildren: [] };
  }
  const dummyUser = {
    assigned_bot_id: 'Alpha',
    investment_busd: 0,
    isblock: 0,
    member_name: '',
    member_user_id: '0',
    position: 'LEFT',
    promoter_id: '',
    promoter_name: 'DIGIBOT',
    registration_date: '2023-08-15T06:10:16.000Z',
    sponcer_id: '',
    status: 0
  };

  // Find users sponsored by the root
  const usersSponceredByRoot = Data.users.filter((user) => user.promoter_id == rootUserId);
  const usersSponceredByRootChildren = Data.users.filter(
    (user) =>
      user.promoter_id == usersSponceredByRoot[0]?.member_user_id ||
      user.promoter_id == usersSponceredByRoot[1]?.member_user_id
  );

  while (usersSponceredByRootChildren.length < 4) {
    usersSponceredByRootChildren.push(dummyUser);
  }

  // Include root node data and its children in the result
  return {
    root: rootNode,
    children: usersSponceredByRoot,
    childrenOfChildren: usersSponceredByRootChildren
  };
}

const RootStyle = styled(Card)(({ theme }) => ({
  '& .apexcharts-legend': {
    width: 240,
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
      flexWrap: 'wrap',
      height: 160,
      width: '50%'
    }
  },
  '& .apexcharts-datalabels-group': {
    display: 'none'
  }
}));

TeamBinary.propTypes = {
  data: PropTypes.array
};

function TeamBinary({ data }) {
  const initialRootUserId = data && data.users && data.users.length > 0 ? data.users[0].member_user_id : null;
  const [rootUserId, setRootUserId] = React.useState(
    data && data.users && data.users.length > 0 ? data.users[0].member_user_id : null
  );
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const binaryTree = convertToBinaryTree(data, initialRootUserId);
  console.log(binaryTree);

  const handleChildClick = async (userId) => {
    setLoading(true);
    const childrenNodes = data.users.filter((user) => user.promoter_id == userId);

    if (!childrenNodes || childrenNodes.length < 2) {
      setOpenSnackbar(true);
    } else {
      setRootUserId(userId);
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
  };

  const handleBackClick = () => {
    setRootUserId(initialRootUserId);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  if (!data || !data.users || data.users.length === 0) {
    return (
      <RootStyle>
        <Alert severity="warning">No data available</Alert>
      </RootStyle>
    );
  }

  return (
    <RootStyle>
      <TreeCard binaryTree={binaryTree} onChildClick={handleChildClick} />

      <Button onClick={handleBackClick} variant="outlined" size="medium" style={{ marginLeft: '10px' }}>
        Root user
      </Button>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        style={{ marginTop: '100px' }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
          This user doesn't have enough children.
        </Alert>
      </Snackbar>

      <LoadingModal
        open={loading}
        onClose={() => {}}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={loading}>
          <CircularProgress />
        </Fade>
      </LoadingModal>
    </RootStyle>
  );
}

export default TeamBinary;
