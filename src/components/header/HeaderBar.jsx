import React, { useState } from 'react';

const HeaderBar = () => {
    return (
        <div style={styles.header_bar}>
            <div>Icon</div>
            <div>Settings</div>
        </div>
    )
}

const styles = {
    header_bar: {
        display: 'flex',
        gap: '10px',
        border: '1px solid red',
    },
    logo: {
        
    },
    settings: {

    }
  }

export default HeaderBar;