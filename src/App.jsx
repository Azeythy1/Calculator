import React, { useState } from 'react';
import TaxasForm from './components/TaxasForm';
import './styles.css';
import Footer from './components/footer';

function App() {
  const [taxas] = useState({
    debito: 1.2,
    credito: {
      1: 3.5, 
      2: 4.9, 
      3: 5.5, 
      4: 6.0, 
      5: 6.9, 
      6: 7.6, 
      7: 8.6, 
      8: 9.3, 
      9: 9.5,
      10: 10.5, 
      11: 11.3, 
      12: 12.0, 
      13: 13.4, 
      14: 13.9, 
      15: 14.4, 
      16: 13.3, 
      17: 15.9, 
      18: 16.7
    }
  });

  return (
    <>
      <div className="app-container">
        <h1 className="app-title">Calculadora de Taxas</h1>
        <TaxasForm taxas={taxas} />
      </div>
      <Footer />
    </>
  );
}

export default App;
