import NavItem from './constructor.obj';

const subitens = ['Change password', 'Sign Out'];
const minhaConta = new NavItem('My account', subitens).render();

export const ItensDoMenu = {
  minhaConta,
};
