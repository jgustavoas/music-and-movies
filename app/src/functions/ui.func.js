import { $, $id, $toggle, $toggleMulti, $attrMulti } from './dom.func';

export function avisosCRUD(identificacao, resultadoDoCrud) {
  const qualCRUD = resultadoDoCrud.split(':')[0];

  const section = $(`#${qualCRUD}_section_${identificacao} section`);
  const input = $(`#${qualCRUD}_section_${identificacao} input`);
  const spinner = $id(`spinner_${identificacao}`);
  const erro = $id(`erro_${identificacao}`);
  const done = $id(`done_${identificacao}`);
  const save = $id(`save_${identificacao}`);
  const undo = $id(`undo_${identificacao}`);
  const edit = $id(`edit_${identificacao}`);
  const remove = $id(`remove_${identificacao}`);

  switch (resultadoDoCrud) {
    case 'CREATE:SUCCESS': {
      $toggle(spinner, 'none');
      $toggle(done, 'inline-flex');

      // Await 560ms to move the "section" with visibile "done" icon to backwards the input:
      setTimeout(() => {
        section.setAttribute('style', `left: -56px; opacity: 1;`);
      }, 560);

      // Await 640ms to:
      setTimeout(() => {
        // 1) Move again the section element with the icons to beside the input:
        section.setAttribute('style', `left: 0px; opacity: 1;`);

        // 2) Hide the "done" icon and show the "save" and "undo" icons:
        $toggle(done, 'none');
        $toggleMulti([save, undo], 'inline-flex');

        // 3) Give focus and clean-up the input:
        input.focus();
        input.value = '';
      }, 640);
      break;
    }

    case 'UPDATE:SUCCESS': {
      $toggle(spinner, 'none');
      $toggle(done, 'inline-flex');

      // Await 400ms to hide the icons:
      setTimeout(() => {
        section.removeAttribute('style', 'left: 0px');
      }, 400);

      // Await 800ms to:
      setTimeout(() => {
        // 1) Hide the "done" icon and show the "save", "undo", "edit" and "remove" icons:
        $toggle(done, 'none');
        $toggleMulti([save, undo, edit, remove], 'inline-flex');

        // 2) Give focus and move the cursor to the start of the input, thus previnting the wortd appears sliced:
        input.focus();
        input.selectionStart = 0;
        input.selectionEnd = 0;

        // 3) Reput the "disabled" attibute in the input to its inicial look:
        input.setAttribute('disabled', 'true');
        input.removeAttribute(
          'style',
          'border: 1px solid #d1d1d1; border-radius: 4px;'
        );
      }, 800);
      break;
    }

    case 'DELETE:SUCCESS': {
      const linha = $id(`tr_${identificacao}`);
      linha.setAttribute('style', 'display: none');
      break;
    }

    case 'erro': {
      $toggle(spinner, 'none');
      $toggle(undo, 'inline-flex');

      $attrMulti(erro, [
        ['style', 'display: inline-flex;'],
        ['title', 'Erro! Tente novamente mais tarde.'],
      ]);
      break;
    }
    default:
  }
}
