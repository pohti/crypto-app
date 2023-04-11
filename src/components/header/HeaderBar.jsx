import React from 'react';
import { Select } from 'antd';

const HeaderBar = ({ handleCurrencyChange }) => {
    return (
        <div style={styles.header_bar}>
            <div style={styles.logo}>
                <h2>Crypto Tracker</h2>
            </div>
            <div style={styles.currency_select_div}>
                <Select
                    defaultValue="USD"
                    style={{ width: 120 }}
                    onChange={handleCurrencyChange}
                    options={[
                        { value: 'USD', label: 'USD' },
                        { value: 'EUR', label: 'EUR' },
                        { value: 'CNY', label: 'CNY' },
                        { value: 'BTC', label: 'Bitcoin' },
                    ]}
                />
            </div>
        </div>
    )
}

const styles = {
    header_bar: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        padding: '5px 15px',
        paddingTop: '10px',
        borderBottom: '1px solid #ccc',
    },
    logo: {
        flexGrow: 5,
        // border: '1px solid red',
    },
    currency_select_div: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: '10px',
        // border: '1px solid blue',
    }
  }

export default HeaderBar;