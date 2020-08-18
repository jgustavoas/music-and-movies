import { store } from '../store';
import request from '../store/modules/data/actions';

export function paginador(itens, limite, setState) {
  const quantasPaginas = Math.ceil(itens / limite);
  let arrayPaginas = [];

  for (let p = 1; p <= quantasPaginas; p++) {
    arrayPaginas = [...arrayPaginas, p];
  }

  setState(arrayPaginas);
}

export async function loadDados(dados, source, setStates) {
  const { settings, query } = store.getState().data[source];
  const { limit } = query;
  const { path } = settings;
  const [setStatus, setLinhas, setPagination] = setStates;

  if (dados.length === 0) setStatus('No data was found :(');
  else {
    const rows = dados.map((row) => {
      const {
        id,
        artist,
        artistId,
        album,
        albumId,
        track,
        movie,
        genre,
        genreId,
      } = row;
      let colunas = [];

      switch (path) {
        default: {
          colunas = [
            ['Artist', artist],
            ['Genre', genre !== null ? genre.genre : '', genreId],
          ];
          break;
        }
        case 'albums': {
          colunas = [
            ['Album', album],
            ['Artist', artist !== null ? artist.artist : '', artistId],
            ['Genre', genre !== null ? genre.genre : '', genreId],
          ];
          break;
        }
        case 'tracks': {
          colunas = [
            ['Track', track],
            ['Album', album !== null ? album.album : '', albumId],
            ['Artist', artist !== null ? artist.artist : '', artistId],
            ['Genre', genre !== null ? genre.genre : '', genreId],
          ];
          break;
        }
        case 'movies': {
          colunas = [
            ['Movie', movie],
            ['Genre', genre !== null ? genre.genre : '', genreId],
          ];
          break;
        }
        case 'genres': {
          colunas = [['Genre', genre]];
          break;
        }
      }

      let rowProps = { checked: false, id, colunas };
      return rowProps;
    });

    const columnsHeaders = rows[0].colunas;

    // A propriedade 'colunas' da linha com id 0 pega emprestado as colunas da primeira linha de dados ('linhas[0].colunas')
    setLinhas([{ id: 0, colunas: columnsHeaders }, ...rows]);

    try {
      store.dispatch(request('LOAD', 'pagina', path, { loaded: true }));
    } catch (error) {
      console.log("Error: data wasn't loaded :>> ");
    } finally {
      paginador(dados.length, limit, setPagination);
    }
  }
}
