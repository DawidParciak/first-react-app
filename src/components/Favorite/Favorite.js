import { useSelector } from 'react-redux';
import { getCardFavorite } from '../../redux/store';
import styles from './Favorite.module.scss';
import Card from '../Card/Card';
import PageTitle from '../PageTitle/PageTitle';

const Favorite = () => {

  const favoriteCards = useSelector(getCardFavorite);

  let emptyFavoriteCards = '';

  if (favoriteCards.length === 0) {
    emptyFavoriteCards = 'no cards...'
  }

  return (
    <div>
      <PageTitle>Favorite</PageTitle>
      <article className={styles.column}>
        <h2 className={styles.title}>{emptyFavoriteCards}</h2>
        <ul className={styles.cards}>
          {favoriteCards.map(favoriteCard => 
            <Card 
              key={favoriteCard.id} 
              title={favoriteCard.title} 
              isFavorite={favoriteCard.isFavorite}
              cardId={favoriteCard.id}
            />
          )}
        </ul>
      </article>
    </div>
  );
}

export default Favorite;
