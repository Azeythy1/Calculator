import React, { useState } from "react";

function TaxasForm({ taxas }) {
  const [valorAVista, setValorAVista] = useState("");
  const [entrada, setEntrada] = useState("");
  const [parcelas, setParcelas] = useState(1);
  const [erro, setErro] = useState("");
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [valorAParcelar, setValorAParcelar] = useState(0);
  const [valorParcelado, setValorParcelado] = useState(0);

  // Função para arredondar o valor para o próximo múltiplo de 5 ou 10
  const arredondarValor = (valor) => {
    const ultimoDigito = valor % 10; // Pega o último dígito do número
    if (ultimoDigito === 0 || ultimoDigito === 5) {
      return valor; // Já é múltiplo de 5 ou 10
    } else if (ultimoDigito < 5) {
      return valor - ultimoDigito + 5; // Arredonda para cima para o próximo 5
    } else {
      return valor - ultimoDigito + 10; // Arredonda para cima para o próximo 10
    }
  };

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

    // Calcula o valor parcelado
    let valorP = valorC * (1 + taxaParcelas);

    // Arredonda o valor parcelado
    valorP = arredondarValor(valorP);

    setValorAParcelar(valorC);
    setValorParcelado(valorP);
    setMostrarResultado(true); // Exibe o resultado
    setErro(""); // Limpa mensagens de erro
  };

  return (
    <div className="taxas-form-container">
      <div className="input-group">
        <label className="input-label">Valor à Vista:</label>
        <input
          type="number"
          value={valorAVista}
          onChange={(e) => setValorAVista(e.target.value)}
          className="input-field"
        />
      </div>
      <div className="input-group">
        <label className="input-label">Valor de Entrada:</label>
        <input
          type="number"
          value={entrada}
          onChange={(e) => setEntrada(e.target.value)}
          className="input-field"
        />
      </div>
      <div className="input-group">
        <label className="input-label">Parcelas:</label>
        <select
          value={parcelas}
          onChange={(e) => setParcelas(parseInt(e.target.value))}
          className="select-field"
        >
          {[...Array(18).keys()].map((i) => (
            <option key={i + 1} value={i + 1} className="select-option">
              {i + 1}x
            </option>
          ))}
        </select>
      </div>
      <button onClick={calcular} className="calculate-button">
        Calcular
      </button>
      {erro && <p className="error-message">{erro}</p>}
      {mostrarResultado && (
        <div className="result-container">
          <p>Valor restante: R$ {valorAParcelar.toFixed(2)}</p>
          <p>
            Valor parcelado: R$ {valorParcelado.toFixed(2)} em {parcelas}x de R${" "}
            {(valorParcelado / parcelas).toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
}

export default TaxasForm;