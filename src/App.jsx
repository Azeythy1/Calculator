import React, { useState } from "react";
import TaxasForm from "./components/TaxasForm";
import ConfiguracoesForm from "./components/ConfiguracoesForm";
import "./styles.css";

function App() {
  const [taxas, setTaxas] = useState({
    debito: 0.99,
    credito: {
      1: 2.99,
      2: 4.09,
      3: 4.78,
      4: 5.47,
      5: 6.14,
      6: 6.81,
      7: 7.67,
      8: 8.33,
      9: 8.98,
      10: 9.63,
      11: 10.26,
      12: 10.9,
      13: 12.32,
      14: 12.92,
      15: 13.56,
      16: 14.17,
      17: 14.77,
      18: 15.37,
    },
  });

  const [incremento, setIncremento] = useState(0.2); // Incremento padrão: 0,2%
  const [mostrarConfiguracoes, setMostrarConfiguracoes] = useState(false);

  return (
    <div className="App">
      <h1>Calculadora de Taxas</h1>
      <TaxasForm
        taxas={taxas}
        incremento={incremento}
        setMostrarConfiguracoes={setMostrarConfiguracoes}
      />
      {mostrarConfiguracoes && (
        <ConfiguracoesForm
          taxas={taxas}
          setTaxas={setTaxas}
          incremento={incremento}
          setIncremento={setIncremento}
          setMostrarConfiguracoes={setMostrarConfiguracoes}
        />
      )}
    </div>
  );
}

export default App;