import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import styles from './ColumnForm.module.scss';

const ColumnForm = ({ action }) => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    action(title, icon);
    setTitle('');
    setIcon('');
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleIcon = (e) => {
    setIcon(e.target.value);
  };

  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <span>Title:</span>
      <TextInput
        value={title}
        placeholder='Insert Title...'
        onChange={handleTitle}
      />
      <span>Icon:</span>
      <TextInput
        type='text'
        value={icon}
        placeholder='Insert Icon...'
        onChange={handleIcon}
      />
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;
