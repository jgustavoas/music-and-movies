import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { store } from '../store';

import Layout from '../components/Layout';
import Main from '../components/Main';

import Container from '../components/elementos/Container';
import Input from '../components/elementos/Input';
import Form from '../components/elementos/Form';
import Botao from '../components/elementos/Botao';

import { tentarLogin } from '../functions/form.func';

export default function LoginPage(props) {
  const { pathname } = props.location;
  const { user, signed } = store.getState().auth;

  const Conteudo = !signed ? LoginForm : Aviso;
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const handleSubmit = (e) => tentarLogin(e, [setEmailValid, setPasswordValid]);

  function LoginForm() {
    return (
      <Layout id='loginLayout' pagina={pathname}>
        <Main style={{ width: '320px' }}>
          <h2 style={{ color: '#fff' }}>Music &amp; Movies</h2>

          <Form>
            <Input settings={['Email', 'text', emailValid]} />
            <Input settings={['Password', 'password', passwordValid]} />
            <Botao estilo='cta' funcao={handleSubmit}>
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
