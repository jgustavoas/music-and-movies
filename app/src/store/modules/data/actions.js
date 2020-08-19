export default function request(type, source, path, data) {
  return {
    type,
    payload: { source, path, data },
  };
}

/*
  Actions para operações CRUD:
  request('CREATE', page, formData);
  request('UPDATE', page, { id, formData });
  request('DELETE', page, id)

  'formData' é um objeto contendo os valores dos inputs nas respectivas páginas.

  Exemplos
  a) Cadastrar uma pessoa: request('CREATE', 'users', formData);
  b) Editar uma profisssão: request('UPDATE', 'profissoes', { id, formData });
  c) Remover um grupo: request('DELETE', 'grupos', id);

  Os módulos da pasta 'store' foram reduzidos aos seguintes tipos:
  1) Um exclusivo para autenticação ('auth');
  2) Um genérico para dados de operaçoes CRUD ('data');
  3) Um para lidar com os estados dos components ('components')

  Essa refatoração evita um aumento da quantidade de arquivos e de pastas à medida que a aplicação fica mais complexa.
  Assim, as páginas também ficam mais limpas e o código se torna muito mais fácil de manter e de escalar.
*/
