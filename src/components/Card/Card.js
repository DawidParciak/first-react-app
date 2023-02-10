import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { removeCard, toggleCardFavorite } from '../../redux/cardsRedux';
import clsx from 'clsx';
import { useState } from 'react';

const Card = props => {

  const cardId = props.cardId;
  const [favoriteValue, setFavoriteValue] = useState(props.isFavorite);
  const dispatch = useDispatch();

  const handleFavorite = e => {
    e.preventDefault();
    setFavoriteValue(!favoriteValue);
    dispatch(toggleCardFavorite(cardId));
  };

  const handleRemove = e => {
    e.preventDefault();
    dispatch(removeCard(cardId));
  }

  return (
    <li className={styles.card}>
      {props.title}
      <div>
        <button onClick={handleFavorite} className={clsx(styles.button, favoriteValue && styles.active)}>
          <i className="fa fa-star"></i>
        </button>
        <button onClick={handleRemove} className={styles.button}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </li>
  );
};

export default Card;
