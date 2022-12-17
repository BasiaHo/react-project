import styles from './Card.module.scss';

export const Card = (props) => {
  return <li className={styles.card}>{props.title}</li>;
};

export default Card;
