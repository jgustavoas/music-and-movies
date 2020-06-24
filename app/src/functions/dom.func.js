export const $ = (selector) => document.querySelector(selector);

export const $$ = (selector) => document.querySelectorAll(selector);

export const $id = (id) => document.getElementById(id);

export const $style = (el, style) => el.setAttribute('style', style);

export const $toggle = (el, toggle) => $style(el, `display: ${toggle}`);

export const $toggleMulti = (els, toggle) =>
  els.forEach((el) => $toggle(el, toggle));

export const $attrMulti = (el, attrs) =>
  attrs.forEach((attr) => {
    const [nome, valor] = attr;
    el.setAttribute(nome, valor);
  });
