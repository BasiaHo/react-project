import { useSelector } from 'react-redux';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import styles from './List.module.scss';

const List = () => {
  const columns = useSelector((state) => state.columns);
  const addCard = useSelector((state) => state.addCard);
  const addColumn = useSelector((state) => state.addColumn);

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
          <Column
            key={column.id}
            id={column.id}
            title={column.title}
            icon={column.icon}
            cards={column.cards}
            addCard={addCard}
          />
        ))}
      </section>
      <ColumnForm action={addColumn} />
    </div>
  );
};

export default List;
