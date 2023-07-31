/* eslint-disable prefer-const */
import PropTypes from 'prop-types';
import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Box, Card, CircularProgress, Alert, Snackbar, Fade, Modal, Backdrop } from '@material-ui/core';
import Data from './Data.json';

const TreeCard = ({ binaryTree, onChildClick }) => {
  const { root, children } = binaryTree;

  return (
    <Box className="container" sx={{ p: 4 }}>
      <Box className="row">
        <Box className="col-md-12">
          <Box
            className="img"
            style={{
              maxWidth: '100px',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              margin: 'auto'
            }}
            onClick={() => onChildClick(root.member_user_id)}
          >
            <img src="/bot/NanoBot.png" className="App-logo" alt="logo" style={{ maxWidth: '100px' }} />
            <h6 className="text-center" style={{ textAlign: 'center' }}>
              {root.member_name}
            </h6>
          </Box>
        </Box>
      </Box>
      <Box className="row" sx={{ mt: 4 }}>
        <Box className="col-md-12" style={{ display: 'flex' }}>
          <Box
            className="img"
            style={{
              maxWidth: '100px',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              margin: 'auto'
            }}
            onClick={() => onChildClick(binaryTree.children[0].member_user_id)}
          >
            <img src="/bot/NanoBot.png" className="App-logo" alt="logo" style={{ maxWidth: '100px' }} />
            <h6 className="text-center" style={{ textAlign: 'center' }}>
              {children[0].member_name}
            </h6>
          </Box>
          <Box
            className="img"
            style={{
              maxWidth: '100px',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              margin: 'auto'
            }}
            onClick={() => onChildClick(binaryTree.children[1].member_user_id)}
          >
            <img src="/bot/NanoBot.png" className="App-logo" alt="logo" style={{ maxWidth: '100px' }} />
            <h6 className="text-center" style={{ textAlign: 'center' }}>
              {binaryTree.children[1].member_name}
            </h6>
          </Box>
        </Box>
      </Box>
    </Box>
  );
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

  // Include root node data and its children in the result
  return {
    root: rootNode,
    children: usersSponceredByRoot
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
  const [rootUserId, setRootUserId] = React.useState('6873419'); // Move rootUserId to state
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

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <RootStyle>
      {binaryTree && <TreeCard binaryTree={binaryTree} onChildClick={handleChildClick} />}
      <Snackbar
        open={openSnackbar}
        onClose={handleCloseSnackbar}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        style={{ zIndex: 9999 }}
      >
        <Alert onClose={handleCloseSnackbar} severity="error">
          No children found!
        </Alert>
      </Snackbar>
      <LoadingModal
        open={loading}
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
