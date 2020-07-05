import loop from './constructor.obj';

const itens = [{ minhaConta: 'My account' }];
const subitens = ['Change password', 'Sign Out'];

export const ItensDoMenu = loop(itens, subitens);
