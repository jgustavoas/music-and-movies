// REACT -------------------------------------------------------------------------------------------
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// COMPONENTES -------------------------------------------------------------------------------------
import Thead from './elementos/Thead';
import Tbody from './elementos/Tbody';
import Paginacao from './Paginacao';

// FUNÇÕES -----------------------------------------------------------------------------------------
import { loadDados } from '../functions/componente.func';

// NOVO COMPONENTE ---------------------------------------------------------------------------------
export default function Table({ fonte: source, path }) {
  const CRUD = useSelector((state) => state.data[source]);
  const { loaded, data, error, query } = CRUD;
  const { paginaInicial, limitacao } = query;

  // Definindo states:
  const [linhas, setLinhas] = useState([{ id: 0, nome: '' }]);
  const [pagina, setPagina] = useState(paginaInicial);
  const [paginacao, setPaginacao] = useState([]);
  const [status, setStatus] = useState('LOADING...');

  useEffect(() => {
    // Voltar à pagina 1 quando o componente remontar:
    setPagina(1);

    // Atualizar o state das linhas da tabela e também o state da paginação com o dados obtidos:
    data && loadDados(data, source, [setStatus, setLinhas, setPaginacao]);
  }, [data, loaded, source]);

  if (!data || !loaded) return status;
  else if (error) return 'Ops! Something went wrong :(';
  else {
    return (
      <>
        <Paginacao
          linhas={linhas}
          source={source}
          path={path}
          limitacao={limitacao}
          setStates={[pagina, setPagina, paginacao, setPaginacao]}
        />
        <table className={source}>
          <Thead source={source} path={path} variaveis={[linhas]} />
          <Tbody
            source={source}
            path={path}
            variaveis={[linhas, pagina, limitacao]}
          />
        </table>
      </>
    );
  }
}
