import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import styles from './CardForm.module.scss';

const CardForm = ({ columnId }) => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_CARD', payload: { title: title, columnId } });
    setTitle('');
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <TextInput
        value={title}
        placeholder='Insert Card...'
        onChange={handleTitle}
      />
      <Button>Add card</Button>
    </form>
  );
};

export default CardForm;
