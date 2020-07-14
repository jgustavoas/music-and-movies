import Menu from './menuConstructor.obj';

const itens = [{ minhaConta: 'My account' }];
const subitens = ['Change password', 'Sign Out'];

export const ItensDoMenu = new Menu(itens, subitens).construct();
