import React, { useEffect, useState } from 'react';
import HeaderBar from './components/header/HeaderBar';
import CryptoTable from './components/crypto_table/CryptoTable';
import { getLatestCryptoData } from './api/crypto.js';

function App() {
  const [currency, setCurrency] = useState('USD');
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCryptoData = async () => {
      try {
          setLoading(true);
          const {status, data: cryptoData} = await getLatestCryptoData();
          console.log('status: ', status)
          console.log('cryptoData: ', cryptoData)
          setCryptoData(cryptoData);
      }
      catch (eInfo) {
          console.error('Error fetching crypto data: ', eInfo)
      }
      finally {
          setLoading(false);
      }
  }

  useEffect(() => {
      const fetchCryptoData = async () => {
          try {
              setLoading(true);
              const {status, data: cryptoData} = await getLatestCryptoData();
              console.log('status: ', status)
              console.log('cryptoData: ', cryptoData)
              setCryptoData(cryptoData);
          }
          catch (eInfo) {
              console.error('Error fetching crypto data: ', eInfo)
          }
          finally {
              setLoading(false);
          }
      }
      fetchCryptoData();
      console.log('i fire once');
  }, []);

  const handleCurrencyChange = newCurrency => {
    console.log('newCurrency: ', newCurrency)
    setCurrency(newCurrency);
  }

  return (
    <div style={styles.main}>
      <HeaderBar setCurrency={setCurrency}/>
      <div style={styles.body} >
        <CryptoTable 
          cryptoData={cryptoData}
          loading={loading}
          handleRefresh={fetchCryptoData}
          currency={currency} 
        />
      </div>
    </div>
  );
}

const styles = {
  main: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    height: '100%',
    // border: '1px solid green',
  },
  body: {
    height: '100%',
  }
}

export default App;
