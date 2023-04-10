import HeaderBar from './components/header/HeaderBar';
import CryptoTable from './components/crypto_table/CryptoTable';

function App() {

  return (
    <div style={styles.main}>
      <HeaderBar/>
      <div style={styles.body}>
        <CryptoTable />
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
