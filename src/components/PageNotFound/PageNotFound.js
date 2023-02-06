import PageTitle from "../PageTitle/PageTitle"
import styles from "./PageNotFound.module.scss"

const PageNotFound = () => {
  return (
    <div className={styles.notfound}>
      <PageTitle>
        404 Page Not Found
      </PageTitle>
      <a href='/' className={styles.icon}>
        <span className='fa fa-frown-o' />
      </a>
    </div>
  );
};

export default PageNotFound
