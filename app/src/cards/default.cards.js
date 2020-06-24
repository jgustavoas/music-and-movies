// REACT ===========================================================================================
import React from 'react';

// COMPONENTES =====================================================================================
import Table from '../components/Table';

// OBJETOS =========================================================================================
//import { ItensDoMenu } from '../objetos/menuNav.obj';

// FUNÇÕES =========================================================================================
import { fecharCard } from '../functions/card.func';

export default function DefaultCard({ path, titulo }) {
  //const [item, esteCard] = path.split('/');
  //const coluna = ItensDoMenu[item].subitens[esteCard].colunaPrincipal;

  //console.log('coluna em default.card :>> ', coluna);

  return (
    <>
      <div className='cardTitle'>
        <h1>{titulo}</h1>
        <span onClick={() => fecharCard()}>X</span>
      </div>
      <div className='cardContent'>
        <Table fonte='card' path={path} />
      </div>
    </>
  );
}
