import React, { Fragment, useEffect, useState } from 'react';
import { getLatestCryptoData } from '../../api/crypto';

// material ui
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import RefreshIcon from '@mui/icons-material/Refresh';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Divider from '@mui/material/Divider';

const CustomTableRow = ({current, currency}) => {
    const {
        name,
        cmc_rank,
        symbol,
        total_supply,
        max_supply,
        quote
    } = current;
    const [open, setOpen] = useState(false);

    return (
        <Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
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

                <TableCell component="th" scope="row">{name}</TableCell>
                <TableCell align="right">{cmc_rank}</TableCell>
                <TableCell align="right">{symbol}</TableCell>
                <TableCell align="right">{quote[currency].price}</TableCell>
                <TableCell align="right">{quote[currency].volume_change_24h}</TableCell>
            </TableRow>

            {/* expandable row */}
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <div style={styles.collapse_row}>
                            <div style={styles.bitcoin_info}>
                                <h3>BTC</h3>
                                <div><label><b>Price</b>:</label> <span>{quote.BTC.price}</span></div>
                                <div><label><b>24 hr volume change</b>:</label> <span>{quote.BTC.volume_change_24h} BTC</span></div>
                                <div><label><b>24 hr percentage change</b>:</label> <span>{quote.BTC.percent_change_24h}</span></div>
                                <div><label><b>Market Cap</b>:</label> <span>{quote.BTC.market_cap} BTC</span></div>
                            </div>
                            <Divider style={{order: 2}} orientation="vertical" flexItem />
                            <div style={styles.other_info}>
                                <h3>{currency}</h3>
                                <div><label><b>Price</b>:</label> <span>{quote[currency].price}</span></div>
                                <div><label><b>24 hr volume change</b>:</label> <span>{quote[currency].volume_change_24h}</span></div>
                                <div><label><b>24 hr percentage change</b>:</label> <span>{quote[currency].percent_change_24h}</span></div>
                                <div><label><b>Market Cap</b>:</label> <span>{quote[currency].market_cap}</span></div>
                            </div>
                            <Divider style={{order: 4}} orientation="vertical" flexItem />
                            <div style={styles.other_info2}>
                                <div><label><b>Total supply</b>:</label> <span>{total_supply}</span></div>
                                <div><label><b>Max supply</b>:</label> <span>{max_supply}</span></div>
                            </div>
                        </div>
                    </Collapse>
                </TableCell>
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
                <div style={{ flexGrow: 5 }}>Total items {cryptoData.length}</div>
                <div style={{ 
                        flexGrow: 1,
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}>
                    <Button variant="contained" onClick={fetchCryptoData}>
                        <RefreshIcon/>
                    </Button>
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
        // border: '1px solid blue',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px 5px',
        padding: '10px 5px',
    },
    table_info_row: {
        display: 'flex',
        gap: '10px 5px'
    },
    collapse_row: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px 5px',
        // border: '1px solid blue',
        padding: '10px 5px'
    },
    bitcoin_info: {
        display: 'flex',
        flexDirection: 'column',
        order: 1,
        gap: '5px 5px',
        minWidth: '300px',
        marginLeft: '15px',
        marginBottom: '10px'
        // border: '1px solid red',
    },
    other_info: {
        display: 'flex',
        flexDirection: 'column',
        order: 3,
        gap: '5px 5px',
        minWidth: '300px',
        marginLeft: '15px',
        // border: '1px solid green',
    },
    other_info2: {
        display: 'flex',
        flexDirection: 'column',
        order: 5,
        gap: '5px 5px',
        minWidth: '300px',
        marginLeft: '15px',
        paddingTop: '15px'
        // border: '1px solid green',
    }
}

export default CryptoTable;