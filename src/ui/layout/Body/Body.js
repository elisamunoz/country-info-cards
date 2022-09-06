import styles from "./Body.module.scss";

const Body = ({ children }) => (
  <div className={styles.body}>
    <div className={styles.content}>{children}</div>
  </div>
);

export default Body;
