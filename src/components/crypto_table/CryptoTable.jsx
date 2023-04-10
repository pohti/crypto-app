import React, { useEffect, useState } from 'react';
import { getLatestCryptoData } from '../../api/crypto';

const CryptoTable = () => {
    const [cryptoData, setCryptoData] = useState([]);
    const [loading, setLoading] = useState(false);

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
    }, []);

    if (loading) return <div>Loading...</div>

    return (
        <div style={styles.table_div}>
            <div style={styles.table_info_row}>
                <div>Total items {cryptoData.length}</div>
                <div>
                    <button>Reload</button>
                </div>
            </div>
            <div>
                Table goes here
            </div>
        </div>
    )
}

const styles = {
    table_div: {
        height: '100%',
        border: '1px solid blue',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px 5px',
        padding: '10px 5px',
    },
    table_info_row: {
        display: 'flex',
        gap: '10px 5px'
    }
}

export default CryptoTable;