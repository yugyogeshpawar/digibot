/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@material-ui/core/styles';
import { Card, CardHeader, Box, Divider, Typography } from '@material-ui/core';
import binaryTreeData from './Data.json';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  '& .binary-tree': {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      alignItems: 'flex-start'
    }
  },
  '& .binary-node': {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    mx: 2,
    '& img': {
      width: 80,
      height: 80,
      borderRadius: '50%',
      objectFit: 'cover',
      marginBottom: theme.spacing(1)
    },
    [theme.breakpoints.up('sm')]: {
      mx: 4
    }
  },
  '& .arrow': {
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }
}));

const BinaryTreeNode = ({ data }) => (
  <div className="binary-node">
    <img src={data.image} alt={data.member_name} />
    <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>
      {data.member_name}
    </Typography>
  </div>
);

BinaryTreeNode.propTypes = {
  data: PropTypes.shape({
    member_name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    left: PropTypes.object,
    right: PropTypes.object
  }).isRequired
};

function convertToTree(data) {
  const userMap = new Map();

  // Create a map where the keys are member_user_id and values are user objects
  data.users.forEach((user) => userMap.set(user.member_user_id, { ...user, children: [] }));

  // Initialize the root of the tree
  const root = [];

  // Traverse the users to create the tree structure
  data.users.forEach((user) => {
    const { member_user_id, position, position_parent } = user;
    const currentUser = userMap.get(member_user_id);

    if (position_parent === '0') {
      // If position_parent is '0', this is the root user
      root.push(currentUser);
    } else {
      // Otherwise, find the parent user in the map and add the current user as its child
      const parentUser = userMap.get(position_parent);
      if (parentUser) {
        if (position === 'LEFT') {
          parentUser.children[0] = currentUser;
        } else if (position === 'RIGHT') {
          parentUser.children[1] = currentUser;
        }
      } else {
        console.warn(`Parent user with member_user_id ${position_parent} not found for user ${member_user_id}`);
        // If the parent user is not found, it might be a good idea to handle it gracefully.
        // For example, you can create a placeholder parent node or exclude this user from the tree.
        // To keep the example simple, we will exclude this user from the tree.
      }
    }
  });

  // Filter out users with missing parent references (optional)
  const validRoot = root.filter((user) => userMap.has(user.position_parent));
  return validRoot;
}

export default function BinaryTree() {
  const treeData = convertToTree(binaryTreeData);

  console.log('Tree Data:', treeData); // Debugging statement

  const renderBinaryTree = (node) => {
    if (!node) return null;

    return (
      <Box className="binary-tree" style={{ flexDirection: 'column' }}>
        <BinaryTreeNode data={node} />
        <Box className="level" style={{ justifyContent: 'center', flexDirection: 'row', display: 'flex' }}>
          <Box className="left-child">{renderBinaryTree(node.children[0])}</Box>
          <Box className="right-child">{renderBinaryTree(node.children[1])}</Box>
        </Box>
      </Box>
    );
  };

  return (
    <RootStyle>
      <CardHeader title="Binary Tree" />

      <Box sx={{ my: 5 }} className="binary-tree">
        {renderBinaryTree(treeData[0])} {/* Use the root node data */}
      </Box>

      <Divider />

      {/* You can add additional information or statistics here */}
    </RootStyle>
  );
}
