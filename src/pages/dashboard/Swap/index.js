/* eslint-disable object-shorthand */
/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import { Grid, Snackbar, Button } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import Web3 from 'web3';
import SwapFrom from './SwapForm';
import LoadingScreen from '../../../components/LoadingScreenPleaseWait';
import { DGBSWAP_CONTRACT, MBUSD_CONTRACT, DGBSWAP_CONTRACT_ADDRESS, CONTRACT_ADDRESS_MBUSD } from './WalletAddress';

export default function S() {
  const [web3, setWeb3] = useState(false);
  const [web3SnackbarOpen, setWeb3SnackbarOpen] = useState(false);
  const [web3SnackbarSeverity, setWeb3SnackbarSeverity] = useState('success');
  const [web3SnackbarOpen2, setWeb3SnackbarOpen2] = useState(false);
  const [web3SnackbarSeverity2, setWeb3SnackbarSeverity2] = useState('success');
  const [accountAddress, setAccountAddress] = useState('');
  const [dgbBalance, setDgbBalance] = useState(0);
  const [usdtBalance, setUsdtBalance] = useState(0);
  const [web3InstanceState, setweb3InstanceState] = useState('');
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const initializeWeb3 = async () => {
    if (window.ethereum) {
      try {
        setWeb3(true);
        // Initialize Web3 with the current provider (MetaMask)
        const web3Instance = new Web3(window.ethereum);
        setweb3InstanceState(web3Instance);

        // Request access to the user's accounts
        await window.ethereum.enable();

        // Fetch the account address
        const accounts = await web3Instance.eth.getAccounts();
        const address = accounts[0];
        setAccountAddress(address);

        // Fetch the wallet balances
        const dgbBalance2 = await MBUSD_CONTRACT.methods.balanceOf(address).call();
        setDgbBalance(web3Instance.utils.fromWei(await dgbBalance2, 'ether'));
        const usdtBalance = await fetchUsdtBalance();
        setUsdtBalance(usdtBalance);

        setWeb3SnackbarOpen(true);
        setWeb3SnackbarSeverity('success');
      } catch (error) {
        console.error(error);
        setWeb3SnackbarOpen(true);
        setWeb3SnackbarSeverity('error');
      }
    } else {
      setWeb3SnackbarOpen(true);
      setWeb3SnackbarSeverity('error');
      setWeb3(false);
    }
  };

  useEffect(() => {
    initializeWeb3();
  }, []);

  const handleWeb3SnackbarClose = () => {
    setWeb3SnackbarOpen(false);
  };

  const fetchUsdtBalance = async () => {
    // Implement logic to fetch USDT balance using Web3 or your preferred method
    // Example: const balance = await usdtContract.methods.balanceOf(accountAddress).call();
    // Ensure you return the balance as a numeric value

    return 0;
  };

  const submitSwap = async (value) => {
    setWeb3(false);
    setIsLoading(true);
    try {
      if (value >= 10) {
        const amount = web3InstanceState.utils.toWei(value.toString(), 'ether');

        // Estimate gas
        const gas = await MBUSD_CONTRACT.methods.approve(DGBSWAP_CONTRACT_ADDRESS, amount).estimateGas({
          from: accountAddress
        });

        // Increase gas price to ensure the transaction gets processed
        const gasPrice = await web3InstanceState.eth.getGasPrice();

        const tx = await MBUSD_CONTRACT.methods.approve(DGBSWAP_CONTRACT_ADDRESS, amount).send({
          from: accountAddress,
          gas: gas,
          gasPrice: gasPrice // You can adjust the gasPrice if needed
        });

        console.log('Transaction successful:', tx);

        // Show a success message in the Snackbar
        setSnackbarMessage('Aprroved Transaction successful Please do not Quit');
        setWeb3SnackbarOpen2(true);
        setWeb3SnackbarSeverity2('success');
        setTimeout(async () => {
          const gas = await DGBSWAP_CONTRACT.methods.swapToken(accountAddress, amount).estimateGas({
            from: accountAddress
          });

          // Increase gas price to ensure the transaction gets processed
          const gasPrice = await web3InstanceState.eth.getGasPrice();

          const tx = await DGBSWAP_CONTRACT.methods.swapToken(accountAddress, amount).send({
            from: accountAddress,
            gas: gas,
            gasPrice: gasPrice // You can adjust the gasPrice if needed
          });
          setWeb3(true);
          setIsLoading(false);
          setSnackbarMessage('Transaction successful');
          setWeb3SnackbarSeverity2('success');
          setWeb3SnackbarOpen2(true);

          console.log('Transaction successful:', tx);
        }, 1000);
      } else {
        // Show an error message in the Snackbar
        setSnackbarMessage('Minimum value should be 10 tokens');
        setWeb3SnackbarOpen2(true);
        setWeb3SnackbarSeverity2('error');
        setWeb3(true);
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error:', error);

      // Show an error message in the Snackbar
      setSnackbarMessage('Error in Approve');
      setWeb3SnackbarOpen2(true);
      setWeb3SnackbarSeverity2('error');
      setWeb3(true);
      setIsLoading(false);
    }
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
        />
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <SwapFrom
              dgbBalance={dgbBalance}
              usdtBalance={usdtBalance}
              web3={web3}
              fromWalletAddress={accountAddress}
              toWalletAddress={accountAddress}
              submitSwap={submitSwap}
            />
            <Button variant="contained" size="large" sx={{ mt: '16px' }}>
              {web3 ? 'Reconnect to Wallet' : 'Connect to Wallet'}
            </Button>
          </Grid>
          <Snackbar
            open={web3SnackbarOpen}
            autoHideDuration={2000}
            onClose={handleWeb3SnackbarClose}
            anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
            sx={{ marginBottom: '40px' }}
          >
            <MuiAlert onClose={handleWeb3SnackbarClose} severity={web3SnackbarSeverity}>
              {web3SnackbarSeverity === 'success'
                ? 'Web3 access is available!'
                : 'Web3 access is not available. Please connect a wallet.'}
            </MuiAlert>
          </Snackbar>
          <Snackbar
            open={web3SnackbarOpen2 && web3SnackbarSeverity2 === 'error'}
            autoHideDuration={3000}
            onClose={handleWeb3SnackbarClose}
            anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
            sx={{ marginBottom: '20px' }}
          >
            <MuiAlert onClose={handleWeb3SnackbarClose} severity="error">
              {snackbarMessage}
            </MuiAlert>
          </Snackbar>
        </Grid>
      )}
    </>
  );
}
