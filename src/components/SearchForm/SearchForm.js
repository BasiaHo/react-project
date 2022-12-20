import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchTerm } from '../../redux/store';
import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const SearchForm = () => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearchTerm(searchText));
  };

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        placeholder='Search...'
        value={searchText}
        onChange={handleSearchText}
      />
      <Button>
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};

export default SearchForm;
