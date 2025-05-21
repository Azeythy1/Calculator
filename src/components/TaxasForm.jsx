import React, { useState } from "react";

function TaxasForm({ taxas }) {
  const [valorLiquido, setValorLiquido] = useState("");
  const [parcelas, setParcelas] = useState(1);
  const [tipoEntrada, setTipoEntrada] = useState("nenhuma");
  const [valorEntrada, setValorEntrada] = useState("");
  const [erro, setErro] = useState("");
  const [resultado, setResultado] = useState(null);

  const arredondarParaMultiploDe10 = (valor) => {
    return Math.ceil(valor / 10) * 10;
  };

  const calcularTaxaPorDentro = () => {
    // Validações
    if (!valorLiquido) {
      setErro("Por favor, informe o valor líquido desejado.");
      return;
    }

    const valor = parseFloat(valorLiquido);
    if (isNaN(valor)) {
      setErro("Por favor, insira um valor numérico válido.");
      return;
    }

    // Tratamento da entrada
    let valorComEntrada = valor;
    let entradaCalculo = 0;

    if (tipoEntrada !== "nenhuma" && valorEntrada) {
      const entrada = parseFloat(valorEntrada);
      if (!isNaN(entrada)) {
        entradaCalculo = entrada;
        valorComEntrada = valor - entrada;
        
        if (valorComEntrada <= 0) {
          setErro("O valor de entrada não pode ser maior ou igual ao valor líquido.");
          return;
        }
      }
    }

    const taxaPercentual = parcelas === 1 ? taxas.debito : taxas.credito[parcelas];
    const taxaDecimal = taxaPercentual / 100;

    let valorRepassado = valorComEntrada / (1 - taxaDecimal);
    valorRepassado = arredondarParaMultiploDe10(valorRepassado);
    
    const taxaCobrada = valorRepassado * taxaDecimal;
    const valorParcela = valorRepassado / parcelas;

    setResultado({
      valorLiquido: valor.toFixed(2),
      valorEntrada: entradaCalculo.toFixed(2),
      tipoEntrada,
      valorComEntrada: valorComEntrada.toFixed(2),
      valorRepassado: valorRepassado.toFixed(2),
      taxaCobrada: taxaCobrada.toFixed(2),
      parcelas,
      valorParcela: valorParcela.toFixed(2),
      taxaPercentual
    });
    
    setErro("");
  };

  return (
    <div className="taxas-form-container">
      <div className="input-group">
        <label className="input-label">Valor Líquido Desejado (R$):</label>
        <input
          type="number"
          value={valorLiquido}
          onChange={(e) => setValorLiquido(e.target.value)}
          className="input-field"
          placeholder="Digite o valor que deseja receber"
        />
      </div>
      
      <div className="input-group">
        <label className="input-label">Tipo de Entrada:</label>
        <select
          value={tipoEntrada}
          onChange={(e) => setTipoEntrada(e.target.value)}
          className="select-field"
        >
          <option value="nenhuma">Nenhuma entrada</option>
          <option value="pix">PIX</option>
          <option value="dinheiro">Dinheiro</option>
          <option value="troca">Troca</option>
          <option value="outro">Outro</option>
        </select>
      </div>
      
      {tipoEntrada !== "nenhuma" && (
        <div className="input-group">
          <label className="input-label">Valor de Entrada (R$):</label>
          <input
            type="number"
            value={valorEntrada}
            onChange={(e) => setValorEntrada(e.target.value)}
            className="input-field"
            placeholder="Digite o valor da entrada"
          />
        </div>
      )}
      
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
      
      <button onClick={calcularTaxaPorDentro} className="calculate-button">
        Calcular
      </button>
      
      {erro && <p className="error-message">{erro}</p>}
      
      {resultado && (
        <div className="result-container">
          <div className="result-row">
            <span className="result-label">VL Desejado:</span>
            <span className="result-value">R$ {resultado.valorLiquido}</span>
          </div>
          
          {resultado.tipoEntrada !== "nenhuma" && (
            <>
              <div className="result-row">
                <span className="result-label">Entrada ({resultado.tipoEntrada}):</span>
                <span className="result-value">R$ {resultado.valorEntrada}</span>
              </div>
              <div className="result-row">
                <span className="result-label">VL a Financiar:</span>
                <span className="result-value">R$ {resultado.valorComEntrada}</span>
              </div>
            </>
          )}
          
          <div className="result-row">
            <span className="result-label">Taxa ({resultado.taxaPercentual}%):</span>
            <span className="result-value">R$ {resultado.taxaCobrada}</span>
          </div>
          
          <div className="result-row">
            <span className="result-label">VL Final:</span>
            <span className="result-value">R$ {resultado.valorRepassado}</span>
          </div>
          
          {resultado.parcelas > 1 && (
            <div className="result-row parcela-row">
              <span className="result-label">Parcelas ({resultado.parcelas}x):</span>
              <span className="result-value parcela-value">R$ {resultado.valorParcela}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default TaxasForm;