import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Web3 from 'web3';
import { CONTRACT, CONTRACT_ADDRESS } from './Contract';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AllowanceUDT() {
  const [spenderAddress, setSpenderAddress] = useState('0x6318BaF8065Fe6c331f6C0D328fd3F2eD694F22F');
  const [amount, setAmount] = useState(0);
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchAccount = async () => {
      if (typeof window.ethereum !== 'undefined') {
        try {
          const web3Instance = new Web3(window.ethereum);
          await window.ethereum.enable();
          web3Instance.setProvider(window.ethereum);

          const accounts = await web3Instance.eth.getAccounts();
          setAccount(accounts[0]);

          const USDTToken = await CONTRACT.methods.balanceOf(accounts[0]).call();
          setBalance(USDTToken);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        console.log('Consider trying MetaMask!');
      }
    };

    fetchAccount();
  }, [account]);

  const approve = async () => {
    try {
      if (typeof window.ethereum !== 'undefined') {
        const web3Instance = new Web3(window.ethereum);
        const amountWei = web3Instance.utils.toWei(amount.toString(), 'ether');

        const data = CONTRACT.methods.approve(spenderAddress, amountWei).encodeABI();

        await window.ethereum.request({
          method: 'eth_sendTransaction',
          params: [
            {
              from: account,
              to: CONTRACT_ADDRESS,
              data: data
            }
          ]
        });

        toast.success('Tokens approved successfully', {
          position: toast.POSITION.TOP_RIGHT
        });
      } else {
        console.error('MetaMask not detected. Please install and connect MetaMask.');
      }
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
