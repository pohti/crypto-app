import React, { useState } from 'react';
import { Button, Table } from 'antd'
import { LoadingOutlined, ReloadOutlined } from '@ant-design/icons';


const CryptoTable = (props) => {
    const {
        cryptoData,
        loading,
        handleRefresh,
        currency
    } = props;

    const [expandedRowKeys, setExpandedRowKeys] = useState([])
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'id'
        },
        {
            title: 'Rank',
            dataIndex: 'cmc_rank',
            key: 'cmc_rank',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.cmc_rank - b.cmc_rank,
        },
        {
            title: 'Symbol',
            dataIndex: 'symbol',
            key: 'symbol'
        },
        {
            title: `Price (${currency})`,
            dataIndex: ['quote', currency, 'price'],
            key: 'name',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.quote[currency]?.price - b.quote[currency]?.price,
        },
        {
            title: '24 hour change',
            dataIndex: ['quote', currency, 'volume_change_24h'],
            key: 'name',
            // defaultSortOrder: 'descend',
            sorter: (a, b) => a.quote[currency]?.volume_change_24h - b.quote[currency]?.volume_change_24h,
        },
    ]

    const onTableRowExpand = (expanded, record) => {
        // console.log('expanded', record.id, expanded)
        const newId = record.id
        const keys = expandedRowKeys.slice();

        const index = keys.indexOf(newId);
        if (index === -1) {
          keys.push(newId);
        } else {
          keys.splice(index, 1);
        }

        setExpandedRowKeys(keys);
    }

    if (loading) return <div style={styles.loading_div}><LoadingOutlined/></div>

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
                    <Button onClick={handleRefresh}><ReloadOutlined/></Button>
                </div>
            </div>
                    
            <Table
                columns={columns}
                dataSource={cryptoData}
                loading={loading}
                rowKey={record => record.id}
                expandedRowKeys={expandedRowKeys}
                onExpand={onTableRowExpand}
                expandable={{
                    expandedRowRender: record => {
                        const {
                            quote, total_supply, max_supply
                        } = record
                        return (
                            <div style={styles.collapse_row} key={record.id}>
                                <div style={styles.bitcoin_info}>
                                    <div>{currency}</div>
                                    <div>Market cap: {quote[currency]?.market_cap}</div>
                                    <div>Volume 24h: {quote[currency]?.volume_24h}</div>
                                    <div>Percent change 24h: {quote[currency]?.percent_change_24h}</div>
                                    <div>Total supply: {total_supply}</div>
                                    <div>Max supply: {max_supply}</div>
                                </div>
                            </div>
                        )
                    },
                    rowExpandable: (record) => record.id,
                  }}
            />
        </div>
    )
}

const styles = {
    loading_div: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        padding: '20px',
    },
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
}

export default CryptoTable;