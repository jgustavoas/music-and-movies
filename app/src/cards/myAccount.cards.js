import React from 'react';
import { store } from '../store';
import request from '../store/modules/data/actions';
import { signOut } from '../store/modules/auth/actions';

import { fecharCard } from '../functions/card.func';

import Button from '../components/elements/Button';

//> myAccount/mudarSenha:
export function MudarSenha() {
  return (
    <>
      <div className='cardContent'>
        <form>
          <fieldset>
            <label htmlFor='new'>Current password</label>
            <input type='password' name='' id='new' />
          </fieldset>
          <fieldset>
            <label htmlFor='new'>New password</label>
            <input type='password' name='' id='new' />
          </fieldset>
          <fieldset>
            <label htmlFor='new'>Repeat new password</label>
            <input type='password' name='' id='new' />
          </fieldset>
          <Button>Change now</Button>
        </form>
      </div>
    </>
  );
}

//> myAccount/sairDoSistema:
export function Sair() {
  const funcaoLogout = () => {
    fecharCard();
    store.dispatch(request('RESET', 'pagina'));
    store.dispatch(signOut());
  };

  return (
    <div>
      <h4>Do you really want to sign out?</h4>
      <br />
      <Button funcao={funcaoLogout}>YES</Button>
      &nbsp;
      <Button funcao={fecharCard}>NO</Button>
    </div>
  );
}
