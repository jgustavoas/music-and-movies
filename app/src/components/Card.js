import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Card } from '../styles/Card.style';

import { fecharCard } from '../functions/card.func';

import DefaultCard from '../cards/default.cards';
import { MudarSenha, Sair } from '../cards/minhaConta.cards';

//> COMPONENTE PRINCIPAL (funciona como container em formato de modal box) =========================
export default function Componente() {
  const [statesDoCard, setStatesDoCard] = useState({
    propriedadeDisplay: 'none',
    itemDoCard: undefined,
    tituloDoCard: '',
  });

  const { propriedadeDisplay, itemDoCard, tituloDoCard } = statesDoCard;
  const [item, card] = itemDoCard ? itemDoCard.split('/') : '';

  const getState = useSelector((state) => state.componentes);

  const qualCard = {
    default: <DefaultCard path={itemDoCard} titulo={tituloDoCard} />,
    mudarSenha: <MudarSenha />,
    sairDoSistema: <Sair />,
  };

  useEffect(() => {
    setStatesDoCard({
      propriedadeDisplay: getState.propriedadeDisplay,
      itemDoCard: getState.card,
      tituloDoCard: getState.titulo,
    });
  }, [getState.propriedadeDisplay, getState.card, getState.titulo]);

  //> Se o state de "itemDoCard" não for undefied renderizar o Card, se não... (continua em "else")
  if (itemDoCard) {
    try {
      return (
        <Card id='Card' style={{ display: propriedadeDisplay }}>
          {item !== 'minhaConta' ? qualCard.default : qualCard[card]}
        </Card>
      );
    } catch (error) {
      return (
        <Card style={{ display: propriedadeDisplay }}>
          <div className='cardTitle'>
            <h1>Cadê?</h1>
            <span onClick={() => fecharCard()}>X</span>
          </div>
          <div className='cardContent'>Ops, nada aqui ainda!</div>
        </Card>
      );
    }
  } else {
    return ''; //> ...não renderizar o Card pois geraria erro.
  }
}