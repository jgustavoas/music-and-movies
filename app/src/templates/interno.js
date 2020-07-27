import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import Card from '../components/Card';
import Footer from '../components/Footer';

export default function TemplateInterno({ pagina, usuario, children }) {
  return (
    <>
      <Layout pagina={pagina}>
        <Card />
        <Header usuario={usuario} />
        <Main>{children}</Main>
        <Sidebar />
        <Footer />
      </Layout>
    </>
  );
}
