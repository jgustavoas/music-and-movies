import { columns } from './columns.obj';

export default class NavItem {
  constructor(titulo, subitens, model) {
    this.titulo = titulo;
    this.model = model;
    this.subitens = subitens;
  }

  render() {
    const allSubitems = {};

    this.subitens.forEach((sub) => {
      allSubitems[sub.toLocaleLowerCase().replace(' ', '')] = {
        titulo: this.titulo === 'My account' ? sub : `${sub} ${this.titulo}`,
        tipo: sub === 'List' ? 'page' : 'card',
        path: sub === 'List' ? this.model : null,
        columns: this.model ? columns[this.model] : null,
      };
    });

    return {
      titulo: this.titulo,
      subitens: { ...allSubitems },
    };
  }
}
