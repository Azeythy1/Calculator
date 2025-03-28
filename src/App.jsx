import React, { useState } from "react";
import TaxasForm from "./components/TaxasForm";
import "./styles.css";

function App() {
  // Tabela de taxas com aumento de 1,5%
  const [taxas] = useState({
    debito: 0.99 + 1.5, // Débito: 0,99% + 1,5% = 2,49%
    credito: {
      1: 2.99 + 1.5, // 1x: 2,99% + 1,5% = 4,49%
      2: 4.09 + 1.5, // 2x: 4,09% + 1,5% = 5,59%
      3: 4.78 + 1.5, // 3x: 4,78% + 1,5% = 6,28%
      4: 5.47 + 1.5, // 4x: 5,47% + 1,5% = 6,97%
      5: 6.14 + 1.5, // 5x: 6,14% + 1,5% = 7,64%
      6: 6.81 + 1.5, // 6x: 6,81% + 1,5% = 8,31%
      7: 7.67 + 1.5, // 7x: 7,67% + 1,5% = 9,17%
      8: 8.33 + 1.5, // 8x: 8,33% + 1,5% = 9,83%
      9: 8.98 + 1.5, // 9x: 8,98% + 1,5% = 10,48%
      10: 9.63 + 1.5, // 10x: 9,63% + 1,5% = 11,13%
      11: 10.26 + 1.5, // 11x: 10,26% + 1,5% = 11,76%
      12: 10.9 + 1.5, // 12x: 10,9% + 1,5% = 12,4%
      13: 12.32 + 1.5, // 13x: 12,32% + 1,5% = 13,82%
      14: 12.92 + 1.5, // 14x: 12,92% + 1,5% = 14,42%
      15: 13.56 + 1.5, // 15x: 13,56% + 1,5% = 15,06%
      16: 14.17 + 1.5, // 16x: 14,17% + 1,5% = 15,67%
      17: 14.77 + 1.5, // 17x: 14,77% + 1,5% = 16,27%
      18: 15.37 + 1.5, // 18x: 15,37% + 1,5% = 16,87%
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