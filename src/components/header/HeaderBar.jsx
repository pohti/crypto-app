import React, { useState } from 'react';

const HeaderBar = () => {
    return (
        <div style={styles.header_bar}>
            <div style={styles.logo}>
                <b>Crypto Tracker</b>
            </div>
            <div>Settings</div>
        </div>
    )
}

const styles = {
    header_bar: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        border: '1px solid red',
        padding: '5px 10px',
        paddingTop: '10px',
        height: '25px',
    },
    logo: {
        
    },
    settings: {
    }
  }

export default HeaderBar;