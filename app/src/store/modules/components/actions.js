export function acao(type, id, titulo, data) {
  return {
    type,
    payload: { id, titulo, data },
  };
}
