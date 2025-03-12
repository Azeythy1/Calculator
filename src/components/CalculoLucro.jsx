import React from "react";

function CalculoLucro({ valorAParcelar, taxa }) {
  // Calcula o valor final (R)
  let valorF = valorAParcelar * (1 + taxa);

  // Calcula x = R - (R * taxa)
  let x = valorF - (valorF * taxa);

  //exibe o valor das parcelas
 

  // Ajusta R até que x >= C
  while (x < valorAParcelar) {
    valorF += 1.0; // Incrementa R em R$ 5,00
    x = valorF - (valorF * taxa); // Recalcula x
  }

  // Arredonda o valor final (R) para cima
  const valorFinalArredondado = Math.ceil(valorF);

  return (
    <div>
      <h3>Resultado:</h3>
      <p><span>Valor Restante :</span> R$ {x.toFixed(2)}</p>
      <p>Valor Final : R$ {valorFinalArredondado}</p>
      {/* <p>Lucro Garantido: R$ {(x - valorAParcelar).toFixed(2)}</p> */}
    </div>
  );
}

export default CalculoLucro;