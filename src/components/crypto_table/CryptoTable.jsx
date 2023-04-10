import React, { Fragment, useEffect, useState } from 'react';
import { getLatestCryptoData } from '../../api/crypto';
import IconButton from '@mui/material/IconButton';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const CustomTableRow = ({current, currency}) => {
    const [open, setOpen] = useState(false);

    return (
        <Fragment>
            <TableRow>
                {/* expand button */}
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>

                <TableCell component="th" scope="row">{current.name}</TableCell>
                <TableCell align="right">{current.cmc_rank}</TableCell>
                <TableCell align="right">{current.symbol}</TableCell>
                <TableCell align="right">{current.quote[currency].price}</TableCell>
                <TableCell align="right">{current.quote[currency].volume_change_24h}</TableCell>
            </TableRow>
        </Fragment>
    )
}

const CryptoTable = () => {
    const [cryptoData, setCryptoData] = useState([]);
    const [currency, setCurrency] = useState('USD');
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

    if (loading) return <div>Loading...</div>

    return (
        <div style={styles.table_div}>
            <div style={styles.table_info_row}>
                <div>Total items {cryptoData.length}</div>
                <div>
                    <button onClick={fetchCryptoData}>Reload</button>
                </div>
            </div>
            <TableContainer>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Rank</TableCell>
                            <TableCell align="right">Symbol</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">24 hr change</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cryptoData.map(current => (
                            <CustomTableRow key={current.id} current={current} currency={currency}/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
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