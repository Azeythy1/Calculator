import React from "react";

function ArredondarValorFinal({ valorFinal }) {
  // Função para arredondar o valor para o próximo múltiplo de 5 ou 10
  const arredondarParaProximoMultiplo = (valor) => {
    const ultimoDigito = valor % 10; // Pega o último dígito do número
    if (ultimoDigito === 0 || ultimoDigito === 5) {
      return valor; // Já é múltiplo de 5 ou 10
    } else if (ultimoDigito < 5) {
      return valor - ultimoDigito + 5; // Arredonda para cima para o próximo 5
    } else {
      return valor - ultimoDigito + 10; // Arredonda para cima para o próximo 10
    }
  };

  // Arredonda o valor final
  const valorArredondado = arredondarParaProximoMultiplo(valorFinal);

  return (
    <div>
      <h3>Valor Final Arredondado: R$ {valorArredondado}</h3>
    </div>
  );
}

export default ArredondarValorFinal;