import styles from './TextInput.module.scss';

const TextInput = ({placeholder}) => {
    return (<input className={styles.input} placeholder={placeholder} type="text" />);
};

export default TextInput;