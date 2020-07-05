export default class Menu {
  constructor(items, subitens) {
    this.items = items;
    this.subitens = subitens;
  }

  construct() {
    const menu = {};

    this.items.forEach((item) => {
      const [model, titulo] = Object.entries(item)[0];
      menu[model] = { titulo, subitens: {} };

      this.subitens.forEach((subitem) => {
        menu[model].subitens[subitem.toLocaleLowerCase().replace(' ', '')] = {
          titulo: titulo === 'My account' ? subitem : `${subitem} ${titulo}`,
          tipo: subitem === 'List' ? 'page' : 'card',
          path: subitem === 'List' ? model : null,
        };
      });
    });

    return menu;
  }
}
