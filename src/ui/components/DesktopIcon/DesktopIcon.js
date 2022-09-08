import styles from "./DesktopIcon.module.scss";

const DesktopIcon = ({ name, icon, link }) => (
  <div className={styles.desktopIcon}>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={icon} className={styles.icon} />
      <h3 className={styles.name}>{name}</h3>
    </a>
  </div>
);

export default DesktopIcon;
