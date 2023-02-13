import React from 'react';
import './App.css';
import styles from './App.module.css';
import Grid from './components/grid';

function App() {
  return (
    <div className={styles.app}>
      <Grid />
    </div>
  );
}

export default App;
