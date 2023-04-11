import React, { Fragment, useState } from 'react';
import { Table } from 'antd'


const CryptoTable = (props) => {
    const {
        cryptoData,
        loading,
        handleRefresh,
        currency
    } = props;

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Rank',
            dataIndex: 'cmc_rank',
            key: 'cmc_rank'
        },
        {
            title: 'Symbol',
            dataIndex: 'symbol',
            key: 'symbol'
        },
        {
            title: 'Price',
            dataIndex: ['quote', currency, 'price'],
            key: 'name'
        },
        {
            title: '24 hour change',
            dataIndex: ['quote', currency, 'volume_change_24h'],
            key: 'name'
        },
    ]

    if (loading) return <div>Loading...</div>

    // if (cryptoData.length === 0) return <div>No data</div>

    return (
        <div style={styles.table_div}>
            <div style={styles.table_info_row}>
                <div style={{ flexGrow: 5 }}>Total items {cryptoData.length}</div>
                <div style={{ 
                        flexGrow: 1,
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}>
                    <button>Reload</button>
                </div>
            </div>
                    
            <Table
                columns={columns}
                dataSource={cryptoData}
                loading={loading}
            />
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
        gap: '10px 5px',
        padding: '5px 15px'
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