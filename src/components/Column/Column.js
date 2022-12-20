import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import styles from './Column.module.scss';

export const Column = ({ icon, title, id, addCard }) => {
  const cards = useSelector((state) =>
    state.cards.filter((card) => card.columnId === id)
  );

  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={`${styles.icon} fa fa-${icon}`} />
        {title}
      </h2>git
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card key={card.id} title={card.title} />
        ))}
      </ul>
      <CardForm columnId={id} action={addCard} />
    </article>
  );
};

export default Column;
