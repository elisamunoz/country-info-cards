import { DESKTOP_ICON_INFO } from "../../../desktopIcons";
import DesktopIcon from "../../components/DesktopIcon";
import styles from "./Body.module.scss";

const Body = ({ children }) => (
  <div className={styles.body}>
    <div className={styles.content}>{children}</div>
    <div className={styles.desktopIcons}>
      {DESKTOP_ICON_INFO.map(icon => (
        <DesktopIcon
          key={icon.name}
          name={icon.name}
          icon={icon.icon}
          link={icon.link}
          alt={icon.alt}
        />
      ))}
    </div>
  </div>
);

export default Body;
