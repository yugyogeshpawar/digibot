/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-const */
import PropTypes from 'prop-types';
import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Button, Box, Grid, Card, CircularProgress, Alert, Snackbar, Fade, Modal, Backdrop } from '@material-ui/core';
import Data from './Data.json';

const TreeCard = ({ binaryTree, onChildClick }) => {
  const { root, children, childrenOfChildren } = binaryTree;

  const makeNode = (user, index) => (
    <Grid item xs={6} sm={6} md={6} key={index}>
      <Box className="img" style={styleObject} onClick={() => onChildClick(user.member_user_id)}>
        <img src="/bot/NanoBot.png" className="App-logo" alt="logo" style={{ maxWidth: '100px' }} />
        <h6 className="text-center" style={{ textAlign: 'center' }}>
          {user.member_name}
          <br />
          {user.member_user_id}
        </h6>
      </Box>
    </Grid>
  );

  const make4Node = (users, index) => {
    const userNodes = users.map((user, userIndex) =>
      user ? (
        <Grid item xs={6} sm={6} md={6} key={`${index}-${userIndex}`}>
          <Box className="img" style={styleObject} onClick={() => onChildClick(user.member_user_id)}>
            <img src="/bot/NanoBot.png" className="App-logo" alt="logo" style={{ maxWidth: '100px' }} />
            <h6 className="text-center" style={{ textAlign: 'center' }}>
              {user.member_name} <br />
              {user.member_user_id}
            </h6>
          </Box>
        </Grid>
      ) : (
        <Grid item xs={6} sm={6} md={6} key={`${index}-${userIndex}`}>
          <Box className="img" style={styleObject}>
            <img src="/bot/NanoBot.png" className="App-logo" alt="logo" style={{ maxWidth: '100px', opacity: 0 }} />
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
      .filter((grandchild) => grandchild.position_parent === child.member_user_id)
      .sort((a, b) => a.position.localeCompare(b.position))
  );

  // Create fourNodeGroups from sortedChildrenOfChildren
  const fourNodeGroups = [];

  for (const grandchildren of sortedChildrenOfChildren) {
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
  // Find the root node
  const rootNode = Data.users.find((user) => user.member_user_id === rootUserId);

  // Find users sponsored by the root
  const usersSponceredByRoot = Data.users.filter((user) => user.position_parent === rootUserId);
  const usersSponceredByRootChildren = Data.users.filter(
    (user) =>
      user.position_parent === usersSponceredByRoot[0].member_user_id ||
      user.position_parent === usersSponceredByRoot[1].member_user_id
  );

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

function TeamBinary() {
  const initialRootUserId = Data.users[0].member_user_id; // Get the first user as the root
  const [rootUserId, setRootUserId] = React.useState(initialRootUserId); // Move rootUserId to state
  const [openSnackbar, setOpenSnackbar] = React.useState(false); // state to handle snackbar visibility
  const [loading, setLoading] = React.useState(false); // Add loading state

  const binaryTree = convertToBinaryTree(Data, rootUserId);
  console.log(binaryTree);

  const handleChildClick = async (userId) => {
    setLoading(true);
    const childrenNodes = Data.users.filter((user) => user.position_parent === userId);

    if (!childrenNodes || childrenNodes.length < 2) {
      // If childrenNodes is not found or less than 2, show the error snackbar
      setOpenSnackbar(true);
    } else {
      // Set the rootUserId to userId
      setRootUserId(userId);
    }
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second
    setLoading(false); // Set loading to false after 1 second
  };

  const handleBackClick = () => {
    setRootUserId(initialRootUserId); // Set the rootUserId to initialRootUserId when back button is clicked
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

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
