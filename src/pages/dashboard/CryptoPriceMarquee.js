import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './style.css';

const CryptoPriceMarquee = () => {
  const [cryptoPrices, setCryptoPrices] = useState([]);
  const [exchanges, setExchanges] = useState([]);
  const marqueeRef = useRef(null);
  const isVisibleRef = useRef(false);

  const fetchExchanges = async () => {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/exchanges');
      setExchanges(response.data);

      // Save exchange images to localStorage
      const exchangeImages = {};
      response.data.forEach((exchange) => {
        exchangeImages[exchange.id] = {
          url: exchange.image,
          loaded: false // Initialize the loaded status as false
        };

        // Load the image in the background to check if it's valid
        const image = new Image();
        image.src = exchange.image;
        image.onload = () => {
          // Set the loaded status to true if the image loads successfully
          exchangeImages[exchange.id].loaded = true;
          localStorage.setItem('exchangeImages', JSON.stringify(exchangeImages));
        };
        image.onerror = () => {
          // Set the loaded status to false if the image fails to load
          exchangeImages[exchange.id].loaded = false;
          localStorage.setItem('exchangeImages', JSON.stringify(exchangeImages));
        };
      });
    } catch (error) {
      console.error('Error fetching exchanges:', error);
    }
  };

  const fetchCryptoPrices = async () => {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/digibyte/tickers');

      // Assuming the response format is like: { bitcoin: { usd: 40000 }, ethereum: { usd: 2500 }, ... }
      const prices = response.data.tickers;
      // Save to localStorage
      console.log('prices', prices);

      localStorage.setItem('cryptoPrices', JSON.stringify(prices));

      if (isVisibleRef.current) {
        setCryptoPrices(prices);
      }
    } catch (error) {
      console.error('Error fetching crypto prices:', error);
    }
  };

  useEffect(() => {
    const savedExchangeImages = localStorage.getItem('exchangeImages');
    if (savedExchangeImages) {
      setExchanges(JSON.parse(savedExchangeImages));
    } else {
      fetchExchanges();
    }
    // Load prices from localStorage
    const savedPrices = localStorage.getItem('cryptoPrices');
    if (savedPrices) {
      setCryptoPrices(JSON.parse(savedPrices));
    }

    const handleVisibilityChange = (entries) => {
      const isVisible = entries[0].isIntersecting;
      isVisibleRef.current = isVisible;
      if (isVisible) {
        fetchCryptoPrices();
      }
    };

    const observer = new IntersectionObserver(handleVisibilityChange, {
      threshold: 0.5 // You can adjust this threshold based on your needs
    });

    if (marqueeRef.current) {
      observer.observe(marqueeRef.current);
    }

    const interval = setInterval(fetchCryptoPrices, 60000); // Fetch prices every 4 minute
    fetchCryptoPrices(); // Initial fetch
    return () => {
      clearInterval(interval);
      if (marqueeRef.current) {
        observer.unobserve(marqueeRef.current);
      }
    };
  }, []);

  return (
    <div className="marquee-container">
      <ul className="marquee" ref={marqueeRef}>
        {cryptoPrices.map(
          (crypto) =>
            crypto.last >= 0.00001 && (
              <div className="marquee-item" key={crypto.id}>
                <a href={crypto.trade_url} target="_blank" rel="noopener noreferrer" className="exchange-link">
                  <div className="crypto-logo-container">
                    <li>
                      <img
                        src={exchanges[crypto.market.identifier]}
                        alt={crypto.market.name}
                        className="exchange-logo"
                      />

                      {`${crypto.market.name}`}
                    </li>
                  </div>
                  <li>
                    {`${crypto.base}/${crypto.target}: `}
                    <span className={`crypto-price ${crypto.trust_score === 'green' ? 'green' : ''}`}>
                      ${parseFloat(crypto.last).toFixed(5)}
                    </span>
                  </li>
                </a>
              </div>
            )
        )}
      </ul>
    </div>
  );
};

export default CryptoPriceMarquee;
