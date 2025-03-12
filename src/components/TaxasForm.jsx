import React, { useState } from "react";
import CalculoLucro from "./CalculoLucro";

function TaxasForm({ taxas }) {
  const [valorAVista, setValorAVista] = useState("");
  const [entrada, setEntrada] = useState("");
  const [parcelas, setParcelas] = useState(1);
  const [erro, setErro] = useState("");
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [valorAParcelar, setValorAParcelar] = useState(0);
  const [taxa, setTaxa] = useState(0);

  const calcular = () => {
    // Validações de entrada
    if (!valorAVista || !entrada) {
      setErro("Por favor, preencha todos os campos.");
      return;
    }

    const valorA = parseFloat(valorAVista);
    const valorB = parseFloat(entrada);

    if (isNaN(valorA) || isNaN(valorB)) {
      setErro("Por favor, insira valores numéricos válidos.");
      return;
    }

    if (valorB >= valorA) {
      setErro("O valor de entrada deve ser menor que o valor à vista.");
      return;
    }

    const valorC = valorA - valorB; // C = A - B
    const taxaParcelas = parcelas === 1 ? taxas.debito / 100 : taxas.credito[parcelas] / 100;

    setValorAParcelar(valorC);
    setTaxa(taxaParcelas);
    setMostrarResultado(true); // Exibe o resultado
    setErro(""); // Limpa mensagens de erro
  };

  return (
    <div className="container">
      <div>
        <label>Valor à Vista (A):</label>
        <input
          type="number"
          value={valorAVista}
          onChange={(e) => setValorAVista(e.target.value)}
        />
      </div>
      <div>
        <label>Valor de Entrada (B):</label>
        <input
          type="number"
          value={entrada}
          onChange={(e) => setEntrada(e.target.value)}
        />
      </div>
      <div>
        <label>Parcelas (D):</label>
        <select value={parcelas} onChange={(e) => setParcelas(parseInt(e.target.value))}>
          {[...Array(18).keys()].map((i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}x
            </option>
          ))}
        </select>
      </div>
      <button onClick={calcular}>Calcular</button>
      {erro && <p style={{ color: "red" }}>{erro}</p>}
      {mostrarResultado && (
        <CalculoLucro valorAParcelar={valorAParcelar} taxa={taxa} />
      )}
    </div>
  );
}

export default TaxasForm;