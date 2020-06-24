export function acao(type, item, titulo) {
  return {
    type,
    payload: { item, titulo },
  };
}
