import { useState } from 'react';
import { EventCard } from '../EventCard/EventCard';

import './CardsContainer.scss';

const cardsData = [
  {
    id: 1,
    number: 1,
    title: 'First Feature',
    text: 'Little Red Cap opened her eyes and when she saw the sunbeams dancing to and fro through the trees and how the ground was covered with beautiful flowers.',
  },
  {
    id: 2,
    number: 2,
    title: 'Second Feature',
    text: 'Each time she picked one she thought that she could see an even more beautiful one a little way off, and she ran after it, going further and further into the woods.',
  },
  {
    id: 3,
    number: 3,
    title: 'Third Feature',
    text: `The wolf pressed the latch, and the door opened. He stepped inside, went straight to the grandmother's bed, and ate her up.`,
  },
  {
    id: 4,
    number: 4,
    title: 'Fourth Feature',
    text: 'Little Red Cap had run after the flowers. After she had gathered so many that she could not carry any more, she remembered her grandmother.',
  },
];

export const CardsContainer = () => {
  const [index, setIndex] = useState({
    num: 0,
  });

  let CARDS_PER_PAGE;

  if (document.documentElement.clientWidth > 992) {
    CARDS_PER_PAGE = 2;
  } else {
    CARDS_PER_PAGE = 1;
  }

  const getNewArr = () => {
    return cardsData.slice(index.num, index.num + CARDS_PER_PAGE);
  };

  const getNext = () => {
    if (index.num === cardsData.length - CARDS_PER_PAGE) {
      setIndex((prev) => ({
        ...prev,
        num: (prev.num = 0),
      }));
    } else {
      setIndex((prev) => ({
        ...prev,
        num: prev.num + CARDS_PER_PAGE,
      }));
    }
    console.log('click');
  };

  const getButtons = () => {
    return cardsData.length / CARDS_PER_PAGE;
  };

  return (
    <div className="CardsContainer" onClick={getNext}>
      <div className="CardsContainer__cards">
        {getNewArr(cardsData).map((card) => (
          <EventCard key={card.id} number={card.number} title={card.title} text={card.text} />
        ))}
      </div>
      <div className="CardsContainer__buttons">
        {[...Array(getButtons())].map((item, index) => (
          <button key={index} className="CardsContainer__button"></button>
        ))}
      </div>
    </div>
  );
};
