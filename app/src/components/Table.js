import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// components
import Thead from './elements/Table.Thead';
import Tbody from './elements/Table.Tbody';
import Pagination from './Pagination';

// functions
import { loadDados } from '../functions/component.func';

export default function Table({ fonte: source, path }) {
  const CRUD = useSelector((state) => state.data[source]);
  const { loaded, data, error, query } = CRUD;
  const { page, limit } = query;

  // setting states
  const [linhas, setLinhas] = useState([{ id: 0, nome: '' }]);
  const [pagina, setPagina] = useState(page);
  const [pagination, setPagination] = useState([]);
  const [status, setStatus] = useState('LOADING...');

  useEffect(() => {
    setPagina(1);

    data && loadDados(data, source, [setStatus, setLinhas, setPagination]);
  }, [data, loaded, source]);

  if (!data || !loaded) return status;
  else if (error) return 'Ops! Something went wrong :(';
  else {
    return (
      <>
        <Pagination
          linhas={linhas}
          source={source}
          path={path}
          limit={limit}
          setStates={[pagina, setPagina, pagination, setPagination]}
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
