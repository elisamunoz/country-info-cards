import styles from "./DesktopIcon.module.scss";

const DesktopIcon = ({ name, icon, link, alt, onClick }) => (
  <div className={styles.desktopIcon} onClick={onClick}>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img alt={alt} src={icon} className={styles.icon} />
      <h3 className={styles.name}>{name}</h3>
    </a>
  </div>
);

export default DesktopIcon;
