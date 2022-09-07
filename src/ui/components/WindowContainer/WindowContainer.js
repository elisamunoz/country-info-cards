import styles from "./WindowContainer.module.scss";

const WindowContainer = ({ children, title, icon, actionIcon, onClick }) => (
  <div className={styles.windowContainer}>
    <div className={styles.titleBar}>
      <img src={icon} className={styles.icon} />
      <h3 className={styles.title}>{title}</h3>
      <img src={actionIcon} className={styles.icon} onClick={onClick} />
    </div>
    <div className={styles.options}>Option 1</div>
    <div className={styles.content}>{children}</div>
  </div>
);

export default WindowContainer;