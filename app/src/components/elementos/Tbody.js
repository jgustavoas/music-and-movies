import React from 'react';

export default function Tbody({ source, path, variaveis, setStates }) {
  const [linhas, pagina, limitacao] = variaveis;

  return (
    <tbody id={`tbody_${source}`} className={source}>
      {linhas.map(function (item, indice) {
        const { id, colunas } = item;

        if (id === 0) return null; // Não retornar a linha de id = 0 (usada para criar e procurar)

        // Não retornar as linhas cujos índices na array estejam fora do range da página selecionada:
        if (
          indice <= limitacao * pagina - limitacao ||
          indice > limitacao * pagina
        )
          return null;

        // Retornar todas as demais linhas:
        return (
          <tr key={id} id={`tr_item${id}_${source}`}>
            {colunas.map((coluna, indice) => {
              const [tituloDaColuna, dadoDaColuna] = coluna;
              const identificacao = `${id}_${indice}_${tituloDaColuna}_${source}`;

              const itemDaColuna =
                typeof dadoDaColuna === 'object'
                  ? dadoDaColuna.Name
                  : dadoDaColuna;

              return <td key={identificacao}>{itemDaColuna}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
}
