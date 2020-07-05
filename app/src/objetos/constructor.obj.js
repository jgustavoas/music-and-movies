class Menu {
  constructor(item, subitens) {
    this.item = item;
    this.subitens = subitens;
  }

  construct() {
    const allSubitems = {};
    const [model, titulo] = Object.entries(this.item)[0];

    this.subitens.forEach((sub) => {
      allSubitems[sub.toLocaleLowerCase().replace(' ', '')] = {
        titulo: titulo === 'My account' ? sub : `${sub} ${titulo}`,
        tipo: sub === 'List' ? 'page' : 'card',
        path: sub === 'List' ? model : null,
      };
    });

    return {
      titulo: titulo,
      subitens: { ...allSubitems },
    };
  }
}

export default function loop(itens, subitens) {
  const ItensDoMenu = {};

  itens.forEach((item) => {
    const model = Object.keys(item)[0];
    return (ItensDoMenu[model] = new Menu(item, subitens).construct());
  });

  return ItensDoMenu;
}
