import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// components
import Thead from './elementos/Table.Thead';
import Tbody from './elementos/Table.Tbody';
import Paginacao from './Paginacao';

// functions
import { loadDados } from '../functions/componente.func';

export default function Table({ fonte: source, path }) {
  const CRUD = useSelector((state) => state.data[source]);
  const { loaded, data, error, query } = CRUD;
  const { page, limit } = query;

  // setting states
  const [linhas, setLinhas] = useState([{ id: 0, nome: '' }]);
  const [pagina, setPagina] = useState(page);
  const [paginacao, setPaginacao] = useState([]);
  const [status, setStatus] = useState('LOADING...');

  useEffect(() => {
    setPagina(1);

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
          limit={limit}
          setStates={[pagina, setPagina, paginacao, setPaginacao]}
        />
        <table className={source}>
          <Thead source={source} path={path} variaveis={[linhas]} />
          <Tbody
            source={source}
            path={path}
            variaveis={[linhas, pagina, limit]}
          />
        </table>
      </>
    );
  }
}
