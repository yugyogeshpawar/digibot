import React, { useState, useEffect } from 'react';
import {
  Grid,
  Snackbar,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
  Typography
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import Web3 from 'web3';
import SwapFrom from './SwapForm';
import LoadingScreen from '../../../components/LoadingScreenPleaseWait';
import { DGBSWAP_CONTRACT, MBUSD_CONTRACT, DGBSWAP_CONTRACT_ADDRESS } from './WalletAddress';

export default function S() {
  const [web3, setWeb3] = useState(null);
  const [web3SnackbarOpen, setWeb3SnackbarOpen] = useState(false);
  const [web3SnackbarSeverity, setWeb3SnackbarSeverity] = useState('success');
  const [accountAddress, setAccountAddress] = useState('');
  const [dgbBalance, setDgbBalance] = useState(0);
  const [usdtBalance, setUsdtBalance] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isConfirmationDialogOpen, setConfirmationDialogOpen] = useState(false);
  const [swapValue, setSwapValue] = useState(0);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    initializeWeb3();
  }, []);

  const initializeWeb3 = async () => {
    try {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);

        await window.ethereum.enable();

        const accounts = await web3Instance.eth.getAccounts();
        const address = accounts[0];
        setAccountAddress(address);
        setIsWalletConnected(true);

        const dgbBalance2 = await MBUSD_CONTRACT.methods.balanceOf(address).call();
        const dgbBalanceInEther = web3Instance.utils.fromWei(dgbBalance2, 'ether');
        setDgbBalance(dgbBalanceInEther);

        const usdtBalanceInEther = await fetchUsdtBalance();
        setUsdtBalance(usdtBalanceInEther);
        setWeb3SnackbarSeverity('success');
        setWeb3SnackbarOpen(true);
      } else {
        setWeb3SnackbarOpen(true);
        setWeb3SnackbarSeverity('error');
      }
    } catch (error) {
      console.error('Web3 initialization error:', error);
      setWeb3SnackbarOpen(true);
      setWeb3SnackbarSeverity('error');
      setIsWalletConnected(false);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchUsdtBalance = async () => {
    const balance = await MBUSD_CONTRACT.methods.balanceOf(accountAddress).call();
    return web3.utils.fromWei(balance, 'ether');
  };

  const submitSwapModal = (value) => {
    if (value < 10) {
      setSnackbarMessage('Minimum value should be 10 tokens');
      setWeb3SnackbarOpen(true);
      setWeb3SnackbarSeverity('error');
    } else {
      setSwapValue(value);
      setConfirmationDialogOpen(true);
    }
  };

  const closeConfirmationDialog = () => {
    setConfirmationDialogOpen(false);
  };

  const confirmSwap = async () => {
    closeConfirmationDialog();
    setIsLoading(true);

    try {
      const amount = web3.utils.toWei(swapValue.toString(), 'ether');

      const approveGas = await MBUSD_CONTRACT.methods.approve(DGBSWAP_CONTRACT_ADDRESS, amount).estimateGas({
        from: accountAddress
      });
      const gasPrice = await web3.eth.getGasPrice();
      await MBUSD_CONTRACT.methods.approve(DGBSWAP_CONTRACT_ADDRESS, amount).send({
        from: accountAddress,
        gas: approveGas,
        gasPrice
      });

      const swapGas = await DGBSWAP_CONTRACT.methods.swapToken(accountAddress, amount).estimateGas({
        from: accountAddress
      });
      const tx = await DGBSWAP_CONTRACT.methods.swapToken(accountAddress, amount).send({
        from: accountAddress,
        gas: swapGas,
        gasPrice
      });

      setSnackbarMessage('Transaction successful');
      setWeb3SnackbarSeverity('success');
      setWeb3SnackbarOpen(true);

      console.log('Transaction successful:', tx);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error('Swap error:', error);
      setSnackbarMessage('Error in Swap');
      setWeb3SnackbarSeverity('error');
      setWeb3SnackbarOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleWeb3SnackbarClose = () => {
    setWeb3SnackbarOpen(false);
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen
          sx={{
            position: 'absolute',
            top: '0%',
            right: '0%',
            width: '100vw',
            minHeight: '100vh',
            zIndex: '10000',
            backgroundColor: '#ffffffcf'
          }}
        >
          <CircularProgress />
        </LoadingScreen>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <SwapFrom
              dgbBalance={dgbBalance}
              usdtBalance={usdtBalance}
              web3={web3}
              fromWalletAddress={accountAddress}
              toWalletAddress={accountAddress}
              submitSwap={submitSwapModal}
            />
            <Button variant="contained" size="large" sx={{ mt: '16px' }} onClick={initializeWeb3}>
              {isWalletConnected ? 'Reconnect to Wallet' : 'Connect to Wallet'}
            </Button>
          </Grid>
        </Grid>
      )}
      <Dialog open={isConfirmationDialogOpen} onClose={closeConfirmationDialog}>
        <DialogTitle>Confirm Swap</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to swap {swapValue} tokens?</Typography>
          <Typography>Some Fees Will Deduct.</Typography>
          <Typography>DGBT: {swapValue}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeConfirmationDialog}>Cancel</Button>
          <Button color="primary" variant="contained" onClick={confirmSwap}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={web3SnackbarOpen}
        autoHideDuration={2000}
        onClose={handleWeb3SnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        sx={{ marginBottom: '20px' }}
      >
        <MuiAlert onClose={handleWeb3SnackbarClose} severity={web3SnackbarSeverity}>
          {web3SnackbarSeverity === 'success' ? 'Web3 access is available!' : snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </>
  );
}
