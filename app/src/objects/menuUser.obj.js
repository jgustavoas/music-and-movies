import Menu from './menu.constructor.obj';

const itens = [{ myAccount: 'My account' }];
const subitens = ['Change password', 'Sign Out'];

export const ItensDoMenu = new Menu(itens, subitens).construct();
