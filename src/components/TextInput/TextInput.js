import styles from './TextInput.module.scss';

const TextInput = ({ placeholder, value, onChange }) => {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type='text'
    />
  );
};

export default TextInput;
