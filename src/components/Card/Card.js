import styles from './Card.module.scss';

export const Card = ({ title }) => {
  return <li className={styles.card}>{title}</li>;
};

export default Card;
