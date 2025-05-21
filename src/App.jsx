import React, { useState } from 'react';
import TaxasForm from './components/TaxasForm';
import './styles.css';
import Footer from './components/footer';

function App() {
  const [taxas] = useState({
    debito: 1.5,
    credito: {
      1: 4.0, 2: 4.7, 3: 5.8, 4: 6.8, 5: 7.9, 6: 9.0, 7: 9.4, 8: 10.5, 9: 11.5,
      10: 13, 11: 14.0, 12: 16.5, 13: 17.5, 14: 18.5, 15: 19.0, 16: 20.0, 17: 22.0, 18: 24.0
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