import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../styles/Card.style';
import { wichOne, fecharCard } from '../functions/card.func';

// Main content (it works as container)
export default function Component() {
  const [statesDoCard, setStatesDoCard] = useState({
    displayProperty: 'none',
    cardItem: undefined,
    cardTitle: '',
  });

  const { displayProperty, cardItem, cardTitle } = statesDoCard;
  const [, card] = cardItem ? cardItem.split('/') : '';
  const getState = useSelector((state) => state.components.card);

  useEffect(() => {
    setStatesDoCard({
      displayProperty: getState.displayProperty,
      cardItem: getState.id,
      cardTitle: getState.titulo,
    });
  }, [getState]);

  //> To render the card if "cardItem" is defined, otherwise... (it continues with "else")
  if (cardItem) {
    try {
      return (
        <Card id='Card' style={{ display: displayProperty }}>
          <div>
            <div className='cardTitle'>
              <h1>{cardTitle}</h1>
              <span onClick={() => fecharCard()}>X</span>
            </div>
            {wichOne(card, statesDoCard)}
          </div>
        </Card>
      );
    } catch (error) {
      return (
        <Card style={{ display: displayProperty }}>
          <div className='cardTitle'>
            <h1>Where is it?</h1>
            <span onClick={() => fecharCard()}>X</span>
          </div>
          <div className='cardContent'>Nothing here!</div>
        </Card>
      );
    }
  } else {
    return ''; //> ...do not render the card.
  }
}
