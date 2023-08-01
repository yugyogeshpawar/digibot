import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './style.css';

const CryptoPriceMarquee = () => {
  const [cryptoPrices, setCryptoPrices] = useState(() => JSON.parse(localStorage.getItem('cryptoPrices')) || []);
  const [exchangeImages, setExchangeImages] = useState(() => JSON.parse(localStorage.getItem('exchangeImages')) || {});
  const marqueeRef = useRef(null);
  const isVisibleRef = useRef(false);

  const fetchExchanges = async () => {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/exchanges');
      const exchangeImages = {};

      response.data.forEach((exchange) => {
        exchangeImages[exchange.id] = {
          url: exchange.image,
          loaded: false
        };

        const image = new Image();
        image.src = exchange.image;
        image.onload = () => {
          exchangeImages[exchange.id].loaded = true;
        };
        image.onerror = () => {
          exchangeImages[exchange.id].loaded = false;
        };
      });

      localStorage.setItem('exchangeImages', JSON.stringify(exchangeImages));
      setExchangeImages(exchangeImages);
    } catch (error) {
      console.error('Error fetching exchanges:', error);
    }
  };

  const fetchCryptoPrices = async () => {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/digibyte/tickers');
      const prices = response.data.tickers;

      if (isVisibleRef.current) {
        localStorage.setItem('cryptoPrices', JSON.stringify(prices));
        setCryptoPrices(prices);
      }
    } catch (error) {
      console.error('Error fetching crypto prices:', error);
    }
  };

  useEffect(() => {
    if (!exchangeImages.length) {
      fetchExchanges();
    }

    const handleVisibilityChange = (entries) => {
      const isVisible = entries[0].isIntersecting;
      isVisibleRef.current = isVisible;
      if (isVisible) {
        fetchCryptoPrices();
      }
    };

    const observer = new IntersectionObserver(handleVisibilityChange, {
      threshold: 0.5
    });

    if (marqueeRef.current) {
      observer.observe(marqueeRef.current);
    }

    const interval = setInterval(fetchCryptoPrices, 240000);
    if (!cryptoPrices.length) {
      fetchCryptoPrices();
    }

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
            crypto.last >= 0.00001 &&
            exchangeImages[crypto.market.identifier] &&
            exchangeImages[crypto.market.identifier].loaded && (
              <div className="marquee-item" key={crypto.id}>
                <a href={crypto.trade_url} target="_blank" rel="noopener noreferrer" className="exchange-link">
                  <div className="crypto-logo-container">
                    <li>
                      <img
                        src={exchangeImages[crypto.market.identifier].url}
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
