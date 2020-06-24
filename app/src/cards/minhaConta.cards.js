import React from 'react';
import { store } from '../store';
import request from '../store/modules/data/actions';
import { signOut } from '../store/modules/auth/actions';

import { fecharCard } from '../functions/card.func';

import Botao from '../components/elementos/Botao';
import CampoDeInput from '../components/elementos/Input';

//> minhaConta/mudarSenha:
export function MudarSenha() {
  return (
    <>
      <div>
        <CampoDeInput
          tipo='text'
          id='senhAtual'
          textoDoLabel='Senha atual'
          onChange={(e) => e.target.value}
          valor=''
          valido={true}
        />
        <CampoDeInput
          tipo='text'
          id='novaSenha'
          textoDoLabel='Nova senha'
          onChange={(e) => e.target.value}
          valor=''
          valido={true}
        />
        <CampoDeInput
          tipo='text'
          id='repetirNovaSenha'
          textoDoLabel='Repita a nova senha'
          onChange={(e) => e.target.value}
          valor=''
          valido={true}
        />

        <Botao>Confirmar</Botao>
        <Botao funcao={fecharCard}>Cancelar</Botao>
      </div>
    </>
  );
}

//> minhaConta/sairDoSistema:
export function Sair() {
  const funcaoLogout = () => {
    fecharCard();
    store.dispatch(request('RESET', 'pagina'));
    store.dispatch(signOut());
  };

  return (
    <div>
      <h4>Do you really want to sign out?</h4>
      <Botao funcao={funcaoLogout}>YES</Botao>
      <Botao funcao={fecharCard}>NO</Botao>
    </div>
  );
}
