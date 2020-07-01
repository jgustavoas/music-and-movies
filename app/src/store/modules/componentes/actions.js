export function acao(type, item, titulo, data) {
  return {
    type,
    payload: { item, titulo, data },
  };
}
