import { useSelector } from 'react-redux';
import { getCardFavorite } from '../../redux/store';
import styles from './Favorite.module.scss';
import Card from '../Card/Card';
import PageTitle from '../PageTitle/PageTitle';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Favorite = () => {

  const favoriteCards = useSelector(getCardFavorite);
  const emptyFavoriteCards = favoriteCards.length === 0;

  return (
    <div>
      <PageTitle>Favorite</PageTitle>
      {emptyFavoriteCards &&
        <div className={styles.empty}>
          <h2 className={styles.title}>no cards...</h2>
          <Link to="/">
            <Button className={styles.button}>
              Back to home page
            </Button>
          </Link>
        </div>
      }
      {!emptyFavoriteCards &&
        <article className={styles.column}>
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
      }
    </div>
  );
}
export default Favorite;
