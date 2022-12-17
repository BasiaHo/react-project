import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import styles from './ColumnForm.module.scss';

const ColumnForm = (props) => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.action(title, icon);
    setTitle('');
    setIcon('');
  };

  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <span>Title:</span>
      <TextInput
        value={title}
        placeholder='Insert Title...'
        onChange={(e) => setTitle(e.target.value)}
      />
      <span>Icon:</span>
      <TextInput
        type='text'
        value={icon}
        placeholder='Insert Icon...'
        onChange={(e) => setIcon(e.target.value)}
      />
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;
