import React, { useState } from "react";
import TaxasForm from "./components/TaxasForm";
import "./styles.css";

function App() {
  // Tabela de taxas com aumento de 0,2%
  const [taxas] = useState({
    debito: 0.99 + 0.2, // Débito: 0,99% + 0,2% = 1,19%
    credito: {
      1: 2.99 + 0.2, // 1x: 2,99% + 0,2% = 3,19%
      2: 4.09 + 0.2, // 2x: 4,09% + 0,2% = 4,29%
      3: 4.78 + 0.2, // 3x: 4,78% + 0,2% = 4,98%
      4: 5.47 + 0.2, // 4x: 5,47% + 0,2% = 5,67%
      5: 6.14 + 0.2, // 5x: 6,14% + 0,2% = 6,34%
      6: 6.81 + 0.2, // 6x: 6,81% + 0,2% = 7,01%
      7: 7.67 + 0.2, // 7x: 7,67% + 0,2% = 7,87%
      8: 8.33 + 0.2, // 8x: 8,33% + 0,2% = 8,53%
      9: 8.98 + 0.2, // 9x: 8,98% + 0,2% = 9,18%
      10: 9.63 + 0.2, // 10x: 9,63% + 0,2% = 9,83%
      11: 10.26 + 0.2, // 11x: 10,26% + 0,2% = 10,46%
      12: 10.9 + 0.2, // 12x: 10,9% + 0,2% = 11,1%
      13: 12.32 + 0.2, // 13x: 12,32% + 0,2% = 12,52%
      14: 12.92 + 0.2, // 14x: 12,92% + 0,2% = 13,12%
      15: 13.56 + 0.2, // 15x: 13,56% + 0,2% = 13,76%
      16: 14.17 + 0.2, // 16x: 14,17% + 0,2% = 14,37%
      17: 14.77 + 0.2, // 17x: 14,77% + 0,2% = 14,97%
      18: 15.37 + 0.2, // 18x: 15,37% + 0,2% = 15,57%
    },
  });

  return (
    <div className="app-container">
      <h1 className="app-title">Calculadora de Taxas</h1>
      <TaxasForm taxas={taxas} />
    </div>
  );
}

export default App;