import styles from "./Button.module.scss";

const Button = ({ onClick, text }) => (
  <button classNames={styles.button} onClick={onClick}>
    {text}
  </button>
);

export default Button;
