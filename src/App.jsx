import HeaderBar from './components/header/HeaderBar';
import CryptoTable from './components/crypto_table/CryptoTable';

function App() {
  return (
    <div style={styles.main}>
      <HeaderBar />
      <div className="body-div">
        <CryptoTable />
      </div>
    </div>
  );
}

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
  }
}

export default App;
