import styles from './List.module.scss';
import Column from '../Column/Column';

const List = () => {
    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h2 className={styles.title}>Thinks to do<span>soon!</span></h2>
            </header>
            <p className={styles.description}>Intresting things I want to check out</p>
            <section className={styles.columns}>
                <Column title="Books" />
                <Column title="Movies" />
                <Column title="Games" />
            </section>
        </div>
    );
};

export default List;
