import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { store } from '../store';
import { signInRequest } from '../store/modules/auth/actions';

import Layout from '../components/Layout';
import Main from '../components/Main';

import Container from '../components/elementos/Container';
import Form from '../components/elementos/Form';
import CampoDeInput from '../components/elementos/Input';
import Botao from '../components/elementos/Botao';

import { validarForm } from '../functions/gerais.func';

export default function LoginPage(props) {
  const { pathname } = props.location;

  const [stateDosInputs, setStateDosInputs] = useState([
    [true, ''],
    [true, ''],
  ]);

  const { user, signed } = store.getState().auth;
  const Conteudo = !signed ? LoginForm : Aviso;

  const tentarLogin = (evento) => {
    evento.preventDefault();

    const { value: email } = document.getElementById('seuEmail');
    const { value: senha } = document.getElementById('suaSenha');

    const camposPraValidar = [
      ['email', email],
      ['password', senha],
    ];

    const [emailValido, senhaValida] = validarForm(camposPraValidar);

    if (emailValido && senhaValida) {
      store.dispatch(signInRequest(email, senha));
    } else {
      setStateDosInputs([
        [emailValido, email],
        [senhaValida, senha],
      ]);
    }
  };

  function LoginForm() {
    return (
      <Layout id='loginLayout' pagina={pathname}>
        <Main style={{ width: '320px' }}>
          <h2 style={{ color: '#fff' }}>Music & Movies</h2>

          <Form id='loginForm'>
            <CampoDeInput
              placeholder='Digite seu e-mail'
              tipo='email'
              id='seuEmail'
              textoDoLabel='E-MAIL'
              onChange={(e) => e.target.value}
              valor={stateDosInputs[0][1]}
              valido={stateDosInputs[0][0]}
            />

            <CampoDeInput
              placeholder='Digite sua senha'
              tipo='password'
              id='suaSenha'
              textoDoLabel='PASSWORD'
              onChange={(e) => e.target.value}
              valor={stateDosInputs[1][1]}
              valido={stateDosInputs[1][0]}
            />

            <Botao estilo='cta' funcao={tentarLogin}>
              ENTRAR
            </Botao>
          </Form>
        </Main>
      </Layout>
    );
  }

  function Aviso() {
    return (
      <Layout pagina={pathname}>
        <Main style={{ padding: '16px', height: '200px', width: 'auto' }}>
          <Container id='Aviso'>
            <h2 style={{ textTransform: 'none' }}>Oi, {user}!</h2>
            <h4>Você já está conectado.</h4>
            <Link to='/artists'>
              <Botao estilo='cta'>Volte para o sistema</Botao>
            </Link>
          </Container>
        </Main>
      </Layout>
    );
  }

  return (
    <div>
      <Conteudo />
    </div>
  );
}
