import { CardContent } from '../CardContent/CardContent';
import { CardNumber } from '../CardNumber/CardNumber';
import { CardTitle } from '../CardTitle/CardTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import './EventCard.scss';

export const EventCard = ({ id, number, title, text }) => {
  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="EventCard">
      <div className="EventCard__wrapper">
        <CardNumber number={number} />
        <CardTitle title={title} />
        <CardContent text={text} />
        <a href="id" className="EventCard__link" onClick={handleClick}>
          Learn more <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </div>
  );
};
