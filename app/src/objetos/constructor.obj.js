export default class Menu {
  constructor(items, subitens) {
    this.items = items;
    this.subitens = subitens;
  }

  construct() {
    const menu = {};

    this.items.forEach((item) => {
      const [path, titulo] = Object.entries(item)[0];
      menu[path] = { titulo, subitens: {} };

      this.subitens.forEach((subitem) => {
        menu[path].subitens[subitem.toLocaleLowerCase().replace(' ', '')] = {
          titulo: titulo === 'My account' ? subitem : `${subitem} ${titulo}`,
          tipo: subitem === 'List' ? 'page' : 'card',
          path: subitem === 'List' ? path : null,
        };
      });
    });

    return menu;
  }
}
