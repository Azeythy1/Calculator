import React, { useState } from "react";

function ConfiguracoesForm({
  taxas,
  setTaxas,
  incremento,
  setIncremento,
  setMostrarConfiguracoes,
}) {
  const [novoIncremento, setNovoIncremento] = useState(incremento);
  const [novasTaxas, setNovasTaxas] = useState(taxas);

  const salvarConfiguracoes = () => {
    setIncremento(novoIncremento);
    setTaxas(novasTaxas);
    setMostrarConfiguracoes(false);
  };

  return (
    <div className="configuracoes">
      <h2>Configurações</h2>
      <div>
        <label>Incremento da Taxa (%):</label>
        <input
          type="number"
          value={novoIncremento}
          onChange={(e) => setNovoIncremento(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <h3>Taxas de Crédito:</h3>
        {[...Array(18).keys()].map((i) => (
          <div key={i + 1}>
            <label>{i + 1}x:</label>
            <input
              type="number"
              value={novasTaxas.credito[i + 1]}
              onChange={(e) =>
                setNovasTaxas({
                  ...novasTaxas,
                  credito: { ...novasTaxas.credito, [i + 1]: parseFloat(e.target.value) },
                })
              }
            />
          </div>
        ))}
      </div>
      <button onClick={salvarConfiguracoes}>Salvar</button>
    </div>
  );
}

export default ConfiguracoesForm;