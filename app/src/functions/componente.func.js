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
  const [setLinhas, setPaginacao] = setStates;

  if (dados) {
    const lines = dados.map((line) => {
      const { id, artist, album, track, genre } = line;
      let colunas = [];

      switch (path) {
        default: {
          colunas = [
            ['Artist', artist],
            ['Genre', genre !== null ? genre.genre : ''],
          ];
          break;
        }
        case 'albums': {
          colunas = [
            ['Album', album],
            ['Artist', artist !== null ? artist.artist : ''],
            ['Genre', genre !== null ? genre.genre : ''],
          ];
          break;
        }
        case 'tracks': {
          colunas = [
            ['Song', track],
            ['Album', album !== null ? album.album : ''],
            ['Artist', artist !== null ? artist.artist : ''],
            ['Genre', genre !== null ? genre.genre : ''],
          ];
          break;
        }
        case 'genres': {
          colunas = [['Genre', genre]];
          break;
        }
      }

      let lineProps = { checked: false, id, colunas };
      return lineProps;
    });

    const columnsHeaders = lines[0].colunas;

    // A propriedade 'colunas' da linha com id 0 pega emprestado as colunas da primeira linha de dados ('linhas[0].colunas')
    setLinhas([{ id: 0, colunas: columnsHeaders }, ...lines]);

    try {
      store.dispatch(request('LOAD', 'pagina', path, { loaded: true }));
    } catch (error) {
      console.log("Error: data wasn't loaded :>> ");
    } finally {
      paginador(dados.length, limit, setPaginacao);
    }
  }
}