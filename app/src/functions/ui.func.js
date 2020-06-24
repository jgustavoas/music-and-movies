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

      // Aguardar 560ms para mover a 'section' com o ícone 'done' visível para trás do input:
      setTimeout(() => {
        section.setAttribute('style', `left: -56px; opacity: 1;`);
      }, 560);

      // Aguardar 640 milisegundos para:
      setTimeout(() => {
        // 1) Mover a 'section' dos ícones de volta para ao lado do input:
        section.setAttribute('style', `left: 0px; opacity: 1;`);

        // 2) Esconder o ícone "done" e mostrar os ícones "save" e "undo":
        $toggle(done, 'none');
        $toggleMulti([save, undo], 'inline-flex');

        // 3) Dar foco e limpar o input
        input.focus();
        input.value = '';
      }, 640);
      break;
    }

    case 'UPDATE:SUCCESS': {
      $toggle(spinner, 'none');
      $toggle(done, 'inline-flex');

      // Aguardar 400 milisegundos recolher os ícones
      setTimeout(() => {
        section.removeAttribute('style', 'left: 0px');
      }, 400);

      // Aguardar 800 milisegundos para:
      setTimeout(() => {
        // 1) Esconder o ícone "done" e mostrar os ícones "save" e "undo":
        $toggle(done, 'none');
        $toggleMulti([save, undo, edit, remove], 'inline-flex');

        // 2) Dar foco no input para mover o cursor ao início, evitando que o começo da palavra apareça cortada:
        input.focus();
        input.selectionStart = 0;
        input.selectionEnd = 0;

        // 3) Recolocar o atributo "disabled" no input para a sua aparência inicial:
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
