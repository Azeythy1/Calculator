
import React from "react";

function CalculoLucro({ valorAParcelar, taxa }) {
  // Calcula o valor final (R)
  let valorF = valorAParcelar * (1 + taxa);

  // Calcula x = R - (R * taxa)
  let x = valorF - (valorF * taxa);

  // Ajusta R até que x >= C
  while (x < valorAParcelar) {
    valorF += 5.0; // Incrementa R em R$ 5,00
    x = valorF - (valorF * taxa); // Recalcula x
  }

  return (
    <div>
      <h3>Resultado:</h3>
      <p>Valor Final (R): R$ {valorF.toFixed(2)}</p>
      <p>Valor Mínimo (x): R$ {x.toFixed(2)}</p>
      <p>Lucro Garantido: R$ {(x - valorAParcelar).toFixed(2)}</p>
    </div>
  );
}

export default CalculoLucro;