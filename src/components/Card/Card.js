import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';
import clsx from 'clsx';
import { useState } from 'react';

const Card = props => {

  const cardId = props.cardId;
  const [favoriteValue, setFavoriteValue] = useState(props.isFavorite);
  const dispatch = useDispatch();

  const handleClick = e => {
    e.preventDefault();
    setFavoriteValue(!favoriteValue);
    dispatch(toggleCardFavorite(cardId));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <button onClick={handleClick} className={clsx(styles.button, favoriteValue && styles.active)}>
        <i className="fa fa-star"></i>
      </button>
    </li>
  );
};

export default Card;
