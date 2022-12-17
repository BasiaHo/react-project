import { useState, useEffect } from 'react';
import shortid from 'shortid';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import styles from './List.module.scss';

const List = () => {

  const [columns, setColumns] = useState([
    { id: 1, title: 'Books', icon: 'book' },
    { id: 2, title: 'Movies', icon: 'film' },
    { id: 3, title: 'Games', icon: 'gamepad' },
  ]);

  const addColumn = (title,icon) => {
    setColumns([...columns, { id: shortid(), title: title, icon: icon }]);
  };

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          Things to do<span>soon!</span>
        </h2>
      </header>
      <p className={styles.description}>
        Interesting things I want to check out
      </p>
      <section className={styles.columns}>
        {columns.map((column) => (
          <Column key={column.id} title={column.title} icon={column.icon} />
        ))}
      </section>
      <ColumnForm action={addColumn}/>
    </div>
  );
};

export default List;
