import React, { useState } from 'react';
import TaxasForm from './components/TaxasForm';
import './styles.css';

function App() {
  // Taxas atualizadas (+3.5% sobre os valores iniciais)
  const [taxas] = useState({
    debito: 0.99 + 3.5, // 4.49%
    credito: {
      1: 2.99 + 3.5,   // 6.49%
      2: 4.09 + 3.5,   // 7.59%
      3: 4.78 + 3.5,    // 8.28%
      4: 5.47 + 3.5,    // 8.97%
      5: 6.14 + 3.5,    // 9.64%
      6: 6.81 + 3.5,    // 10.31%
      7: 7.67 + 3.5,    // 11.17%
      8: 8.33 + 3.5,    // 11.83%
      9: 8.98 + 3.5,    // 12.48%
      10: 9.63 + 3.5,   // 13.13%
      11: 10.26 + 3.5,  // 13.76%
      12: 10.9 + 3.5,   // 14.4%
      13: 12.32 + 3.5,  // 15.82%
      14: 12.92 + 3.5,  // 16.42%
      15: 13.56 + 3.5,  // 17.06%
      16: 14.17 + 3.5,  // 17.67%
      17: 14.77 + 3.5,  // 18.27%
      18: 15.37 + 3.5   // 18.87%
    }
  });

  return (
    <div className="app-container">
      <h1 className="app-title">Calculadora de Taxas</h1>
      <TaxasForm taxas={taxas} />
    </div>
  );
}

export default App;