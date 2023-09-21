import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Web3 from 'web3';
import { CONTRACT, CONTRACT_ADDRESS, SWAP_CONTRACT } from './Contract';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AllowanceUDT() {
  const [spenderAddress, setSpenderAddress] = useState('0x6318BaF8065Fe6c331f6C0D328fd3F2eD694F22F');
  const [amount, setAmount] = useState(0);
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState(0);
  const [adminA, setAdminA] = useState('');

  useEffect(() => {
    const fetchAccount = async () => {
      if (typeof window.ethereum !== 'undefined') {
        try {
          const web3Instance = new Web3(window.ethereum);
          await window.ethereum.enable(); // Request account access through MetaMask
          web3Instance.setProvider(window.ethereum);

          const accounts = await web3Instance.eth.getAccounts();
          setAccount(accounts[0]);

          // Fetch admin address after setting the account
          try {
            const AdminAddress = await SWAP_CONTRACT.methods.owner().call();
            setAdminA(AdminAddress);
            console.log('Admin Account:', AdminAddress);
          } catch (error) {
            console.error('Error fetching admin address:', error);
          }

          console.log('Connected Account:', accounts[0]);

          const USDTToken = await CONTRACT.methods.balanceOf(accounts[0]).call();
          setBalance(USDTToken); // Commented out for troubleshooting
          console.log('Balance:', USDTToken);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        console.log(' consider trying MetaMask!');
      }
    };

    fetchAccount();
  }, [account]);
  // useEffect(() => {
  //   const fetchAccount = async () => {
  //     if (typeof window.ethereum !== 'undefined') {
  //       try {
  //         const web3Instance = new Web3(window.ethereum);
  //         await window.ethereum.enable();
  //         web3Instance.setProvider(window.ethereum);

  //         // Rest of your code here...
  //       } catch (error) {
  //         console.error('Error initializing Web3:', error);
  //       }
  //     } else {
  //       console.log('MetaMask not detected. Please install and connect MetaMask.');
  //     }
  //   };

  //   fetchAccount();
  // }, [account]);



  const approve = async () => {
    try {
      const web3Instance = new Web3(ethereum);
      const amountWei = web3Instance.utils.toWei(amount.toString(), 'ether');
      console.log(spenderAddress);
      // Create a transaction object for approval
      const txObject = {
        from: account,
        to: CONTRACT_ADDRESS,
        data: CONTRACT.methods.approve(spenderAddress, amountWei).encodeABI(),
        gas: '50000' // Adjust gas limit as needed
      };

      // Send the transaction using MetaMask's provider
      await web3Instance.eth.sendTransaction(txObject);

      // Show a success toast message
      toast.success('Tokens approved successfully', {
        position: toast.POSITION.TOP_RIGHT
      });

      console.log('Approval transaction sent.');
    } catch (error) {
      console.error('Error approving tokens:', error);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: '50%',
        margin: 'auto'
      }}
    >
      <Typography variant="h6">Connected Account: {account}</Typography>
      <Typography variant="h5">Admin Account: {adminA}</Typography>
      <Typography variant="h6">Admin balance: {balance}</Typography>

      <Typography variant="h6">Approve</Typography>
      <TextField
        label="Spender (Address)"
        value={spenderAddress}
        onChange={(e) => setSpenderAddress(e.target.value)}
        InputProps={{
          readOnly: false
        }}
        sx={{ width: 1 }}
      />
      <TextField
        label="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        InputLabelProps={{
          shrink: true
        }}
        inputProps={{
          min: 0,
          step: 1
        }}
        sx={{ width: 1 }}
      />
      <Button variant="contained" color="primary" onClick={approve}>
        Approve Tokens
      </Button>

      {/* Toast container */}
      <ToastContainer />
    </Box>
  );
}
