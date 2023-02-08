import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { searchValue, updateSearchstring } from '../../redux/store';

const SearchForm = () => {

  const searchInputValue = useSelector(searchValue)
  const [searchString, setSearchString] = useState(searchInputValue);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateSearchstring( searchString ));
  }

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput 
        placeholder="Search..."
        value={searchString}
        onChange={e => setSearchString(e.target.value)}
      />
      <Button>
        <span className='fa fa-search' 
      />    
      </Button>
    </form>
  );
};

export default SearchForm;
