import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Tabs, Tab, FormControl } from '@material-ui/core';

const availableExchanges = ['Binance', 'Coinbase Pro', 'Kraken', 'Bitstamp', 'Bittrex', 'Gemini'];
const defaultExchange = 'Binance';

const TradingViewChart = ({ theme }) => {
  const [selectedExchange, setSelectedExchange] = useState(defaultExchange);

  const handleTabChange = (event, newValue) => {
    console.log('newValue', newValue);
    setSelectedExchange(availableExchanges[newValue]);
  };

  return (
    <Card>
      <CardContent>
        <FormControl fullWidth>
          <Tabs
            value={availableExchanges.indexOf(selectedExchange)}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            {availableExchanges.map((exchange) => (
              <Tab key={exchange} label={exchange} disabled />
            ))}
          </Tabs>
        </FormControl>
        <iframe
          title="TradingView Chart"
          src={`/TradingViewChart.html?theme=${theme}&exchange=${selectedExchange}`}
          style={{
            width: '100%',
            height: '480px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            overflow: 'hidden',
            marginTop: '10px'
          }}
        />
      </CardContent>
    </Card>
  );
};

TradingViewChart.propTypes = {
  theme: PropTypes.string
};

export default TradingViewChart;
