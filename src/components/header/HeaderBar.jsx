import React from 'react';

const HeaderBar = ({ handleCurrencyChange }) => {
    return (
        <div style={styles.header_bar}>
            <div style={styles.logo}>
                <h2>Crypto Tracker</h2>
            </div>
            <div style={styles.currency_select_div}>
                <select style={{
                    maxHeight: '30px',
                    width: '70px'
                }}
                    onChange={event => {
                        handleCurrencyChange(event.target.value)
                    }}
                >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="CNY">CNY</option>
                    <option value="BTC">Bitcoin</option>
                </select>
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